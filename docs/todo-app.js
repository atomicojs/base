import { c as customElement, b as useRef, u as useProp, a as createElement } from './chunks/d59176d5.js';
import TodoTask from './todo-task.js';
import TodoButton from './todo-button.js';
import TodoBrand from './todo-brand.js';
import TodoInput from './todo-input.js';

var style = ":host {\r\n  color: white;\r\n}\r\n\r\n.header.-container {\r\n    display: flex;\r\n    align-items: flex-end\r\n  }\r\n\r\n.header.-container > * {\r\n      margin: 0.5rem;\r\n    }\r\n\r\n.header.-input {\r\n    flex: 0%;\r\n  }\r\n";

function TodoApp() {
  let inputRef = useRef(); // an alternative to useState, the biggest
  // difference is that this allows you to
  // reflect the status in the selected property, eg:

  let [task, setTask] = useProp("task");
  return createElement("host", {
    shadowDom: true
  }, createElement("style", null, style), createElement(TodoBrand, {
    color: "white",
    size: "120"
  }), createElement("header", {
    class: "header -container"
  }, createElement(TodoInput, {
    class: "header -input",
    ref: inputRef
  }), createElement(TodoButton, {
    onclick: () => {
      let {
        value
      } = inputRef.current;
      if (!value) return;
      setTask([...task, {
        value,
        checked: false
      }]);
      inputRef.current.value = "";
    }
  }, "add task")), createElement("section", null, task.map(({
    checked,
    value
  }, id) => createElement(TodoTask, {
    checked: checked,
    onchange: ({
      target: {
        checked
      }
    }) => {
      //  verify the need to regenerate the list
      if (task[id].checked != checked) {
        setTask(task.map((data, i) => i == id ? { ...data,
          checked
        } : data));
      }
    }
  }, value))));
}

TodoApp.props = {
  task: {
    type: Array,
    value: () => []
  }
};
customElement("todo-app", TodoApp);
//# sourceMappingURL=todo-app.js.map
