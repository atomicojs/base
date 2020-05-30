---
order: 1
---

## Configuracion

Por defecto el template tomara la configuracion declarada en el fichero `index.md`, ej:

```yaml
title: Welcome a simple doc
description: Crea documentacion rapida de una pagina usando markdow y webcomponents
hero: true # habilita el encabezado que meustra title y description
order: 0 # Define el orden de la seccion
columns: true # Activa el uso de columnas en la seccion
socials:
  twitter: https://twitter.com/uppercod
  github: https://github.com/
files:
  logo: ./logo-white.svg
```

La metadata minima para crear una nueva seccion dentro de documentacion es :

```markdown
---
order: 1
---

## my document

bla bla bla...
```

## Usando webcomponents

para usar webcomponents simplemente importe desde su documento html o markdow su script, eg:

```markdown
## Demo

<my-element></my-element>

<script type="module" src="./my-element.js"></script>
```

## Configuracion del templates

El template esta dentro del `src/template`, este posee assets locales que pueden ser modificados para cambiar todo el comportamiento de este.

### Ejemplo de webcomponents en markdown

<script type="module" src="./components/input-password/input-password.js"></script>
