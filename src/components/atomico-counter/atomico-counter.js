import { h, customElement, useProp } from "atomico";
import html from "atomico/html";
import style from "./atomico-counter.css";

function AtomicoCounter() {
  let [count, setCount] = useProp("count");
  return html`<host shadowDom>
    <style>
      ${style}
    </style>
    <button onclick=${() => setCount(count - 1)}>-</button>
    <span>${count}</span>
    <button onclick=${() => setCount(count + 1)}>+</button>
  </host>`;
}

AtomicoCounter.props = {
  count: {
    type: Number,
    reflect: true,
    value: 0,
    event: { type: "ChangeCount" },
  },
};

customElement("atomico-counter", AtomicoCounter);
