import { h, customElement } from "atomico";
import style from "./app-gallery.css";

function AppGallery({ message }) {
  return (
    <host shadowDom>
      <style>{style}</style>
      <h1>👋 {message}</h1>
    </host>
  );
}

AppGallery.props = {
  message : {
    type : String,
    value : "app-gallery",
    reflect: true,
    event : {
      type : "changeMessage"
    }
  }
};

customElement("app-gallery", AppGallery);
