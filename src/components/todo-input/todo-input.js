import { h, customElement, useProp } from "atomico";
import style from "./todo-input.css";

const TodoInput = ({ placeholder }) => {
  let [value, setValue] = useProp("value");
  return (
    <host shadowDom>
      <style>{style}</style>
      <label class="label">
        <input
          class="input"
          value={value}
          oninput={({ target }) => setValue(target.value)}
        />
        <span class={`placeholder ${value ? "--with-content" : ""}`}>
          {placeholder}
        </span>
        <div class="hr"></div>
        <div class="hr -for-focus"></div>
      </label>
    </host>
  );
};

TodoInput.props = {
  placeholder: {
    type: String,
    value: "✍️ write your task!"
  },
  value: {
    type: String
  }
};

export default customElement("todo-input", TodoInput);
