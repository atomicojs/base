import { h, Any, customElement, useHost, useProp, useEffect } from "atomico";
import style from "./simple-doc-menu-burger-hash.css";
import { useLinkHash } from "../../hooks/use-link-hash/use-link-hash";

function SimpleDocMenuBurgerHash({
  root,
  selector,
  inactiveColor,
  activeColor,
}) {
  let ref = useHost();
  let state = useLinkHash({ ref, root, selector });
  let [show, setShow] = useProp("show");
  let onToggle = () => setShow(!show);
  useEffect(() => {
    let handler = ({ target }) => target != ref.current && setShow(false);
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);
  return (
    <host shadowDom>
      <style>{style}</style>
      <button
        class={`button-circle is-${show ? "show" : "hidden"}`}
        onclick={onToggle}
      >
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <div class="menu-fixed">
        <div class={`menu-scroll is-${show ? "show" : "hidden"}`}>
          <nav class="list">
            {state &&
              state.titles.map(({ target, level, intercepted }) => (
                <div>
                  <a
                    href={"#" + target.id}
                    style={`padding-left:${level * 16}px`}
                    class="link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M-1429.5-1709v-3h-2v3h-3v-3h-3v-3h3v-2h-3v-3h3v-3h3v3h2v-3h3v3h3v3h-3v2h3v3h-3v3Zm0-6v-2h-2v2Z"
                        transform="translate(1437.5 1723)"
                        style={`fill:${
                          intercepted ? activeColor : inactiveColor
                        }`}
                      />
                    </svg>
                    <div>{target.textContent}</div>
                  </a>
                </div>
              ))}
          </nav>
        </div>
      </div>
    </host>
  );
}

SimpleDocMenuBurgerHash.props = {
  show: Boolean,
  selector: Any,
  root: {
    type: Any,
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

customElement("simple-doc-menu-burger-hash", SimpleDocMenuBurgerHash);
