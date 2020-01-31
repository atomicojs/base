import { h, customElement, useProp } from "atomico";
import style from "./todo-task.css";

const TodoTask = () => {
  let [checked, setChecked] = useProp("checked");

  return (
    <host shadowDom onclick={() => setChecked(!checked)}>
      <style>{style}</style>
      <div class="content">
        <slot></slot>
      </div>
      <div class="checked">
        <span>✔</span>
      </div>
    </host>
  );
};

TodoTask.props = {
  checked: {
    type: Boolean,
    reflect: true,
    event: {
      type: "change"
    }
  }
};

export default customElement("todo-task", TodoTask);
