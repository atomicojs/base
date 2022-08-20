---
{
  tags: ["{%", "%}"],
  questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/src/elements.tsx
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
```

```jsx {%name|kebabCase%}/src/define.tsx
import { {%name|pascalCase%} } from "./elements";
export { {%name|pascalCase%} } from "./elements";

customElements.define("atomico-{%name|kebabCase%}", {%name|pascalCase%});
```

## Component story

```jsx {%name|kebabCase%}/src/define.stories.tsx
import { {%name|pascalCase%} } from "./define";

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

export const Story = (props) =><{%name|pascalCase%} {...props}/>;

Story.args = {
  color: "black",
  width: "280px",
};
```

## package.json

```json {%name|kebabCase%}/package.json
{
  "name": "@atomico/{%name|kebabCase%}",
  "version": "1.0.0",
  "type": "module",
  "publishConfig": {
    "access": "public"
  },
  "dependencies": {
    "atomico": "latest"
  },
  "peerDependencies": {
    "atomico": "latest",
    "@atomico/react": "latest"
  },
  "peerDependenciesMeta": {
    "@atomico/react": {
      "optional": true
    }
  },
  "scripts": {
    "component:publish": "exports src/{define,elements}.{ts,tsx} --types --exports --minify --publish --analyzer --main define"
  }
}
```

## .npmignore

```txt {%name|kebabCase%}/.npmignore
node_modules
tsconfig.json
```

## tsconfig.json

```json {%name|kebabCase%}/tsconfig.json
{
  "extends": "@atomico/tsconfig/base.json",
  "include": ["src/**/*"]
}
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
