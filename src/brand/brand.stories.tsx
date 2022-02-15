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

export const ExampleJSX = (props: any) => template(<Brand {...props}></Brand>);

ExampleJSX.args = {
  color: "black",
  width: "280px",
};

export const ExampleHTML = (props) =>
  template(html`<${Brand} ...${props}></${Brand}>`);

ExampleHTML.args = {
  color: "blueviolet",
  width: "280px",
};

export const ExampleRaw = (props) =>
  `<atomico-brand color="${props.color}" width="${props.width}"></atomico-brand>`;

ExampleRaw.args = {
  color: "gold",
  width: "280px",
};

export const ExampleDOM = (props) => Object.assign(new Brand(), props);

ExampleDOM.args = {
  color: "teal",
  width: "280px",
};
