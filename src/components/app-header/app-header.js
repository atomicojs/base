import { h, customElement } from "atomico";
import style from "./app-header.css";

function AppHeader({ height, src, layer, imageOpacity }) {
  return (
    <host shadowDom>
      <style>{style}</style>
      <div class="c-header" style={{ height }}>
        <img class="c-header_img" src={src} style={{ opacity: imageOpacity }} />
        <div class="c-header_layer" style={{ background: layer }}></div>
        <div className="c-header_avatar">
          <slot name="avatar"></slot>
        </div>
      </div>
    </host>
  );
}

AppHeader.props = {
  src: String,
  height: {
    type: String,
    value: "25%",
  },
  imageOpacity: {
    type: Number,
    value: 0.5,
  },
  layer: {
    type: String,
    value: "linear-gradient(to top, #7633FF, #33FFBA)",
  },
};

customElement("app-header", AppHeader);
