import { h, customElement } from "atomico";
import style from "./atomico-header.css";

function AtomicoHeader() {
  return (
    <host shadowDom styleSheet={style}>
      <slot name="brand"></slot>
      <slot name="links"></slot>
    </host>
  );
}

AtomicoHeader.props = {
  fix: {
    type: String,
    reflect: true,
    value: "top"
  }
};

export default customElement("atomico-header", AtomicoHeader);
