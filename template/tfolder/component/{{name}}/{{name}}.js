import { customElement } from "atomico";
import html from "atomico/html";

function {{nameCamelCase}}({ message }) {
  return html`
    <host shadowDom>
      <style>
        :host {
          font-size: 30px;
        }
      </style>
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

customElement("{{name}}", {{nameCamelCase}});