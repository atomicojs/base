import { Button } from "./button";

/**@type {import("@storybook/web-components").Meta} */
export default {
  title: "Example/Button",
  argTypes: {
    size: {
      table: {
        category: "Sizes",
      },
    },
  },
};

customElements.define("my-button", Button);

export const Primary = ({ backgroundColor = null }) => /*html*/ `
  <my-button bg="${backgroundColor}">
    <p>Slot 1</p>
    <p>Slot 2</p>
  </my-button>
`;
