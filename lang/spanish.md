# base

Bienvenido a [Atomico](https://github.com/atomicojs/atomico) como [autor](https://twitter.com/uppercod) yo espero que su experiencia de uso sea memorable!

Esta configuración dispuesta le provee una estructura para comenzar con Atomico de forma ágil gracias a [bundle-cli](https://github.com/atomicojs/bundle-cli), con esta configuración ud podrá:

**1.-** Documentar y desarrollar desde un fichero markdown o html , **bundle-cli se encargara de extraer sus script, estilos y otros desde ficheros markdown o html**, eg:

```markdown
# Atomico pesa menos de 4kb

y yo soy un fichero markdown...

<!--
Ahora algo de magia de bundle-cli, bundle-cli extrae
los [src] de los tag y exportara los script a Rollup.
-->

<my-component></my-component>

<script src="./my-component.js" type="module"></script>
```

> En resumen un efecto similar a MDX pero con Markdown.

**2.-** **LiveReload , servidor local y un observador de archivos incremental**, si ud crea un nuevo fichero markdown o html se añadirá a la cola de exportación para visualizar en el servidor local, de igual forma los cambios asociados a los ficheros exportados refrescaran el navegador automáticamente(LiveReload).

**3.-** Exportar fácilmente todos sus componentes y hooks en archivos independientes.

### Scripts

`npm start`: Crea un Servidor + LiveReload para su proyecto, con este ud podrá visualizar todos sus componentes desde **el puerto que se mostrara por consola según disponibilidad**. Espero que le agrade la interfaz mostrada por el servidor

`npm run create:component`: Crea una carpeta bajo las [guías de estilo](https://atomico.gitbook.io/doc/guides/code-style) de Atomico dentro del folder `src/components` con todo lo necesario para comenzar con su componente.

`npm run build`: Exporta la documentación y minifica el código js y el css asociado.

`npm run build:all`: Exporta todos los ficheros que cumplan con la expresión `src/**/**/*-*.js;`, bajo las [guías de estilo](https://atomico.gitbook.io/doc/guides/code-style) de Atomico se exportara automáticamente sus componentes y hooks

## Otros recursos de interés

1. [Documentación de Atomico](https://github.com/atomicojs/atomico).
2. [Guías de estilo de Atomico](https://atomico.gitbook.io/doc/guides/code-style).
3. Twitter de [Atomico](https://twitter.com/atomicojs) y [Autor](https://twitter.com/uppercod)
