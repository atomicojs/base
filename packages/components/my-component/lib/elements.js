import { jsxs, jsx } from 'atomico/jsx-runtime';
import { css, c } from 'atomico';

function myComponent() {
  return /* @__PURE__ */ jsxs("host", { shadowDom: true, children: [
    /* @__PURE__ */ jsx("slot", {}),
    /* @__PURE__ */ jsx("h1", { children: "...ok...jojojo?" })
  ] });
}
myComponent.props = {
  myProp: String
};
myComponent.styles = css`:host{display:block}`;
const MyComponent = c(myComponent);

export { MyComponent };
