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

## Initialize development mode for packages
npm run dev

## Initialize vite server
npm run start
```

## Scripts

If you want to work in development mode, you first need to run `npm run dev`, in order to prepare the package.json of each subpackage.

### npm run dev

Initialize development mode for all web components inside the `/packages` folder, the package exports and types are temporary while running this script.

### npm run start

Initialize the development server (Vite), remember this script must be run after `npm run dev`.

### npm run build

When using monorepo, prefer the use of CI (Example Github actions or Netlify) to distribute or deploy, since in its local use it will rewrite the package.json associating the exports and types when using the `npm run build` script.

### npm run create

Create a new component in the `/packages` directory, the component maintains the recommended structure which can be edited in `templates/component.md`.
