# Getting started with Atomico + Snowpack

[Español](./lang/spanish.md) [English](./README.md)

This configuration allows a dynamic development based on Snowpack, using the `npm start` scripts you can develop components that are displayed by the browser thanks to a server with local livereload taught by console, by default it can be hosted on the `localhost:8080` port.

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

Initialize a developing server for the files that are exported from the html files in the `src/*.html` directory.

### npm run create:component

Create a component in the `src/components` directory [with the recommended structure](https://atomico.gitbook.io/doc/v/es/guias/guias-de-estilo) `Atomico`.

### npm run create:hook

Create a hook in the `src/hooks` directory with the [recommended structure](https://atomico.gitbook.io/doc/v/es/guias/guias-de-estilo) `Atomico`.
