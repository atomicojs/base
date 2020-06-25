import { h, customElement } from "atomico";
import style from "./atomico-header.css";

function AtomicoHeader() {
  return (
    <host shadowDom>
      <style>{style}</style>
      <slot name="brand"></slot>
      <slot name="menu"></slot>
    </host>
  );
}

AtomicoHeader.props = {
  position: {
    type: String,
    value: "top",
    reflect: true,
  },
  fixed: {
    type: Boolean,
    reflect: true,
  },
};

customElement("atomico-header", AtomicoHeader);
