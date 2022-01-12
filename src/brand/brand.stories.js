import { Brand } from "./brand";

export default {
  title: "components/brand",
  argTypes: {
    color: { control: "color" },
    width: {
      control: { type: "text" },
    },
  },
};

export const Primary = ({ color, width }) =>
  Object.assign(new Brand(), { color, width });

Primary.args = {
  color: "black",
  width: "280px",
};

export const Secondary = ({ color, width }) =>
  Object.assign(new Brand(), { color, width });

Secondary.args = {
  color: "tomato",
  width: "280px",
};
