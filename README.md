# Atomico-base

Starting with atomic is simple, thanks to [bundle-cli](https://github.com/UpperCod/bundle-cli), this repo has a basic structure and some useful recommendations, with this repo you can:

1. Js import from html files similar to parceljs.
2. A dynamic development thanks to a live-reload server based on es6 modules.
3. Selective preparation by means of expressions, eg `src/components/*-*.Js` of the files to be processed.
4. Optimization of the build, checking and optimizing its code.
5. Preconfigured and extensible space for agile development with Javascript or Typescript.

## scripts

#### npm run dev

It will open the development mode, creating a local server by default localhost: 8000 in live-reload mode, for agile and dynamic development, **the port may vary depending on availability**.

### npm run build

Export the project and optimize the code, the build groups the dependencies.

### npm run build:components

It exports the components independently, it does not add the dependencies to the bunde, but it does optimize the modules thanks to Rollup.

When using this build, its components will be transpiled in the components folder, this helps to share your code via npm, eg:

```js
import "my-ui/components/my-button";
```

```html
<script
  type="module"
  src="http://unpkg.com/my-ui/components/my-button?module"
></script>
```

## Directory

#### index.html

`bundle-cli` chooses the scripts associated with`index.html` and sends them to rollup as separate entries.

the npm run dev command, allows you to observe and serve all the html files of the root directory to create independent pages that share the js.

#### src

javascript and CSS directory by default

#### src/components

Directory destined to have all the web-components associated to the project, it is advisable to declare the file based on the following example:

- `components/custom-element/custom-element.js`
- `components/custom-element/custom-element.css`

The objective of this is to individualize the export of the fixed associated to the web component, start the following script for an independent export.

```
npm run build:components
```
