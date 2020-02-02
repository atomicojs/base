import { c as customElement, u as useProp, a as createElement } from './chunks/2f7efe37.js';

var style = `:host{width:100%;display:inline-block;color:var(--todo-input-color,#fff)}.input{width:100%;background:transparent;border:none;color:currentColor;font-size:.9em;font-family:unset;padding:2rem 1rem .5rem;outline:none}.label{position:relative}.placeholder{position:absolute;top:50%;left:1rem;transform:translateY(-50%);transition:0 0;transition:all .3s ease}.hr{width:100%;height:1px;background:currentColor;opacity:.25}.hr.-for-focus{opacity:1;height:2px;max-width:25%;transform-origin:left center;transition:all .3s ease;transform:scaleX(0)}.placeholder.--with-content,input:focus~.label{transform:translateY(-150%);font-size:.8em}input:focus~.-for-focus{transform:scale(1)}`;

const TodoInput = ({
  placeholder
}) => {
  let [value, setValue] = useProp("value");
  return createElement("host", {
    shadowDom: true
  }, createElement("style", null, style), createElement("label", {
    class: "label"
  }, createElement("input", {
    class: "input",
    value: value,
    oninput: ({
      target
    }) => setValue(target.value)
  }), createElement("span", {
    class: `placeholder ${value ? "--with-content" : ""}`
  }, placeholder), createElement("div", {
    class: "hr"
  }), createElement("div", {
    class: "hr -for-focus"
  })));
};

TodoInput.props = {
  placeholder: {
    type: String,
    value: "✍️ write your task!"
  },
  value: {
    type: String
  }
};
var TodoInput$1 = customElement("todo-input", TodoInput);

export default TodoInput$1;
//# sourceMappingURL=todo-input.js.map
