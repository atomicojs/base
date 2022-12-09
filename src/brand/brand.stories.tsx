import { html } from "atomico";
import { Brand } from "./brand";
import { define } from "@atomico/storybook";

const { args, argTypes } = define(Brand);

export default {
  title: "components/brand",
  argTypes,
  args,
};

export const ExampleJSX = (props: any) => <Brand {...props}></Brand>;

ExampleJSX.args = {
  color: "black",
  width: "280px",
};

export const ExampleHTML = (props) => html`<${Brand} ...${props}></${Brand}>`;

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
