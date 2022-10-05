## Atomico Starter Skit

Hi, thanks for starting with Atomico js web components in this starter-kit you will find what you need to start with Atomico and if you have questions about Atomico I will gladly solve them through an [Issue](https://github.com/atomicojs/atomico/issues/new/choose), [Discord](https://discord.gg/7z3rNhmkNE) or [Twitter](https://twitter.com/atomicojs).

[![twitter](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/twitter.svg)](https://twitter.com/atomicojs)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/discord.svg)](https://discord.gg/7z3rNhmkNE)
[![documentation](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc-1.svg)](https://atomico.gitbook.io/doc/)

Now what you have installed is a quick start kit based on Vite, now to continue you must execute the following commands:

1. `npm install`
2. `npm start` : Initialize the development server
3. `npm build` : Optional, Generate a build of your project from the html file [index.html](index.html).

## Workspace

### Recommended structure

```bash
src
  |- my-component
  |  |- my-component.{js,jsx,ts,tsx}
  |  |- my-component.test.js
  |  |- README.md
  |- components.js # import all components
```

> The `npm run create:component` command, will create a webcomponent with the recommended structure.

## Scripts

### npm run create:component

Create a new webcomponent inside src, according to the recommended structure.

### npm run start

initialize Vite server

### npm run build

package the app using de Vite

### npm run create:component

Create a base component
