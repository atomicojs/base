import { template, html } from "atomico";
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

export const Example1 = (props: any) => template(<Brand {...props}></Brand>);

Example1.args = {
  color: "black",
  width: "280px",
};

export const Example2 = (props) =>
  template(html`<${Brand} ...${props}></${Brand}>`);

Example2.args = {
  color: "teal",
  width: "280px",
};
