import { x, p } from './chunks/711364dc.js';

var style = ":host{font-size:30px;}";

const HelloWorld = ({message}) => (
  p('host', { shadowDom: true,}
    , p('style', null, style)
    , p('h1', null, "👋 " , message)
  )
);

HelloWorld.props = {
  message : {
    type : String,
    value : "hello-world",
    reflect: true,
    event : {
      type : "changeMessage"
    }
  }
};

var helloWorld = x("hello-world", HelloWorld);

export default helloWorld;
//# sourceMappingURL=hello-world.js.map
