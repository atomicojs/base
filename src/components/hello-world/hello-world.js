import { h, customElement } from "atomico";
import style from "./hello-world.css";

const HelloWorld = ({message}) => (
  <host shadowDom>
    <style>{style}</style>
    <h1>👋 {message}</h1>
  </host>
);

HelloWorld.props = {
  message : {
    type : String,
    value : "hello-world",
    reflect: true,
    event : {
      type : "changeMessage"
    }
  }
};

export default customElement("hello-world", HelloWorld);
