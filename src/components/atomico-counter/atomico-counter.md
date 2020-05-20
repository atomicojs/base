---
title: <atomico-counter/>
description: Counter created with Atomico, its interaction is complete, managing to reactively work the state of "count" as property and attribute of the component
group: Components
---

# {{page.title}}

> {{page.description}}

## Component

```jsx
import { h, customElement, useProp } from "atomico";
import style from "./atomico-counter.css";

function AtomicoCounter() {
  let [count, setCount] = useProp("count"); // interacts with the property as a functional hook
  return (
    <host shadowDom>
      <style>{style}</style>
      <button onclick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onclick={() => setCount(count + 1)}>+</button>
    </host>
  );
}

AtomicoCounter.props = {
  // create property and register count attribute as observable
  count: {
    type: Number, // normaliza todo valor para la propiedad como numerico
    reflect: true, // reflects the count property as an attribute
    value: 0, // initialize the value to 0
    event: { type: "ChangeCount" }, // dispatches ChangeCount event at every count change, for subscription of side effects
  },
};

customElement("atomico-counter", AtomicoCounter);
```

## Demo

<atomico-counter count="100"></atomico-counter>

```html
<atomico-counter count="100"></atomico-counter>
```

## Properties

| Prop/Attr | Description            | Type   | Reflect | Event       | Default Value |
| --------- | ---------------------- | ------ | ------- | ----------- | ------------- |
| count     | current value of count | Number | String  | ChangeCount | 0             |

<script async type="module" src="atomico-counter.js"><script>
