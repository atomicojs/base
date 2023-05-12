import { jsx, jsxs } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function myButton() {
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs("h1", { children: [
    "Hi ",
    /* @__PURE__ */ jsx("slot", {})
  ] }) });
}
myButton.props = {
  myProp: String
};
myButton.styles = css`:host{display:block}`;
const MyButton = c(myButton);

export { MyButton };
