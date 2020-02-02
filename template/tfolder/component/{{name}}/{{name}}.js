import { h, customElement } from "atomico";
import style from "./{{name}}.css";

const {{nameCamelCase}} = () => (
  <host shadowDom>
    <style>{style}</style>
    <h1>👋{{ name }}</h1>
  </host>
);

{{nameCamelCase}}.props = {};

export default customElement("{{name}}", {{nameCamelCase}});
