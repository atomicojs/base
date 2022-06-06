![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h4.svg)![Atomico](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/h3.svg)

### Hi, I'm [@uppercod](https://twitter.com/uppercod), creator of Atomico and I want to thank you for starting with Atomico.

If you need help you can find it at:

[![twitter](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/twitter.svg)](https://twitter.com/atomicojs)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/discord.svg)](https://discord.gg/7z3rNhmkNE)
[![documentation](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc-1.svg)](https://atomico.gitbook.io/doc/)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc.svg)](https://webcomponents.dev/edit/collection/F7dm6YnMEDRtAl57RTXU/d6E4w07fsQbb0CelYQac)

Now what you have installed is a quick start kit based on Vite, which you can scale for your project, now to continue you must execute the following commands:

```bash
## Install dependencies
npm i

## Initialize development mode for app and packages
npm run start

```

## Structure

```bash
src
  |- app          # The application that groups the components
  |- packages     # All components as package
  |- templates    # Component templates
  lage.config.mjs # Monorepo task manager
```

## Scripts

### npm run dev

initialize development mode for packages like vite's dev server, the default host is [https://localhost:3000](https://localhost:3000).

### npm run build

When using monorepo, prefer the use of CI (Example Github actions or Netlify) to distribute or deploy, since in its local use it will rewrite the package.json associating the exports and types when using the `npm run build` script.

### npm run create

Create a new component in the `/packages` directory, the component maintains the recommended structure which can be edited in `templates/component.md`.
