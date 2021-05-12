import { c } from "atomico";
import style from "./hello/hello.css";

function hello({ message }) {
  return (
    <host shadowDom>
      <style>{style}</style>
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

export const Hello = c(hello);
