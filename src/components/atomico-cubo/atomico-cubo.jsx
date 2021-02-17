import { c } from "atomico";
import style from "./atomico-cubo.css";

function cubo() {
  return (
    <host shadowDom>
      <link rel="stylesheet" href={style.href} />
      <div class="cubo_box">
        <div class="cubo">
          <div class="cubo_face cubo_face-1">
            <slot name="face-1"></slot>
          </div>
          <div class="cubo_face cubo_face-2">
            <slot name="face-2"></slot>
          </div>
          <div class="cubo_face cubo_face-3">
            <slot name="face-3"></slot>
          </div>
          <div class="cubo_face cubo_face-4">
            <slot name="face-4"></slot>
          </div>
          <div class="cubo_face cubo_face-5">
            <slot name="face-5"></slot>
          </div>
          <div class="cubo_face cubo_face-6">
            <slot name="face-6"></slot>
          </div>
        </div>
      </div>
    </host>
  );
}

customElements.define("atomico-cubo", c(cubo));
