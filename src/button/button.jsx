import { c, useRef } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";

function button({ bg }) {
  const ref = useRef();
  const childNodes = useSlot(ref);

  return (
    <host shadowDom style={`background:${bg}`}>
      content...
      <slot ref={ref}></slot>
    </host>
  );
}

button.props = {
  bg: {
    type: String,
    value: "#fff",
  },
};

export const Button = c(button);
