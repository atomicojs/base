import { Brand } from "./brand";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/brand",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    color: { control: "color" },
    width: {
      control: { type: "text" },
    },
  },
};

export const Primary = ({ color, width }) =>
  Object.assign(new Brand(), { color, width });
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {
  color: "black",
  width: "280px",
};

export const Secondary = ({ color, width }) =>
  Object.assign(new Brand(), { color, width });
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Secondary.args = {
  color: "tomato",
  width: "280px",
};
