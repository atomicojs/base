# Comenzando con Atomico + Snowpack

[Español](./spanish.md) [English](../README.md)

Esta configuración permite un desarrollo dinámico basado en Snowpack, mediante el scripts `npm start` ud podrá desarrollar componentes que se visualicen el navegador gracias a un servidor con livereload local enseñado por consola, por defecto este puede estar alojado en el puerto `localhost:8080`.

## Directorio

```bash
/src
    /components # directorio para webcomponentes
        /atomico-counter # Ejemplo de componente con Atomico
            atomico-counter.js
            atomico-counter.css
            atomico-counter.md  # documentación del componente
index.html # Archivo html a servirce en el servidor
```

## Scripts

### npm start

Arranca el servidor, este por defecto nos mostrara el fichero `index.html` y todo lo que este importe

### npm run create:component

Crea un componente en el directorio `src/components` [con la estructura recomendada](https://atomico.gitbook.io/doc/v/es/guias/guias-de-estilo) `Atomico`

### npm run create:hook

Crea un hook en el directorio `src/hooks` con la [estructura recomendada](https://atomico.gitbook.io/doc/v/es/guias/guias-de-estilo) `Atomico`
