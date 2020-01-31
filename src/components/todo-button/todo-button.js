import { h, customElement } from "atomico";
import style from "./todo-button.css";

const TodoButton = ({ background, color }) => {
  return (
    <host shadowDom>
      <style>{style}</style>
      <button class="button" style={{ background, color }}>
        <slot></slot>
      </button>
    </host>
  );
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

export default customElement("todo-button", TodoButton);
