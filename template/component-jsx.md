---
{ questions: [{ type: "text", name: "name", message: "Component name?" }] }
---

The following script creates a component

```jsx <<name|kebabCase>>/<<name|kebabCase>>.jsx
import { c, css } from "atomico";

function <<name|camelCase>>() {
  return <host shadowDom></host>;
}

<<name|camelCase>>.styles = css`
  :host {
    display: block;
  }
`;

export const <<name|pascalCase>> = c(<<name|camelCase>>);

customElements.define("<<name|kebabCase>>", <<name|pascalCase>>);
```
