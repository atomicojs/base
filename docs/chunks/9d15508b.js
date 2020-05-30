import { T, O } from './4ad3f165.js';

function useLinkHash({ selector, root, ref, moveWithScroll }) {
  let [state, setState] = T();
  O(() => {
    let scroller =
      typeof root == "string" ? document.querySelector(root) : root;

    let element =
      typeof selector == "string"
        ? (scroller == window ? document : scroller).querySelector(selector)
        : selector;

    let targets = [...element.querySelectorAll("h1,h2,h3")];

    let rootMargin = "50px 0px -80%";

    let observer = new IntersectionObserver(
      ([entrie]) => {
        setState((state) => ({
          ...state,
          titles: titles.map((title) => ({
            ...title,
            intercepted:
              entrie.isIntersecting &&
              entrie.intersectionRatio == 1 &&
              title.target == entrie.target,
          })),
        }));
      },
      {
        root: scroller == window ? null : scroller,
        rootMargin,
        threshold: 1,
      }
    );
    let titles = targets.map((target) => {
      observer.observe(target);
      let level = Number(target.localName.replace("h", "")) - 1;
      return {
        level,
        target,
      };
    });

    let levelMin = Math.min(...titles.map(({ level }) => level));

    titles = titles.map(({ target, level }) => ({
      level: level - levelMin,
      target,
    }));

    if (moveWithScroll) {
      let { current } = ref;
      let top = 0;
      while (current) {
        if (!("offsetTop" in current)) break;
        top += current.offsetTop;
        current = current.parentNode;
      }

      scroller.addEventListener("scroll", () => {
        let y = (scroller.scrollY || scroller.scrollTop) - top;
        setState((state) => ({ ...state, y: y > 0 ? y : 0 }));
      });
    }

    setState({
      titles,
      scroller,
    });
  }, [selector, root]);

  return state;
}

export { useLinkHash as u };
//# sourceMappingURL=9d15508b.js.map
