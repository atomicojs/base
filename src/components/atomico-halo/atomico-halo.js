import { h, customElement } from "atomico";
import style from "./atomico-halo.css";

function AtomicoHalo({ length, size, min }) {
  min = 100 * (1 - min);
  return (
    <host shadowDom>
      <style>{style}</style>
      <div class="halo" style={{ width: size, height: size }}>
        {[...Array(length)].map((_, i) => {
          let size = 100 - min + (min / length) * (i + 1);
          let opacity = (length - i) / length;
          size += "%";
          return (
            <div
              style={{
                opacity,
                width: size,
                height: size,
              }}
            ></div>
          );
        })}
        <slot></slot>
      </div>
    </host>
  );
}

AtomicoHalo.props = {
  min: {
    type: Number,
    value: 0.2,
  },
  size: {
    type: String,
    value: "100vh",
  },
  length: {
    type: Number,
    value: 4,
  },
};

customElement("atomico-halo", AtomicoHalo);
