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

export const ExampleWithJSX = (props: any) =>
  template(<Brand {...props}></Brand>);

ExampleWithJSX.args = {
  color: "black",
  width: "280px",
};

export const ExampleWithHTML = (props) =>
  template(html`<${Brand} ...${props}></${Brand}>`);

ExampleWithHTML.args = {
  color: "teal",
  width: "280px",
};
