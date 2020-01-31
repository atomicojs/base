# base

**Lenguajes**: [Ingles](../README.md)

Comience rápidamente con Atomico, recuerde iniciar el comando `npm install` antes de ejecutar cualquier `scripts`.

**Lecturas recomendadas**: [Atomico estilo de código](https://atomico.gitbook.io/doc/v/es/guias/estilo-de-codigo), [Atomico + Typescript](https://atomico.gitbook.io/doc/v/es/guias/estilo-de-codigo/atomico-+-typescript) y [componente publicacion en NPM](https://atomico.gitbook.io/doc/v/es/guias/publicar-webcomponent).

### scripts

```bash
# Desarrollo de documentación
npm run dev:doc # inicia un servidor que enseña la documentación
npm run build:doc # optimiza el codigo asociado

# Desarrollo de aplicación
npm run dev # inicia un servidor que enseña los ficheros html
npm run build # optimiza el codigo asociado

# exportación individual de componentes
npm run build:component  # optimiza el codigo asociado, no incluye dependencias.

```

### Estructura recomendada

```bash
src
├───index.html # export with dev
├───components
│   │   index.md # export with dev:doc
│   └───${my-component}
│           ${my-component}.js
│           ${my-component}.css
│           ${my-component}.md # export with dev:doc
└───custom-hooks
    └───${my-hook}
            ${my-hook}.js
            ${my-hook}.md # export with dev:doc
```

donde :

- `src/components/${my-component}`: la mayor ventaja de esta estructura es que ud podrá individualizar en una carpeta componente, estilo, documentación y facilitar la exportación.
- `src/custom-hooks/${my-hook}`: la mayor ventaja de esta estructura es que ud podrá individualizar el hook, documentación y facilitar la exportación.

### Vista general de un componente

```jsx
import { h, customElement } from "atomico";
/**
 * If the component requires it, you can import the css content
 * associated with the file and then include it as the content
 * of the style tag.
 */
import style from "./my-component.css";

const MyComponent = ({ myString }) => (
  <host shadowDom>
    <style>{style}</style>
    myString : {myString}
  </host>
);

MyComponent.props = {
  myString: { type: String, value: "default string" }
};

export default customElement("my-component", MyComponent);
```

### Desarrollo de documentación.

```bash
npm run dev:doc # genera una exportacion ligera e inicia la lectura
                # de los ficheros de documentación para ser servidos

npm run build:doc  # genera una exportacion optimizada
```

gracias a la exportación de ficheros markdown ud podrá documentar y exportar su componente para una vista previa.

#### Ejemplo de fichero markdown

```md
---
order: 0
group: Brand
title: atomico brand
---

# atomico-brand

The atomico logo anywhere, just use this component and that's it.

## Use

<doc-show-html show>
    <atomico-brand color="black"></atomico-brand>
</doc-show-html>

## Properties

<doc-props selector="atomico-brand"></doc-props>

<script type="module" src="atomico-brand.js"></script>
```

donde :

- `doc-show-html`: webcomponent que permite enseñar el contenido html declarado.
- `doc-props`: webcomponent que permite enseñar las propiedades del componente asociado, para una iteración simple.

### Desarrollo de aplicación

```bash
npm run dev #  genera una exportacion ligera e inicia un servido en modo observador
npm run build # genera una exportacion optimizada
```

Permite procesar todos los ficheros a base de a expresión `src/**/*.html`, bundle-cli mostrara el link del servidor para su vista previa, la lectura del html es para una mayor customización.

### Exportación de componentes

```
npm run build:components
```

Exporta a base de la expresión `src/components/**/*-*.js`, esto es **util para compartir su proyecto en NPM**
