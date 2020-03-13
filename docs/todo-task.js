import { c as customElement, u as useProp, a as createElement } from './chunks/d59176d5.js';

var style = ":host {\r\n  width: 100%;\r\n  display: flex;\r\n  padding: 0.5rem;\r\n  box-sizing: border-box;\r\n  cursor: pointer;\r\n}\r\n\r\n:host([checked]) .content {\r\n    text-decoration: line-through;\r\n  }\r\n\r\n:host([checked]) .checked span {\r\n    opacity: 1;\r\n  }\r\n\r\n.content {\r\n  flex: 0%;\r\n}\r\n\r\n.checked {\r\n  width: 20px;\r\n  height: 20px;\r\n  border: 1px solid currentColor;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 0.8em\r\n}\r\n\r\n.checked span {\r\n    opacity: 0;\r\n    transition: 0.3s ease all;\r\n  }\r\n";

const TodoTask = () => {
  let [checked, setChecked] = useProp("checked");
  return createElement("host", {
    shadowDom: true,
    onclick: () => setChecked(!checked)
  }, createElement("style", null, style), createElement("div", {
    class: "content"
  }, createElement("slot", null)), createElement("div", {
    class: "checked"
  }, createElement("span", null, "\u2714")));
};

TodoTask.props = {
  checked: {
    type: Boolean,
    reflect: true,
    event: {
      type: "change"
    }
  }
};
var TodoTask$1 = customElement("todo-task", TodoTask);

export default TodoTask$1;
//# sourceMappingURL=todo-task.js.map
