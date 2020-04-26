# Sistemas de diseño con Atomico

[Español](./spanish.md) [English](../README.md)

Esta configuración permite un desarrollo dinámico basado en la exportación desde ficheros html y markdown, mediante el scripts `npm start` ud podrá desarrollar componentes que se visualicen el navegador gracias a un servidor con livereload local mostrado por consola, por defecto este puede estar alojado en el puerto `localhost:8000`.

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

> los archivos exportados desde el html se almacenan procesados en `/docs`(Amigable con github pages 😎), ud puede cambiar este efecto modificando los `scripts` del `package.json`

## Scripts

### npm start

Arranca el servidor, este por defecto nos mostrara el fichero `src/index.html` y todo lo que este importe

### npm run build

Empaqueta para producción lo expotado desde los ficheros html

### npm run build:npm

Empaqueta para distribución mediante NPM todos los componentes asociados al directorio `src/components`, estos son exportados como archivos independientes.

> Recuerda distribuir en npm debes modificar el **package.json**.

### npm run create:component

Crea un componente en el directorio `src/components` [con la estructura recomendada](https://atomico.gitbook.io/doc/v/es/guias/guias-de-estilo) `Atomico`

### npm run create:hook

Crea un hook en el directorio `src/hooks` con la [estructura recomendada](https://atomico.gitbook.io/doc/v/es/guias/guias-de-estilo) `Atomico`
