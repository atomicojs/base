import { c } from "atomico";
import html from "atomico/html";
import style from "./a-1.css";

const A1 = ({ message }) => {
  return html`
    <host shadowDom>
      <style>
        ${style}
      </style>
      <h1>👋 ${message}</h1>
    </host>
  `;
};

A1.props = {
  message: {
    type: String,
    value: "a-1",
    reflect: true,
    event: {
      type: "changeMessage",
    },
  },
};

customElements.define("a-1", c(A1));
