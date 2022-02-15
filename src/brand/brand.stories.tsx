import { template } from "atomico";
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

export const Primary = (props: any) => template(<Brand {...props}></Brand>);

Primary.args = {
  color: "black",
  width: "280px",
};

export const Secondary = (props: any) => template(<Brand {...props}></Brand>);

Secondary.args = {
  color: "tomato",
  width: "280px",
};
