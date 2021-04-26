import { Button } from "./button";

export default {
  title: "Example/Button",
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
  },
};

customElements.define("my-button", Button);

export const Primary = ({
  backgroundColor = null,
}) => `<my-button bg="${backgroundColor}">
  <p>Slot 1</p>
  <p>Slot 2</p>
</my-button>`;
