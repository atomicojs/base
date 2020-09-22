import { h, c, Props } from "atomico";
import style from "./{{name}}.css";

function {{nameCamelCase}}({ message }:Props<typeof {{nameCamelCase}}.props>){
  return (
    <host shadowDom>
      <style>{style}</style>
      <h1>👋 {message}</h1>
    </host>
  );
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
