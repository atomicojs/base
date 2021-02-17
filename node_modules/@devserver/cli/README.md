# @devserver/cli

Minimalist development server with minimal disk impact and designed for modern development.

**Dev support**

1. Support for JSX(pragma and jsx-runtime) and TS tanks to Sucrace.
2. Livereload, HTTP2 with automatic SSL.
3. Resolution from NPM only if the package has support for modules declared by `package.json#exports` or` package.json#module`.
4. Alternative NPM package resolution via CDN.

**Build support**

1. Support for JSX(pragma and jsx-runtime) and TS tanks to Sucrace.
2. Assets hash.
3. CSS and JS optimization.
4. Resolution from NPM only if the package has support for modules declared by `package.json#exports` or` package.json#module`.
5. Automatic detection of external dependencies.
6. Alternative NPM package resolution via CDN.

**Considerations**

1. All import requires the use of extension, example `./my.js`.
2. All relative resources require the use of the `./` or `../` pattern.

## Dev mode

This mode is designed to serve content from an HTML file and process the content served on demand according to the type.

```bash
npx devserver dev <src>
## Directory example
src
  ├──index.js
  └──index.html
## Script
npx devserver dev src
```

### Build mode flag

`--port [port]`: Modify the default port `80`.

`--spa [file]`: The unresolved requests are redirected to the file to associate.

`--jsxImportSource [jsxImportSource]`: allows to associate the package to use for jsx-runtime.

`--ssl`: enables the use of HTTP2 with SSL.

`--cdn`: Resolve NPM packages from a CDN.

## Build mode

This mode packages the site or application according to the export pattern, example:

```bash
npx devserver build <src> <dest>
## Example
npx devserver build src/*.html public
```

The previous example will export all the asset files that are related to the files captured by the expression.

### Build mode flag

`--jsxImportSource [jsxImportSource]`: allows to associate the package to use for jsx-runtime.

`--cdn`: Resolve NPM packages from a CDN.

`--minify`: Minify JS and CSS code.

`--href [href]`: Associate a prefix for file resolution.

`--external [external]`: Associate external dependencies manually.

### Build rule

1. The path must always start from a static folder, example:

```bash
src/** ## `src` is the static path
src/site-1/** ## `src/site-1` is the static path
```

2. All relative import requires the use of extension.
