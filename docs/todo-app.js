import { c as customElement, b as useRef, u as useProp, a as createElement } from './chunks/2f7efe37.js';
import TodoTask from './todo-task.js';
import TodoInput from './todo-input.js';
import TodoButton from './todo-button.js';
import TodoBrand from './todo-brand.js';

var style = `:host {
  color: white;
}

.header.-container {
    display: flex;
    align-items: flex-end
  }

.header.-container > * {
      margin: 0.5rem;
    }

.header.-input {
    flex: 0%;
  }
`;

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
