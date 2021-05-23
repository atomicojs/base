![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h4.svg)
![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h3.svg)

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
site
src
  |- my-component
  |  |- my-component.{js,jsx,ts,tsx}
  |  |- my-component.test.js
  |  |- my-component.css
  |  |- README.md
  |- components.js # import all components
```

### Add testing

1. `npm install -D @web/test-runner @esm-bundle/chai`
2. Add the following script in [package.json#scripts](package.json)

```
"test": "wtr test/**/*.test.js --node-resolve"
```

#### Test example

```js
import { expect } from "@esm-bundle/chai";

describe("my test", () => {
  it("foo is bar", () => {
    expect("foo").to.equal("bar");
  });
});
```

> `@web/test-runner` supports asynchrony, coverage, [viewport and more](https://modern-web.dev/docs/test-runner/commands/).

### NPM export

1. `npm install -D @atomico/exports typescript`: The typescript installation is optional, but necessary if you use the `--types` flag.
2. Add the following script in [package.json#scripts](package.json)

```
"npm": "exports src/components/*.{js,ts,jsx,tsx} --exports --types",
"prepublishOnly": "npm run test && npm run npm"
```
