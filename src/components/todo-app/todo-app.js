import { h, customElement, useRef, useProp } from "atomico";
import TodoBrand from "../todo-brand/todo-brand";
import TodoInput from "../todo-input/todo-input";
import TodoButton from "../todo-button/todo-button";
import TodoTask from "../todo-task/todo-task";
import style from "./todo-app.css";

function TodoApp() {
  let inputRef = useRef();
  // an alternative to useState, the biggest
  // difference is that this allows you to
  // reflect the status in the selected property, eg:
  let [task, setTask] = useProp("task");

  return (
    <host shadowDom>
      <style>{style}</style>
      <TodoBrand color="white" size="120"></TodoBrand>
      <header class="header -container">
        <TodoInput class="header -input" ref={inputRef}></TodoInput>
        <TodoButton
          onclick={() => {
            let { value } = inputRef.current;
            if (!value) return;
            setTask([...task, { value, checked: false }]);
            inputRef.current.value = "";
          }}
        >
          add task
        </TodoButton>
      </header>
      <section>
        {task.map(({ checked, value }, id) => (
          <TodoTask
            checked={checked}
            onchange={({ target: { checked } }) => {
              //  verify the need to regenerate the list
              if (task[id].checked != checked) {
                setTask(
                  task.map((data, i) => (i == id ? { ...data, checked } : data))
                );
              }
            }}
          >
            {value}
          </TodoTask>
        ))}
      </section>
    </host>
  );
}

TodoApp.props = {
  task: {
    type: Array,
    value: () => []
  }
};

customElement("todo-app", TodoApp);
