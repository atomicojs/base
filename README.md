# base

Welcome to [Atomico](https://github.com/atomicojs/atomico) as an [author](https://twitter.com/uppercod), I hope your experience of use is memorable!

this configuration provides you with a structure to start with Atomico in an agile way thanks to [bundle-cli](https://github.com/atomicojs/bundle-cli), with this configuration you will be able to:

**1.-** Documentar y desarrollar desde un fichero markdown o html , **bundle-cli se encargara de extraer sus script, estilos y otros desde ficheros markdown o html**, eg:

```markdown
# Atomico size is less than 4kb

and I'm a markdown file ...

<!--
Now some magic of bundle-cli, bundle-cli extract
the [src] of the tags and export the scripts to Rollup and more.
-->

<my-component></my-component>

<script src="./my-component.js" type="module"></script>
```

> In summary an effect similar to MDX but with Markdown.

**2.-** **LiveReload, local server and an incremental file watcher**, If you create a new markdown or html file, it will be added to the export queue to be viewed on the local server. Likewise, the changes associated with the exported files will refresh the browser automatically (LiveReload).

**3.-** Easily export all your components and hooks in separate files.

### Scripts

`npm start`: Create a Server + LiveReload for your project, with this you will be able to view all its components from **the port that will be shown by console according to availability**. I hope you like the interface shown by the server

`npm run create:component`: Create a folder inside the `src/components` folder with everything you need to get started with your component, the folder to be created adheres to the Atomico [style guides](https://atomico.gitbook.io/doc/guides/code-style).

`npm run build`: Export the documentation and minify the js code and the associated css.

`npm run build:all`: Export all files that comply with the expression `src/**/**/*-*.js;`, under Atomico [style guides](https://atomico.gitbook.io/doc/guides/code-style) their components and hooks will be automatically exported

## Other resources of interest

1. [Atomico Documentation](https://github.com/atomicojs/atomico).
2. [Atomico Style Guides](https://atomico.gitbook.io/doc/guides/code-style).
3. Twitter of [Atomico](https://twitter.com/atomicojs) and [Autor](https://twitter.com/uppercod)
