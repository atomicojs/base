import {  c } from "atomico";
import html from "atomico/html";
import style from "./{{name}}.css";

const {{nameCamelCase}} = ({ message }) => {
  return html`
    <host shadowDom>
      <style>${style}</style>
      <h1>👋 ${message}</h1>
    </host>
  `;
}

{{nameCamelCase}}.props = {
  message : {
    type : String,
    value : "{{name}}",
    reflect: true,
    event : {
      type : "changeMessage"
    }
  }
};

customElements.define("{{name}}",c({{nameCamelCase}}));
