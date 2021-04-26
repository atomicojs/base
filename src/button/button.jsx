import { c, useRef } from "atomico";

const style = /*css */ `
  :host{
    padding: .25rem 2rem;
    border-radius : 100vw;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  :host([type="normal"]){
    background: var(--ds-button-normal-bg, #f1f1f9);
    color: var(--ds--button-normal-cl,#000);
  }
  :host([type="success"]){
    background: var(--ds-button-success-bg, #blue);
    color: var(--ds--button-success-cl,#fff);
  }
`;

function button() {
  return (
    <host shadowDom>
      <style>{style}</style>
      <slot></slot>
    </host>
  );
}

button.props = {
  type: {
    type: String,
    reflect: true,
    value: "normal",
  },
};

export const Button = c(button);
