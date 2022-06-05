---
{
    tags: ["{%", "%}"],
    questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## Component

```jsx {%name|kebabCase%}/src/{%name|kebabCase%}.tsx
import { Props, c, css } from "atomico";

function {%name|camelCase%}({ myProp }: Props<typeof {%name|camelCase%}>) {
  return (
    <host shadowDom>
      <slot></slot>
    </host>
  );
}

{%name|camelCase%}.props = {
  myProp: String,
};

{%name|camelCase%}.styles = css`
  :host {
    display: block;
  }
`;

export const {%name|pascalCase%} = c({%name|camelCase%});

customElements.define("{%name|kebabCase%}", {%name|pascalCase%});
```

## package.json

```json {%name|kebabCase%}/package.json
{
    "name": "@component/{%name|kebabCase%}",
    "type": "module",
    "version": "0.0.0",
    "private": true,
    "scripts": {
        "dev": "exports src/*.{tsx,jsx} --exports --analyzer --types --watch",
        "build": "exports src/*.{tsx,jsx} --exports --analyzer --types"
    },
    "dependencies": {
        "atomico": "latest"
    },
    "devDependencies": {
        "@atomico/tsconfig": "1.0.0"
    }
}
```

## tsconfig

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

## Component test

```jsx {%name|kebabCase%}/src/{%name|kebabCase%}.test.tsx
import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";

describe("{%name|pascalCase%}", () => {
  it("render", async () => {
    const component = fixture<typeof {%name|pascalCase%}>(<{%name|pascalCase%} />);
    expect(component).to.be.an.instanceof({%name|pascalCase%});
  });
});

```
