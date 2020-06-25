import { h, customElement, Any, useHost } from "atomico";
import style from "./simple-doc-link-hash.css";
import { useLinkHash } from "../../hooks/use-link-hash/use-link-hash";

function SimpleDocLinkHash({
    selector,
    root,
    activeColor,
    inactiveColor,
    moveWithScroll,
}) {
    let ref = useHost();
    let state = useLinkHash({
        ref,
        root,
        selector,
        moveWithScroll,
    });
    return (
        <host shadowDom>
            <style>{style}</style>
            <div
                class="move"
                style={state && { transform: `translateY(${state.y || 0}px)` }}
            >
                <slot></slot>
                <nav class="list">
                    {state &&
                        state.titles.map(({ target, level, intercepted }) => (
                            <div>
                                <a
                                    href={"#" + target.id}
                                    style={`padding-left:${level * 16}px`}
                                    class="link"
                                    onclick={
                                        state.scroller != window &&
                                        (() => {
                                            state.scroller.scrollTo(
                                                0,
                                                target.offsetTop
                                            );
                                        })
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="12"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            d="M-1429.5-1709v-3h-2v3h-3v-3h-3v-3h3v-2h-3v-3h3v-3h3v3h2v-3h3v3h3v3h-3v2h3v3h-3v3Zm0-6v-2h-2v2Z"
                                            transform="translate(1437.5 1723)"
                                            fill={
                                                intercepted
                                                    ? activeColor
                                                    : inactiveColor
                                            }
                                        />
                                    </svg>
                                    <div>{target.textContent}</div>
                                </a>
                            </div>
                        ))}
                </nav>
            </div>
        </host>
    );
}

SimpleDocLinkHash.props = {
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
    moveWithScroll: Boolean,
};

customElement("simple-doc-link-hash", SimpleDocLinkHash);
