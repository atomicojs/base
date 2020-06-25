import { h, customElement, useHost } from "atomico";
import style from "./app-container.css";

function AppContainer({ sizes }) {
  let ref = useHost();

  return (
    <host shadowDom>
      <style>{style}</style>
      <div class="content">
        <slot></slot>
      </div>
    </host>
  );
}

AppContainer.props = {
  sizes: {
    type: String,
    value: "small 420w, default",
  },
};

customElement("app-container", AppContainer);
