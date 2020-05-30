import { x, C, J, O, p, w } from './chunks/4ad3f165.js';
import { u as useLinkHash } from './chunks/9d15508b.js';

var style = ":host{color:white;}.button-circle{width:45px;height:45px;border-radius:50%;position:fixed;bottom:20px;right:20px;z-index:2;border:none;background:var(--theme-primary, #37ffca);box-shadow:0px 12px 22px var(--theme-primary-shadow, rgba(55, 255, 202, 0.25));display:flex;align-self:center;justify-content:center;padding:0px;}.button-circle>div>div{width:21px;height:2px;margin-bottom:3px;background:white;border-radius:10px;transition:0.5s ease all;}.button-circle>div>div:last-child{margin-bottom:0px;}.button-circle.is-show>div>div:nth-child(1){transform:rotate(135deg) translate(3px, -3px);}.button-circle.is-show>div>div:nth-child(2){transform:scale(1, 0);}.button-circle.is-show>div>div:nth-child(3){transform:rotate(-135deg) translate(4px, 4px);}.menu-scroll{width:calc(100% - 20px);height:auto;max-height:calc(50% - 10px);overflow-x:hidden;overflow-y:auto;background:black;border-radius:10px;position:fixed;left:10px;bottom:10px;padding:20px;box-sizing:border-box;box-shadow:0px 12px 22px rgba(0, 0, 0, 0.25);transition:1s ease all;}.menu-scroll.is-hidden{transform:translateY(120%);}.menu-scroll.is-show{transform:translateY(0%);}.link{color:unset;display:flex;text-decoration:none;align-items:center;}.link>div{padding-left:10px;}";

function SimpleDocMenuBurgerHash({
  root,
  selector,
  inactiveColor,
  activeColor,
}) {
  let ref = C();
  let state = useLinkHash({ ref, root, selector });
  let [show, setShow] = J("show");
  let onToggle = () => setShow(!show);
  O(() => {
    let handler = ({ target }) => target != ref.current && setShow(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  return (
    p('host', { shadowDom: true,}
      , p('style', null, style)
      , p('button', {
        class: `button-circle is-${show ? "show" : "hidden"}`,
        onclick: onToggle,}
      
        , p('div', null
          , p('div', null)
          , p('div', null)
          , p('div', null)
        )
      )
      , p('div', { class: "menu-fixed",}
        , p('div', { class: `menu-scroll is-${show ? "show" : "hidden"}`,}
          , p('nav', { class: "list",}
            , state &&
              state.titles.map(({ target, level, intercepted }) => (
                p('div', null
                  , p('a', {
                    href: "#" + target.id,
                    style: `padding-left:${level * 16}px`,
                    class: "link",}
                  
                    , p('svg', {
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "12",
                      viewBox: "0 0 14 14"   ,}
                    
                      , p('path', {
                        d: "M-1429.5-1709v-3h-2v3h-3v-3h-3v-3h3v-2h-3v-3h3v-3h3v3h2v-3h3v3h3v3h-3v2h3v3h-3v3Zm0-6v-2h-2v2Z",
                        transform: "translate(1437.5 1723)" ,
                        style: `fill:${
                          intercepted ? activeColor : inactiveColor
                        }`,}
                      )
                    )
                    , p('div', null, target.textContent)
                  )
                )
              ))
          )
        )
      )
    )
  );
}

SimpleDocMenuBurgerHash.props = {
  show: Boolean,
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
};

x("simple-doc-menu-burger-hash", SimpleDocMenuBurgerHash);
//# sourceMappingURL=simple-doc-menu-burger-hash.js.map
