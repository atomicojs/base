import { c as customElement, u as useProp, a as createElement } from './chunks/2f7efe37.js';

var style = `:host{width:100%;display:flex;padding:.5rem;box-sizing:border-box;cursor:pointer}:host([checked]) .content{text-decoration:line-through}:host([checked]) .checked span{opacity:1}.content{flex:0%}.checked{width:20px;height:20px;border:1px solid;border-radius:50%;position:relative;display:flex;align-items:center;justify-content:center;font-size:.8em}.checked span{opacity:0;transition:all .3s ease}`;

const TodoTask = () => {
  let [checked, setChecked] = useProp("checked");
  return createElement("host", {
    shadowDom: true,
    onclick: () => setChecked(!checked)
  }, createElement("style", null, style), createElement("div", {
    class: "content"
  }, createElement("slot", null)), createElement("div", {
    class: "checked"
  }, createElement("span", null, "\u2714")));
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
var TodoTask$1 = customElement("todo-task", TodoTask);

export default TodoTask$1;
//# sourceMappingURL=todo-task.js.map
