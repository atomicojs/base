import { x, p } from './chunks/4ad3f165.js';

var style = ":host{font-size:30px;}";

function InputPassword({ message }) {
  return (
    p('host', { shadowDom: true,}
      , p('style', null, style)
      , p('h1', null, "👋 " , message)
    )
  );
}

InputPassword.props = {
  message : {
    type : String,
    value : "input-password",
    reflect: true,
    event : {
      type : "changeMessage"
    }
  }
};

x("input-password", InputPassword);
//# sourceMappingURL=input-password.js.map
