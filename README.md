# base

**Langs**: [Spanish](./lang/spanish.md)

Start quickly with Atomico, remember to start the `npm install` command before executing any`scripts`.

**Recommended readings**: [Atomico Code Style](https://atomico.gitbook.io/doc/guides/code-style), [Atomico + Typescript](https://atomico.gitbook.io/doc/guides/code-style/atomico-+-typescript) and [publication component in NPM](https://atomico.gitbook.io/doc/guides/publish-webcomponent).

### scripts

```bash
# For documentation Development.
# Useful to generate design system.
npm run dev:doc # start a server that serves the .md files
npm run build:doc # optimize the associated code

# For application development.
# useful for generating applications.
npm run dev # start a server that serves the .html files
npm run build # optimize the associated code

# Individual export of components.
# Useful for sharing components using NPM.
npm run build:component  #  Does not include dependencies.

```

### Recommended Directory Structure

```bash
src
├───index.html # export with dev
├───components
│   │   index.md # export with dev:doc
│   └───${my-component}
│           ${my-component}.js
│           ${my-component}.css
│           ${my-component}.md # export with dev:doc
└───custom-hooks
    └───${my-hook}
            ${my-hook}.js
            ${my-hook}.md # export with dev:doc
```

where :

- `src/components/${my-component}`: The objective of this is to individualize everything associated with the component.
- `src/custom-hooks/${my-hook}`: The objective of this is to individualize everything associated with the customHook.

### Component example

```jsx
import { h, customElement } from "atomico";
/**
 * If the component requires it, you can import the css content
 * associated with the file and then include it as the content
 * of the style tag.
 */
import style from "./my-component.css";

const MyComponent = ({ myString }) => (
  <host shadowDom>
    <style>{style}</style>
    myString : {myString}
  </host>
);

MyComponent.props = {
  myString: { type: String, value: "default string" }
};

export default customElement("my-component", MyComponent);
```

#### Markdown example

```md
---
order: 0
group: Brand
title: atomico brand
---

# atomico-brand

The atomico logo anywhere, just use this component and that's it.

## Use

<doc-show-html show>
    <atomico-brand color="black"></atomico-brand>
</doc-show-html>

## Properties

<doc-props selector="atomico-brand"></doc-props>

<script type="module" src="atomico-brand.js"></script>
```

Where :

- `doc-show-html`: webcomponent that allows to show the declared html content..
- `doc-props`: web component that allows you to show the properties of the associated component, for a simple iteration.
