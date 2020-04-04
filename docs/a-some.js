import { c as customElement, a as createElement } from './chunks/fc508d69.js';

var style = ":host {\n  font-size: 30px;\n}\n";

const ASome = ({
  message
}) => createElement("host", {
  shadowDom: true
}, createElement("style", null, style), createElement("h1", null, "\uD83D\uDC4B ", message));

ASome.props = {
  message: {
    type: String,
    value: "a-some",
    reflect: true,
    event: {
      type: "changeMessage"
    }
  }
};
var aSome = customElement("a-some", ASome);

export default aSome;
//# sourceMappingURL=a-some.js.map
