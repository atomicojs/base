import { jsx, jsxs } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function myComponent() {
  return /* @__PURE__ */ jsx("host", { shadowDom: true, children: /* @__PURE__ */ jsxs("h1", { children: [
    "Hi ",
    /* @__PURE__ */ jsx("slot", {})
  ] }) });
}
myComponent.props = {
  myProp: String
};
myComponent.styles = css`:host{display:block}`;
const MyComponent = c(myComponent);

export { MyComponent };
