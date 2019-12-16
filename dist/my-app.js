const HOOK_MOUNT = Symbol("mount");
const HOOK_MOUNTED = Symbol("mounted");
const HOOK_UPDATE = Symbol("update");
const HOOK_UPDATED = Symbol("updated");
const HOOK_UNMOUNT = Symbol("unmount");
const HOOK_CURRENT = {};
const ELEMENT_PROPS = Symbol("props");
const ELEMENT_IGNORE_ATTR = Symbol("ignore");
const ELEMENT_TRUE_VALUES = [true, 1, "", "1", "true"];
const NODE_TYPE = "localName";
const KEY = Symbol("key");
const META_STYLE_SHEET = Symbol("styleSheet");
const META_MAP_CHILDREN = Symbol("mapChildren");
const META_KEYES = Symbol("keyes");
const NODE_HOST = "host";
const IGNORE_CHILDREN = {
  innerHTML: 1,
  textContent: 1,
  contenteditable: 1
};
const JOIN_CHILDREN = {
  style: 1,
  children: 1
};
const HYDRATE_PROPS = {
  className: 1,
  id: 1,
  checked: 1,
  value: 1,
  selected: 1
};
const CACHE_STYLE_SHEET = {};
const SUPPORT_STYLE_SHEET = "adoptedStyleSheets" in document;
const STYLE_SHEET_KEY = Symbol();

/**
 * Return if value is array
 * @param {*}
 * @return {boolean}
 */
function isArray(value) {
  return Array.isArray(value);
}

function isFunction(value) {
  return typeof value == "function";
} // export function fps(callback, count = 3) {
//     count-- ? requestAnimationFrame(() => fps(callback, count)) : callback();
// }


function promise(callback) {
  return new Promise(callback);
}

function update(hook, type) {
  hook[0] && (hook[1] = hook[0](hook[1], type));
}

function updateAll(hooks, type) {
  for (let i in hooks) update(hooks[i], type);
}

function createHookCollection(render, host) {
  let hooks = {};
  let mounted;
  let hook = {
    use,
    load,
    updated,
    unmount
  };
  let ref = {
    hook,
    host,
    render
  };

  function load(callback, param) {
    HOOK_CURRENT.index = 0;
    HOOK_CURRENT.ref = ref;
    let resolve = callback(param);
    HOOK_CURRENT.ref = 0;
    return resolve;
  }

  function use(reducer, state) {
    let index = HOOK_CURRENT.index++;
    let mount; // record the hook and the initial state of this

    if (!hooks[index]) {
      hooks[index] = [null, state];
      mount = 1;
    } // The hook always receives the last reduce.


    hooks[index][0] = reducer;
    update(hooks[index], mount ? HOOK_MOUNT : HOOK_UPDATE);
    return hooks[index];
  }

  function updated() {
    let type = mounted ? HOOK_UPDATED : HOOK_MOUNTED;
    mounted = 1;
    updateAll(hooks, type);
  }

  function unmount() {
    updateAll(hooks, HOOK_UNMOUNT);
  }

  return hook;
}
/**
 *
 * @param {import("./render").HTMLNode} node
 * @param {Object} props
 * @param {Object} nextProps
 * @param {boolean} isSvg
 * @param {Object} handlers
 **/


function diffProps(node, props, nextProps, isSvg, handlers) {
  props = props || {};

  for (let key in props) {
    if (!(key in nextProps)) {
      setProperty(node, key, props[key], null, isSvg, handlers);
    }
  }

  let ignoreChildren;

  for (let key in nextProps) {
    setProperty(node, key, props[key], nextProps[key], isSvg, handlers);
    ignoreChildren = ignoreChildren || IGNORE_CHILDREN[key];
  }

  return ignoreChildren;
}

function setProperty(node, key, prevValue, nextValue, isSvg, handlers) {
  key = key == "class" && !isSvg ? "className" : key; // define empty value

  prevValue = prevValue == null ? null : prevValue;
  nextValue = nextValue == null ? null : nextValue;

  if (key in node && HYDRATE_PROPS[key]) {
    prevValue = node[key];
  }

  if (nextValue === prevValue) return;

  if (key[0] == "o" && key[1] == "n" && (isFunction(nextValue) || isFunction(prevValue))) {
    setEvent(node, key, nextValue, handlers);
    return;
  }

  switch (key) {
    /**
     * add support {@link https://developer.mozilla.org/es/docs/Web/API/CSSStyleSheet}
     */
    case "styleSheet":
      if (SUPPORT_STYLE_SHEET) node.shadowRoot.adoptedStyleSheets = [].concat(nextValue).map(cssText => {
        if (cssText instanceof CSSStyleSheet) {
          return cssText;
        }

        if (!CACHE_STYLE_SHEET[cssText]) {
          CACHE_STYLE_SHEET[cssText] = new CSSStyleSheet();
          CACHE_STYLE_SHEET[cssText].replace(cssText);
        }

        return CACHE_STYLE_SHEET[cssText];
      });
      break;

    case "ref":
      if (nextValue) nextValue.current = node;
      break;

    case "style":
      setStyle(node, prevValue || "", nextValue || "");
      break;

    case "key":
      node[KEY] = nextValue;
      break;

    default:
      if (!isSvg && key != "list" && key in node) {
        node[key] = nextValue == null ? "" : nextValue;
      } else if (nextValue == null) {
        node.removeAttribute(key);
      } else {
        node.setAttribute(key, typeof nextValue == "object" ? JSON.stringify(nextValue) : nextValue);
      }

  }
}
/**
 *
 * @param {import("./render").HTMLNode} node
 * @param {string} type
 * @param {function} [nextHandler]
 * @param {object} handlers
 */


function setEvent(node, type, nextHandler, handlers) {
  // get the name of the event to use
  type = type.slice(type[2] == "-" ? 3 : 2); // add handleEvent to handlers

  if (!handlers.handleEvent) {
    /**
     * {@link https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener#The_value_of_this_within_the_handler}
     **/
    handlers.handleEvent = event => handlers[event.type].call(node, event);
  }

  if (nextHandler) {
    // create the subscriber if it does not exist
    if (!handlers[type]) {
      node.addEventListener(type, handlers);
    } // update the associated event


    handlers[type] = nextHandler;
  } else {
    // 	delete the associated event
    if (handlers[type]) {
      node.removeEventListener(type, handlers);
      delete handlers[type];
    }
  }
}
/**
 * define style as string inline,this generates less mutation
 * to the sun and cleans the previously defined properties.
 * @param {import("./render").HTMLNode} node
 * @param {(string|object)} prevValue
 * @param {(string|object)} nextValue
 */


function setStyle(node, prevValue, nextValue) {
  let style = node.style,
      prevIsObject;

  if (typeof prevValue == "object") {
    prevIsObject = true;

    for (let key in prevValue) {
      if (!(key in nextValue)) setPropertyStyle(style, key, null);
    }
  }

  if (typeof nextValue == "object") {
    for (let key in nextValue) {
      let value = nextValue[key];
      if (prevIsObject && prevValue[key] === value) continue;
      setPropertyStyle(style, key, value);
    }
  } else {
    style.cssText = nextValue;
  }
}

function setPropertyStyle(style, key, value) {
  let method = "setProperty";

  if (value == null) {
    method = "removeProperty";
    value = null;
  }

  if (~key.indexOf("-")) {
    style[method](key, value);
  } else {
    style[key] = value;
  }
}

let vNodeEmpty = createElement(null, {
  children: ""
});
/**
 * @param {VnodeType} nodeType
 * @param {VnodeProps} [props]
 * @param {Vnode|Vnode[]} [children]
 * @returns {Vnode}
 **/

function createElement(nodeType, props, ...children) {
  let vnode = {
    children,
    ...props,
    nodeType: nodeType || null
  };
  return vnode;
}
/**
 * toVnode, processes the object for correct use within the diff process.
 **/


function toVnode(value) {
  if (isVnodeValue(value)) {
    return value;
  } else {
    if (!value[META_MAP_CHILDREN]) {
      let scan = mapChildren(value.children);
      value.children = scan.children;

      if (scan.keyes) {
        value[META_KEYES] = scan.keyes;
      }

      value[META_MAP_CHILDREN] = true;
    }

    if (value.styleSheet && !SUPPORT_STYLE_SHEET) {
      if (!value[META_STYLE_SHEET]) {
        value.children.unshift(toVnode(createElement("style", value[META_KEYES] ? {
          key: STYLE_SHEET_KEY
        } : {}, value.styleSheet)));

        if (value[META_KEYES]) {
          value[META_KEYES].unshift(STYLE_SHEET_KEY);
        }
      }

      value[META_STYLE_SHEET] = true;
    }
  }

  return value;
}

function mapChildren(children, scan = {
  children: []
}, deep = 0) {
  if (isArray(children)) {
    let length = children.length;

    for (let i = 0; i < length; i++) {
      mapChildren(children[i], scan, deep + 1);
    }
  } else {
    if (children == null && !deep) return scan;
    let vnode = toVnode(children);

    if (vnode != null && typeof vnode == "object") {
      if (isFunction(vnode.nodeType)) {
        let {
          nodeType,
          ...props
        } = vnode;
        return mapChildren(nodeType(props), scan, deep + 1);
      }

      if ("key" in vnode) {
        scan.keyes = scan.keyes || [];

        if (!~scan.keyes.indexOf(vnode.key)) {
          scan.keyes.push(vnode.key);
        }
      }
    }

    scan.children.push(vnode);
  }

  return scan;
}

function isVnodeEmpty(value) {
  let type = typeof value;
  return value == null || type == "boolean" || type == "function";
}

function fillVnodeValue(value) {
  return isVnodeEmpty(value) ? vNodeEmpty : createElement(null, {
    children: "" + value
  });
}

function isVnodeValue(value) {
  let type = typeof value;
  return value == null || type == "string" || type == "number" || type == "function" || type == "boolean";
}
/**
 * @typedef {(Object<string,any>)} VnodeProps;
 *
 * @typedef {(Function|string)} VnodeType;
 *
 * @typedef {{type:VnodeType,props:VnodeProps}} Vnode
 **/

/**
 *
 * @param {import("./render").ConfigRender} config
 * @param {import("./render").HTMLNode} node
 * @param {import("./vnode").Vnode} nextVnode
 * @param {boolean} isSvg
 * @param {Function} currentUpdateComponent
 * @return {import("./render").HTMLNode}
 **/


function diff(id, node, nextVnode, isSvg) {
  let {
    vnode,
    handlers = {}
  } = node && node[id] || {};
  if (vnode == nextVnode && vnode != null) return node;
  nextVnode = isVnodeValue(nextVnode) ? fillVnodeValue(nextVnode) : nextVnode;
  let {
    nodeType,
    shadowDom,
    children,
    is,
    ...props
  } = vnode || {};
  let {
    nodeType: nextNodeType,
    shadowDom: nextShadowDom,
    children: nextChildren,
    is: nextIs,
    ...nextProps
  } = nextVnode;
  isSvg = isSvg || nextNodeType == "svg";

  if (nextNodeType != NODE_HOST && (getNodeName(node) !== nextNodeType || is != nextIs)) {
    let nextNode = createNode(nextNodeType, isSvg, nextIs);
    let parent = node && node.parentNode;

    if (parent) {
      parent.replaceChild(nextNode, node);
    }

    node = nextNode;
    handlers = {};
  }

  if (JOIN_CHILDREN[nextNodeType]) {
    nextNodeType = null;
    nextChildren = nextChildren.join("");
  }

  if (nextNodeType == null) {
    if (node.textContent != nextChildren) {
      node.textContent = nextChildren;
    }
  } else {
    if (shadowDom != nextShadowDom) {
      let {
        shadowRoot
      } = node;
      let mode = nextShadowDom && !shadowRoot ? "open" : !nextShadowDom && shadowRoot ? "closed" : 0;
      if (mode) node.attachShadow({
        mode
      });
    }

    let ignoreChildren = diffProps(node, props, nextProps, isSvg, handlers);

    if (!ignoreChildren && children != nextChildren) {
      diffChildren(id, nextShadowDom ? node.shadowRoot : node, nextChildren, nextProps[META_KEYES], isSvg);
    }
  }

  node[id] = {
    vnode: nextVnode,
    handlers
  };
  return node;
}
/**
 *
 * @param {import("./render").ConfigRender} config
 * @param {import("./render").HTMLNode} parent
 * @param {import("./vnode").Vnode[]} [nextChildren]
 * @param {boolean} isSvg
 */


function diffChildren(id, parent, children, keyes, isSvg) {
  let childrenLenght = children.length;
  let {
    childNodes
  } = parent;
  let childNodesKeyes = {};
  let childNodesLength = childNodes.length;
  let index = keyes ? 0 : childNodesLength > childrenLenght ? childrenLenght : childNodesLength;

  for (; index < childNodesLength; index++) {
    let childNode = childNodes[index];
    let key = index;

    if (keyes) {
      key = childNode[KEY];

      if (keyes.indexOf(key) > -1) {
        childNodesKeyes[key] = childNode;
        continue;
      }
    }

    index--;
    childNodesLength--;
    parent.removeChild(childNode);
  }

  for (let i = 0; i < childrenLenght; i++) {
    let child = children[i];
    let indexChildNode = childNodes[i];
    let key = keyes ? child.key : i;
    let childNode = keyes ? childNodesKeyes[key] : indexChildNode;

    if (keyes && childNode) {
      if (childNode != indexChildNode) {
        parent.insertBefore(childNode, indexChildNode);
      }
    }

    let nextChildNode = diff(id, childNode, child, isSvg);

    if (!childNode) {
      if (childNodes[i]) {
        parent.insertBefore(nextChildNode, childNodes[i]);
      } else {
        parent.appendChild(nextChildNode);
      }
    }
  }
}
/**
 *
 * @param {string} type
 * @param {boolean} isSvg
 * @returns {import("./render").HTMLNode}
 */


function createNode(type, isSvg, is) {
  let doc = document;
  let nextNode;

  if (type != null) {
    nextNode = isSvg ? doc.createElementNS("http://www.w3.org/2000/svg", type) : doc.createElement(type, is ? {
      is
    } : null);
  } else {
    nextNode = doc.createTextNode("");
  }

  return nextNode;
}
/**
 * returns the localName of the node
 * @param {import("./render").HTMLNode} node
 */


function getNodeName(node) {
  if (!node) return;

  if (!node[NODE_TYPE]) {
    node[NODE_TYPE] = node.nodeName.toLowerCase();
  }

  let localName = node[NODE_TYPE];
  return localName == "#text" ? null : localName;
}

function render(vnode, node, id = "vnode") {
  if (vnode != null && typeof vnode == "object" && vnode.nodeType != NODE_HOST) {
    vnode = createElement(NODE_HOST, {
      children: vnode
    });
  }

  vnode = toVnode(vnode);
  diff(id, node, vnode);
  return node;
}

function setAttr(node, attr, value) {
  if (value == null) {
    node.removeAttribute(attr);
  } else {
    node.setAttribute(attr, typeof value == "object" ? JSON.stringify(value) : value);
  }
}

function formatType(value, type = String) {
  try {
    if (type == Boolean) {
      value = ELEMENT_TRUE_VALUES.indexOf(value) > -1;
    } else if (typeof value == "string") {
      value = type == Number ? Number(value) : type == Object || type == Array ? JSON.parse(value) : type == Date ? new Date(value) : value;
    }

    if ({}.toString.call(value) == "[object ".concat(type.name, "]")) {
      return {
        value,
        error: type == Number && Number.isNaN(value)
      };
    }
  } catch (e) {}

  return {
    value,
    error: true
  };
}

function propToAttr(prop) {
  return prop.replace(/([A-Z])/g, "-$1").toLowerCase();
}

function attrToProp(attr) {
  return attr.replace(/-(\w)/g, (all, letter) => letter.toUpperCase());
}

function dispatchEvent(node, type, customEventInit) {
  node.dispatchEvent(new CustomEvent(type, typeof customEventInit == "object" ? customEventInit : null));
}

let defer = Promise.resolve();
let queue = [];
let running;
let maxFps = 1000 / 60;
const IMPORTANT = Symbol("important");

function clearQueue() {
  let time = performance.now();
  let length = queue.length;
  let current = queue;
  queue = [];

  while (length--) {
    let callback = current[length];

    if (callback[IMPORTANT] || performance.now() - time < maxFps) {
      callback();
    } else {
      queue = queue.concat(current.slice(0, length + 1));
      break;
    }
  }

  if (queue.length) {
    requestAnimationFrame(clearQueue);
    return;
  }

  running = false;
}
/**
 * add a task to the queue
 * @param {Function} callback
 * @returns {Promise} Generate a promise that show  if the queue is complete
 */


function addQueue(callback) {
  if (!running) {
    running = true;
    defer.then(clearQueue);
  }

  if (!queue.includes(callback)) queue.push(callback);
}

function load(self, componentRender, componentError) {
  if (self.mount) return;
  let id = Symbol("vnode");
  let isPrevent;
  let isUnmount;
  self[ELEMENT_PROPS] = {};
  let isMounted;
  let resolveUpdate;

  let rerender = () => {
    // disables blocking, allowing the cycle to be regenerate
    isPrevent = false; // After the first render it disables the important condition

    if (rerender[IMPORTANT]) rerender[IMPORTANT] = false;

    try {
      render(hooks.load(componentRender, { ...self[ELEMENT_PROPS]
      }), self, id);
      resolveUpdate();
    } catch (e) {
      (componentError || console.error)(e);
    }
  }; // mark the first render as important, self speeds up the rendering


  rerender[IMPORTANT] = true;

  self.update = () => {
    if (isUnmount) return;
    let rendered = self.rendered;

    if (!isPrevent) {
      isPrevent = true; // create a promise to observe the status of the update

      rendered = promise(resolve => resolveUpdate = resolve).then( // the UPDATED state is only propagated through
      // the resolution of the promise
      // Why? ... to improve communication between web-component parent and children
      hooks.updated); // if the component is already mounted, avoid using self.mounted,
      // to speed up the microtask

      isMounted ? addQueue(rerender) : self.mounted.then(() => {
        isMounted = true;
        addQueue(rerender);
      });
    }

    return self.rendered = rendered;
  }; // any update from hook is added to a separate queue


  let hooks = createHookCollection(() => addQueue(self.update), self); // creates a collection of microtask
  // associated with the mounted of the component

  self.mounted = promise(resolve => self.mount = () => {
    isMounted = false; // allows the reuse of the component when it is isUnmounted and mounted

    if (isUnmount == true) {
      isUnmount = false;
      self.mounted = self.update();
    }

    resolve();
  });
  /**
   * creates a collection of microtask
   * associated with the unmounted of the component
   */

  self.unmounted = promise(resolve => self.unmount = () => {
    isUnmount = true;
    hooks.unmount();
    resolve();
  });
  self.initialize();
  self.update();
}
/**
 * register the component, be it a class or function
 * @param {string} nodeType
 * @param {Function} component
 * @return {Function} returns a jsx component
 */


function customElement(nodeType, component, options) {
  if (isFunction(nodeType)) {
    // By defining nodeType as a function, custom ELement
    // allows the assignment of a constructor to be extended
    let BaseElement = component || HTMLElement;
    component = nodeType;
    let {
      props,
      error
    } = component;
    /**@type {Function[]}*/

    let initialize = [];
    /**@type {string[]} */

    let attrs = [];
    let CustomElement = class extends BaseElement {
      constructor() {
        super();
        /**
         * identifier to store the virtual-dom state,
         * this is unique between instances of the
         * component to securely consider the host status
         */

        load(this, component, error);
      }

      connectedCallback() {
        load(this, component, error);
        this.mount();
      }

      disconnectedCallback() {
        this.unmount();
      }

      attributeChangedCallback(attr, oldValue, value) {
        if (attr === this[ELEMENT_IGNORE_ATTR] || oldValue === value) return;
        this[attrToProp(attr)] = value;
      }

      initialize() {
        let length = initialize.length;

        while (length--) initialize[length](this);
      }

    };
    let prototype = CustomElement.prototype;

    for (let prop in props) setProperty$1(prototype, initialize, attrs, prop, props[prop]);

    CustomElement.observedAttributes = attrs;
    return CustomElement;
  } else {
    let {
      base,
      ...opts
    } = options || {};
    customElements.define(nodeType, customElement(component, base), opts);
    return props => opts.extends ? createElement(opts.extends, { ...props,
      is: nodeType
    }) : createElement(nodeType, props);
  }
}

function setProperty$1(prototype, initialize, attrs, prop, schema) {
  let attr = propToAttr(prop);
  schema = schema.name ? {
    type: schema
  } : schema; // avoid rewriting the prototype

  if (prop in prototype) return;

  function set(nextValue) {
    let prevValue = this[ELEMENT_PROPS][prop];

    if (isFunction(nextValue)) {
      nextValue = nextValue(prevValue);
    }

    let {
      value,
      error
    } = formatType(nextValue, schema.type);

    if (error && value != null) {
      throw "the observable [".concat(prop, "] must be of the type [").concat(schema.type.name, "]");
    }

    if (prevValue == value) return;
    this[ELEMENT_PROPS][prop] = value;
    let rendered = this.update();

    if (schema.event) {
      // The event is only dispatched if the component has finished
      // the rendering cycle, this is useful to observe the changes
      rendered.then(() => dispatchEvent(this, schema.event.type || prop, schema.event));
    }

    if (schema.reflect) {
      // the default properties are only reflected once the web-component is mounted
      this.mounted.then(() => {
        this[ELEMENT_IGNORE_ATTR] = attr; //update is prevented

        setAttr(this, attr, schema.type == Boolean && !value ? null : value //
        );
        this[ELEMENT_IGNORE_ATTR] = false; // an upcoming update is allowed
      });
    }
  }

  function get() {
    return this[ELEMENT_PROPS][prop];
  }

  Object.defineProperty(prototype, prop, {
    set,
    get
  });

  if ("value" in schema) {
    initialize.push(self => {
      let {
        value
      } = schema;
      self[prop] = isFunction(value) ? value() : value;
    });
  }

  attrs.push(attr);
}

function AtomicoBrand({
  color,
  size
}) {
  return createElement("svg", {
    width: size,
    viewBox: "0 0 745 260"
  }, createElement("g", {
    id: "logo-white",
    transform: "translate(-311 -276)"
  }, createElement("rect", {
    id: "padding",
    width: "745",
    height: "260",
    transform: "translate(311 276)",
    opacity: "0"
  }), createElement("g", {
    id: "isotipo",
    transform: "translate(-62.399 477.454) rotate(-45)"
  }, createElement("path", {
    id: "Trazado_8",
    "data-name": "Trazado 8",
    d: "M-1245.356,341.791a31.088,31.088,0,0,1-4.215-.288l-20.068-20.068c2.127.44,4.306.788,6.474,1.034l19.286,19.286C-1244.374,341.78-1244.871,341.791-1245.356,341.791Zm5.908-.569-18.344-18.344c.939.037,1.9.055,2.855.055.862,0,1.735-.015,2.594-.046l17.176,17.176a30.854,30.854,0,0,1-4.281,1.158Zm-16.772-1.4a30.547,30.547,0,0,1-10.91-7.047,30.561,30.561,0,0,1-7.048-10.912l17.959,17.958Zm24.547-1.226-16.019-16.019c1.6-.159,3.212-.375,4.8-.641l14.663,14.663a30.678,30.678,0,0,1-3.443,2Zm6.267-4.137-13.344-13.344c1.44-.33,2.891-.71,4.31-1.129l11.8,11.8c-.3.331-.621.663-.945.987-.584.585-1.2,1.151-1.823,1.684Zm5-5.4h0l-10.289-10.289c1.308-.466,2.625-.979,3.914-1.526l8.481,8.481a30.713,30.713,0,0,1-2.1,3.334Zm3.688-6.716h0l-6.651-6.651c1.2-.584,2.4-1.211,3.573-1.866l4.383,4.383a30.8,30.8,0,0,1-1.3,4.134Zm2.014-8.39h0l-1.972-1.972c.7-.44,1.413-.9,2.111-1.374a31.094,31.094,0,0,1-.138,3.346Z",
    transform: "translate(1649.064 56.05)",
    fill: color
  }), createElement("path", {
    id: "Trazado_7",
    "data-name": "Trazado 7",
    d: "M-1321.651,191.587a68.963,68.963,0,0,1-13.8-1.391,68.11,68.11,0,0,1-12.85-3.989,68.465,68.465,0,0,1-11.629-6.312,68.952,68.952,0,0,1-10.132-8.359,68.949,68.949,0,0,1-8.359-10.132,68.46,68.46,0,0,1-6.312-11.628,68.122,68.122,0,0,1-3.989-12.85,68.977,68.977,0,0,1-1.391-13.8,68.976,68.976,0,0,1,1.391-13.8,68.121,68.121,0,0,1,3.989-12.85,68.462,68.462,0,0,1,6.312-11.628,68.953,68.953,0,0,1,8.359-10.131,68.955,68.955,0,0,1,10.132-8.359,68.47,68.47,0,0,1,11.629-6.312,68.116,68.116,0,0,1,12.85-3.989,68.965,68.965,0,0,1,13.8-1.391,68.751,68.751,0,0,1,16.407,1.979,68.093,68.093,0,0,1,14.975,5.622,68.669,68.669,0,0,1,13.07,8.794A68.938,68.938,0,0,1-1266.5,82.56a43.4,43.4,0,0,0-28.277,40.57A43.4,43.4,0,0,0-1266.5,163.7a68.937,68.937,0,0,1-10.694,11.493,68.67,68.67,0,0,1-13.07,8.794,68.092,68.092,0,0,1-14.975,5.622A68.751,68.751,0,0,1-1321.651,191.587Z",
    transform: "translate(1716.109 183.328)",
    fill: color
  }), createElement("path", {
    id: "Trazado_6",
    "data-name": "Trazado 6",
    d: "M-1388.348,73.679h31.8a38.414,38.414,0,0,1-15.9,3.421A38.415,38.415,0,0,1-1388.348,73.679Zm-7.374-4.394a38.8,38.8,0,0,1-5.263-4.816h57.072a38.8,38.8,0,0,1-5.263,4.816Zm-8.713-9.21a38.535,38.535,0,0,1-2.765-4.816h69.5a38.536,38.536,0,0,1-2.765,4.816Zm-4.555-9.21a38.263,38.263,0,0,1-1.28-4.816h75.642a38.263,38.263,0,0,1-1.28,4.816Zm-1.886-9.21q-.122-1.536-.123-3.105,0-.86.037-1.71h77.025q.037.85.037,1.71,0,1.567-.123,3.105Zm.357-9.21a38.333,38.333,0,0,1,1.088-4.815h73.963a38.354,38.354,0,0,1,1.088,4.815Zm2.681-9.21a38.456,38.456,0,0,1,2.5-4.815h65.766a38.472,38.472,0,0,1,2.5,4.815Zm5.644-9.21a38.789,38.789,0,0,1,4.738-4.815h50.013a38.764,38.764,0,0,1,4.738,4.815Zm11.073-9.21A38.373,38.373,0,0,1-1372.449,0a38.373,38.373,0,0,1,18.671,4.815Z",
    transform: "translate(1837 267.543)",
    fill: color
  })), createElement("path", {
    id: "logo",
    d: "M59.405,0H69.869L42.51-75.537H31.065L3.6,0H14.061l6.1-16.9H53.3ZM50.467-24.961H23L36.733-63.329ZM84.039-16.35c0,11.99,6,16.35,16.568,16.35h8.938V-8.393h-7.3c-6.1,0-8.284-2.071-8.284-7.957V-51.557h15.587v-8.175H93.958V-74.774H84.039v15.042H76.3v8.175h7.739Zm94.176-13.625c0-18.857-13.189-30.738-30.193-30.738-16.9,0-30.193,11.881-30.193,30.738,0,18.966,12.862,30.956,29.757,30.956C164.59.981,178.215-11.009,178.215-29.975Zm-50.249,0c0-15.042,9.483-22.127,19.947-22.127,10.246,0,20.165,7.085,20.165,22.127,0,15.151-10.137,22.236-20.492,22.236S127.966-14.824,127.966-29.975ZM277.514,0h9.81V-35.207c0-17.113-10.573-25.615-24.2-25.615-9.156,0-17.658,4.687-21.146,13.3-3.924-8.938-12.1-13.3-21.909-13.3-7.848,0-14.933,3.379-18.857,9.7v-8.611h-9.919V0h9.919V-32.918c0-12.862,6.867-19.293,16.9-19.293,9.81,0,16.35,6.213,16.35,18.421V0h9.81V-32.918c0-12.862,6.867-19.293,16.9-19.293,9.81,0,16.35,6.213,16.35,18.421Zm26.051,0h9.919V-59.732h-9.919Zm5.123-69.433a6.609,6.609,0,0,0,6.54-6.758,6.609,6.609,0,0,0-6.54-6.758,6.655,6.655,0,0,0-6.758,6.758A6.655,6.655,0,0,0,308.688-69.433Zm17.985,39.458c0,18.966,12.1,30.956,29.1,30.956C370.6.981,380.3-7.3,383.353-19.184H372.671c-2.18,7.521-8.066,11.772-16.895,11.772-10.9,0-18.966-7.739-18.966-22.563,0-14.606,8.066-22.345,18.966-22.345,8.829,0,14.824,4.578,16.895,11.772h10.682C380.3-53.083,370.6-60.713,355.776-60.713,338.772-60.713,326.673-48.723,326.673-29.975Zm126.549,0c0-18.857-13.189-30.738-30.193-30.738-16.9,0-30.193,11.881-30.193,30.738C392.836-11.009,405.7.981,422.593.981,439.6.981,453.222-11.009,453.222-29.975Zm-50.249,0c0-15.042,9.483-22.127,19.947-22.127,10.246,0,20.165,7.085,20.165,22.127,0,15.151-10.137,22.236-20.492,22.236S402.973-14.824,402.973-29.975Z",
    transform: "translate(548 447)",
    fill: color
  })));
}

AtomicoBrand.props = {
  size: {
    type: Number,
    value: 280
  },
  color: {
    type: String,
    value: "#fff"
  }
};
var AtomicoBrand$1 = customElement("atomico-brand", AtomicoBrand);

var style = `:host{
    position: absolute;
    width: 100%;
    padding: 15px 10%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
}

:host([fix="top"]){
    top: 0px;
    left: 0px;
}`;

function AtomicoHeader() {
  return createElement("host", {
    shadowDom: true,
    styleSheet: style
  }, createElement("slot", {
    name: "brand"
  }), createElement("slot", {
    name: "links"
  }));
}

AtomicoHeader.props = {
  fix: {
    type: String,
    reflect: true,
    value: "top"
  }
};
var AtomicoHeader$1 = customElement("atomico-header", AtomicoHeader);

var style$1 = `@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,700&display=swap');

:host{
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color : white;
    font-family: sans-serif;
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.title{
    display: inline-flex;
    align-items: center;
    font-size: 40px;
    margin:0px;
}

.text{
    font-size: 20px;
    margin:0px;
}


`;

function HelloWorld({
  message,
  length
}) {
  return createElement("host", {
    shadowDom: true,
    styleSheet: style$1
  }, createElement("div", null, createElement("h1", {
    class: "title"
  }, "Welcome to ", createElement(AtomicoBrand$1, null)), createElement("p", {
    class: "text"
  }, "A 3.7kB micro library to create amazing WebComponents and Applications"), createElement(AtomicoHeader$1, null, createElement(AtomicoBrand$1, {
    size: "120",
    slot: "brand"
  }), createElement("div", {
    slot: "links"
  }, "documentacion"))));
}

HelloWorld.props = {
  message: {
    type: String,
    value: "Atomico!"
  },
  length: {
    type: Number,
    value: 100
  }
};
var HelloWorld$1 = customElement("hello-world", HelloWorld);

var style$2 = `:host{
    width:100%;
    height: 100%;
    display: block;
    background: black;
}`;

function MyApp() {
  return createElement("host", {
    shadowDom: true,
    styleSheet: style$2
  }, createElement(HelloWorld$1, null));
}

customElement("my-app", MyApp);
//# sourceMappingURL=my-app.js.map
