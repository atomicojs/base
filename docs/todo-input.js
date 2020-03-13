import { c as customElement, u as useProp, a as createElement } from './chunks/d59176d5.js';

var style = ":host {\r\n  width: 100%;\r\n  display: inline-block;\r\n  color: var(--todo-input-color, #fff);\r\n}\r\n\r\n.input {\r\n  width: 100%;\r\n  background: transparent;\r\n  border: none;\r\n  color: currentColor;\r\n  font-size: 0.9em;\r\n  font-family: unset;\r\n  padding: 2rem 1rem 0.5rem;\r\n  outline: none;\r\n}\r\n\r\n.label {\r\n  position: relative;\r\n}\r\n\r\n.placeholder {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 1rem;\r\n  transform: translateY(-50%);\r\n  transition: 0px 0px;\r\n  transition: 0.3s ease all;\r\n}\r\n\r\n.hr {\r\n  width: 100%;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.25\r\n}\r\n\r\n.hr.-for-focus {\r\n    opacity: 1;\r\n    height: 2px;\r\n    max-width: 25%;\r\n    transform-origin: left center;\r\n    transition: 0.3s ease all;\r\n    transform: scale(0, 1);\r\n  }\r\n\r\ninput:focus ~ .label,\r\n.placeholder.--with-content {\r\n  transform: translateY(-150%);\r\n  font-size: 0.8em;\r\n}\r\n\r\ninput:focus ~ .-for-focus {\r\n  transform: scale(1);\r\n}\r\n";

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
