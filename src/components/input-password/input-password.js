import { h, customElement, useProp, useHost, useEffect } from "atomico";
import style from "./input-password.css";

function InputPassword({ primaryColor, secondColor, placeholder }) {
  let [show, setShow] = useProp("show");
  let [, setValue] = useProp("value");
  let ref = useHost();
  useEffect(() => {
    ref.size = ref.current.clientWidth * 2 + "px";
  }, [show]);
  return (
    <host shadowDom>
      <style>{style}</style>
      <label style={`background:${primaryColor}`}>
        <svg width="10" height="13" viewBox="0 0 10 13">
          <path
            style={`fill:${show ? primaryColor : secondColor}`}
            d="M2,13a2,2,0,0,1-2-2V6A1,1,0,0,1,1,5V4A4,4,0,0,1,9,4V5H9a1,1,0,0,1,1,1v5a2,2,0,0,1-2,2ZM7,5V4A2,2,0,0,0,3,4V5Z"
          />
        </svg>
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          style={`color:${show ? primaryColor : secondColor}`}
          oninput={({ target: { value } }) => setValue(value)}
        />
        <button onclick={() => setShow((show) => !show)}>
          <div
            style={`background:${secondColor};width:${
              show ? ref.size || "100%" : "100%"
            };height:${show ? ref.size || "100%" : "100%"}`}
          ></div>
          <span></span>
        </button>
      </label>
    </host>
  );
}

InputPassword.props = {
  value: {
    type: String,
    event: {
      type: "change",
      bubbles: true,
    },
  },
  placeholder: String,
  primaryColor: { type: String, value: "black" },
  secondColor: { type: String, value: "white" },
  show: { type: Boolean, reflect: true },
};

customElement("input-password", InputPassword);
