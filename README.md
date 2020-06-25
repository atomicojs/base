# Welcome

[Español](./lang/spanish.md) [English](./README.md)

## Steps

```bash
# 1
npm install
# 2
npm start
# Enjoy!
```

## Directory

```bash
/src
    /components # Directory for webcomponents
        /atomico-counter # Example of component with Atomico
            atomico-counter.js
            atomico-counter.css
            atomico-counter.md  # component documentation
    index.html # Html file to serve on the server
```

> files exported from html are stored processed in `/docs`(Friendly with github pages 😎), you can change this effect by modifying the`scripts` of `package.json`.

## Scripts

### npm start

Initialize a developing server for the files that are exported from the html files in the `src/**/*.{md,html}` directory.

### npm run build

Create the export bundle from the html files.

### npm run build:npm

Package for distribution in NPM all the components of the `src/components` directory, these are exported as separate files.

> remember to distribute in npm you must modify the **package.json**.

### npm run create:component

Create a component in the `src/components` directory [with the recommended structure](https://atomico.gitbook.io/doc/guides/code-style) `Atomico`.

### npm run create:hook

Create a hook in the `src/hooks` directory with the [recommended structure](https://atomico.gitbook.io/doc/guides/code-style) `Atomico`.
