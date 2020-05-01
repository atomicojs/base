import { customElement, useProp } from "../../../web_modules/atomico.js";
import html from "../../../web_modules/atomico/html.js";

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