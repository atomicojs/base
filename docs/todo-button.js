import { c as customElement, a as createElement } from './chunks/d59176d5.js';

var style = ".button {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0.4rem 0.8rem;\r\n  font-size: 0.9em;\r\n  font-weight: bold;\r\n  border-radius: 5px;\r\n  border: none;\r\n}\r\n";

const TodoButton = ({
  background,
  color
}) => {
  return createElement("host", {
    shadowDom: true
  }, createElement("style", null, style), createElement("button", {
    class: "button",
    style: {
      background,
      color
    }
  }, createElement("slot", null)));
};

TodoButton.props = {
  color: {
    type: String,
    value: "black"
  },
  background: {
    type: String,
    value: "white"
  }
};
var TodoButton$1 = customElement("todo-button", TodoButton);

export default TodoButton$1;
//# sourceMappingURL=todo-button.js.map
