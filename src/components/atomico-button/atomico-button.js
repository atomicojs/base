import { h, customElement } from "atomico";

function AtomicoButton({ background, color }) {
  return (
    <host
      style={{
        color,
        background,
        fontWeight: "600",
        border: "none",
        padding: ".5rem 1rem",
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
