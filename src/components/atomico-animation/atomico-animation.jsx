import { c } from "atomico";
import style from "./atomico-animation.css";
import "../atomico-cubo/atomico-cubo.jsx";

function animation() {
  return (
    <host shadowDom>
      <link rel="stylesheet" href={style.href} />
      <atomico-cubo>
        <h1 slot="face-1">1</h1>
        <h1 slot="face-2">2</h1>
        <h1 slot="face-3">3</h1>
        <h1 slot="face-4">4</h1>
        <h1 slot="face-5">6</h1>
        <h1 slot="face-6">6</h1>
      </atomico-cubo>
    </host>
  );
}

customElements.define("atomico-animation", c(animation));
