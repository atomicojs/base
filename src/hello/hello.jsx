import { c } from "atomico";
import style from "./hello.css";

function hello({ message }) {
  return (
    <host shadowDom>
      <div class="layer">{message}</div>
      <div class="box">
        <slot></slot>
      </div>
    </host>
  );
}

hello.props = {
  message: {
    type: String,
    value: "Hello.",
  },
};

hello.styles = style;

export const Hello = c(hello);
