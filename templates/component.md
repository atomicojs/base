---
{
  tags: ["{%", "%}"],
  questions: [{ type: "text", name: "name", message: "Component name?" }],
}
---

## component

```jsx {%name|kebabCase%}/{%name|kebabCase%}.tsx
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

## Component test

```jsx {%name|kebabCase%}/{%name|kebabCase%}.test.tsx
import { describe, it, expect } from "vitest";
import { fixture } from "atomico/test-dom";
import { {%name|pascalCase%} } from "./{%name|kebabCase%}";

describe("{%name|pascalCase%}", () => {
  it("default properties", () => {
    const node = fixture<typeof {%name|pascalCase%}>(<{%name|pascalCase%} />);

    expect(node.myProp).toEqual("value");
  });

  it("Check DOM", async () => {
    const node = fixture<typeof {%name|pascalCase%}>(<{%name|pascalCase%} />);

    node.showInput = true;

    await node.updated; // or updated

    expect(node.shadowRoot.querySelector("input")).toBeInstanceOf(
      HTMLInputElement
    );
  });
});
```
