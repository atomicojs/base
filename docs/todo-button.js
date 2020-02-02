import { c as customElement, a as createElement } from './chunks/2f7efe37.js';

var style = `.button{display:inline-flex;align-items:center;justify-content:center;padding:.4rem .8rem;font-size:.9em;font-weight:700;border-radius:5px;border:none}`;

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
