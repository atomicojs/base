import { c, useRef } from "atomico";

function button({ bg }) {
  const ref = useRef();

  return (
    <host shadowDom style={`background:${bg}`}>
      content...ee
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
