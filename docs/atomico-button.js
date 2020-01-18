import { c as customElement, a as createElement } from './chunks/8f4bfb1b.js';

function AtomicoButton({
  background,
  color,
  small
}) {
  return createElement("host", {
    style: {
      color,
      background,
      fontWeight: "600",
      border: "none",
      fontSize: small ? "10px" : "14px",
      padding: small ? ".25rem .5rem" : ".5rem 1rem",
      borderRadius: "10px",
      textDecoration: "none"
    }
  });
}

AtomicoButton.props = {
  small: Boolean,
  color: {
    type: String,
    value: "unset"
  },
  background: {
    type: String,
    value: "transparent"
  }
};
var atomicoButton = customElement("atomico-button", AtomicoButton, {
  base: HTMLAnchorElement,
  extends: "a"
});

export default atomicoButton;
//# sourceMappingURL=atomico-button.js.map
