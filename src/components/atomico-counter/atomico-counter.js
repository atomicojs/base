import { customElement, useProp } from "atomico";
import html from "atomico/html";

function AtomicoCounter() {
  let [count, setCount] = useProp("count"); // interacts with the property as a functional hook
  return html`
    <host shadowDom>
      <style>
        * {
          font-size: 200%;
        }

        span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }
      </style>
      <button onclick=${() => setCount(count - 1)}>-</button>
      <span>${count}</span>
      <button onclick=${() => setCount(count + 1)}>+</button>
    </host>
  `;
}

AtomicoCounter.props = {
  // create property and register count attribute as observable
  count: {
    type: Number, // normalize all value for property as numeric
    reflect: true, // reflects the count property as an attribute
    value: 0, // initialize the value to 0
    event: { type: "ChangeCount" }, // dispatches ChangeCount event at every count change, for subscription of side effects
  },
};

customElement("atomico-counter", AtomicoCounter);
