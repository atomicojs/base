import { c } from "atomico";

const style = /*css*/ `
  :host,
  .layer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .layer {
    position: absolute;
    top: 0px;
    left: 0px;
    font-size: 20vw;
    font-weight: bold;
    overflow: hidden;
    color: white;
    text-shadow: 0px 2vw 4vw magenta, 0px 2vw 1vw tomato;
    opacity: 0.15;
    align-items: flex-end;
  }
  .box {
    position: relative;
  }
`;

function hello({ message }) {
  return (
    <host shadowDom>
      <style>{style}</style>
      <div class="layer">{message}</div>
      <div class="box">
        <slot></slot>
      </div>
    </host>
  );
}

hello.props = {
  message: {
    type: String,
    value: "Hello.",
  },
};

export const Hello = c(hello);
