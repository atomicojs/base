## Atomico Starter Skit

Hi, thanks for starting with Atomico js web components in this starter kit you will find what you need to start with Atomico + Storybook and if you have questions about Atomico I will gladly solve them through an [Issue](https://github.com/atomicojs/atomico/issues/new/choose), [Discord](https://discord.gg/7z3rNhmkNE) or [Twitter](https://twitter.com/atomicojs).

[![twitter](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/twitter.svg)](https://twitter.com/atomicojs)
[![discord](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/discord.svg)](https://discord.gg/7z3rNhmkNE)
[![documentation](https://raw.githubusercontent.com/atomicojs/docs/master/.gitbook/assets/doc-1.svg)](https://atomico.gitbook.io/doc/)

## Scripts

1. `npm install`
2. `npm run dev` : Development mode for all components
3. `npm run dev:storybook` : Development mode for storybook
4. `npm run build` : Optional, Build a build of your project using Storybook.
5. `npm run create:component` : Create a component with the recommended structure

## Possible problems with this template

1. @atomico/run uses npm to map the monorepo dependencies, if your component doesn't get compiled, run the `npm i` command and then run npm start.
2. When using create:component, Storybook fails to reference imports, to correct this restart storybook.
