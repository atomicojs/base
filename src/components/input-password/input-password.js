import { h, customElement } from "atomico";
import style from "./input-password.css";

function InputPassword({ message }) {
  return (
    <host shadowDom>
      <style>{style}</style>
      <h1>👋 {message}</h1>
    </host>
  );
}

InputPassword.props = {
  message : {
    type : String,
    value : "input-password",
    reflect: true,
    event : {
      type : "changeMessage"
    }
  }
};

customElement("input-password", InputPassword);
