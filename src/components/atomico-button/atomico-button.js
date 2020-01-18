import { h, customElement } from "atomico";

function AtomicoButton({ background, color, small }) {
  return (
    <host
      style={{
        color,
        background,
        fontWeight: "600",
        border: "none",
        fontSize: small ? "10px" : "14px",
        padding: small ? ".25rem .5rem" : ".5rem 1rem",
        borderRadius: "10px",
        textDecoration: "none"
      }}
    ></host>
  );
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

export default customElement("atomico-button", AtomicoButton, {
  base: HTMLAnchorElement,
  extends: "a"
});
