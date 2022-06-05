![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h4.svg)![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h3.svg)

### Hi, I'm [@uppercod](https://twitter.com/uppercod), creator of Atomico and I want to thank you for starting with Atomico.

If you need help you can find it at:

[![twitter](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/twitter.svg)](https://twitter.com/atomicojs)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/discord.svg)](https://discord.gg/7z3rNhmkNE)
[![documentation](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc-1.svg)](https://atomico.gitbook.io/doc/)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc.svg)](https://webcomponents.dev/edit/collection/F7dm6YnMEDRtAl57RTXU/d6E4w07fsQbb0CelYQac)

Now what you have installed is a quick start kit based on Vite, which you can scale for your project, now to continue you must execute the following commands:

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
  |  |- my-component.css
  |  |- README.md
  |- components.js # import all components
```

> The `npm run create` command, will create a webcomponent with the recommended structure, the template of this webcomponent can be edited in `templates/component.md`.

## Scripts

### npm run create

Create a new webcomponent inside src, according to the recommended structure, the template of this webcomponent can be edited in `templates/component.md`.

### npm run start

initialize Vite server

### npm run build

package the app using de Vite

### npm run test

Run a test environment in watch mode, as configured in `vite.config.js`.

### npm run coverage

Run a test environment with coverage, as configured in `vite.config.js`.

### npm run exports

Allows you to export your project to npm, this command executes changes in package.json before exporting and the changes will be reverted once exported.

temporary changes are:

1. generation of the packages.json#exports
2. generation of the pages.json#typesVersions
3. Compilation of the files and generation of the types if the --types flag is used.

## frequent questions

### How to add postcss?

`@atomico/vite`, allows to preprocess the css template string through postcss, to use this feature add in vite.config.js the following options:

```js
import atomico from "@atomico/vite";
import { defineConfig } from "vite";

export default defineConfig({
  ...
  plugins: [
    atomico({
      cssLiterals: { postcss: true }, // 👈 CONFIGURATION TO ADD
    }),
  ],
});
```

To use postcss at least 1 plugin is required.

```json
"postcss": {
  "plugins": {
    "postcss-import": {}
  }
}
```

### How to publish on github page?

Add to `package.json#scripts.build`:

```bash
--outDir docs # modify the destination directory
--base my-repo # github page folder
```
