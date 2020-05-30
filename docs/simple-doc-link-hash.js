import { x, C, p, w } from './chunks/4ad3f165.js';
import { u as useLinkHash } from './chunks/9d15508b.js';

var style = ":host{font-size:30px;}.list{font-size:14px;}.link{display:flex;text-decoration:none;color:unset;padding:2px 0px;}.link path{transition:1s ease all;}.link div{padding-left:10px;flex:0%;}";

function SimpleDocLinkHash({
  selector,
  root,
  activeColor,
  inactiveColor,
  moveWithScroll,
}) {
  let ref = C();
  let state = useLinkHash({
    ref,
    root,
    selector,
    moveWithScroll,
  });
  return (
    p('host', { shadowDom: true,}
      , p('style', null, style)
      , p('div', {
        class: "move",
        style: state && { transform: `translateY(${state.y || 0}px)` },}
      
        , p('slot', null)
        , p('nav', { class: "list",}
          , state &&
            state.titles.map(({ target, level, intercepted }) => (
              p('div', null
                , p('a', {
                  href: "#" + target.id,
                  style: `padding-left:${level * 16}px`,
                  class: "link",
                  onclick: 
                    state.scroller != window &&
                    (() => {
                      state.scroller.scrollTo(0, target.offsetTop);
                    })
                  ,}
                
                  , p('svg', {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "12",
                    viewBox: "0 0 14 14"   ,}
                  
                    , p('path', {
                      d: "M-1429.5-1709v-3h-2v3h-3v-3h-3v-3h3v-2h-3v-3h3v-3h3v3h2v-3h3v3h3v3h-3v2h3v3h-3v3Zm0-6v-2h-2v2Z",
                      transform: "translate(1437.5 1723)" ,
                      fill: intercepted ? activeColor : inactiveColor,}
                    )
                  )
                  , p('div', null, target.textContent)
                )
              )
            ))
        )
      )
    )
  );
}

SimpleDocLinkHash.props = {
  selector: w,
  root: {
    type: w,
    value: window,
  },
  activeColor: {
    type: String,
    value: "#00D59D",
  },
  inactiveColor: {
    type: String,
    value: "#BDC6C6",
  },
  moveWithScroll: Boolean,
};

x("simple-doc-link-hash", SimpleDocLinkHash);
//# sourceMappingURL=simple-doc-link-hash.js.map
