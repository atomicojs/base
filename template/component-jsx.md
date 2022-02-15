---
{
  tags: ["{%", "%}"],
  questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/{%name|kebabCase%}.jsx
import { c, css } from "atomico";

function {%name|camelCase%}() {
  return (
    <host shadowDom>
      <slot></slot>
    </host>
  );
}

{%name|camelCase%}.props = {
  myProp: String
};

{%name|camelCase%}.styles = css`
  :host {
    display: block;
  }
`;

export const {%name|pascalCase%} = c({%name|camelCase%});

customElements.define("{%name|kebabCase%}", {%name|pascalCase%});
```

## Component documentation

````markdown {%name|kebabCase%}/README.md
## {%name|kebabCase%}

### Properties

| Property | Type   | Description                        |
| -------- | ------ | ---------------------------------- |
| myProp   | string | defines the title of the component |

### Slots

| Property   | Type      | Description     |
| ---------- | --------- | --------------- |
| Unassigned | ChildNode | General content |

### Example

```html
<{%name|kebabCase%} my-prop="my value"></{%name|kebabCase%}>
```
````

## Component story

```jsx {%name|kebabCase%}/{%name|kebabCase%}.stories.jsx
import { template, html } from "atomico";
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/{%name|kebabCase%}",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    color: { control: "color" },
    width: {
      control: { type: "text" },
    },
  },
};

export const Story = (props) =>template(html`<${{%name|pascalCase%}} ...${props}></>`);

Story.args = {
  color: "black",
  width: "280px",
};
```
