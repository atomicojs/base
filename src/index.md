---
title: Introduction
description: This bundle-cli template allows static documentation for components from markdown documents
group: Welcome
---

# {{page.title}}

> {{page.description}}

## Steps

### 1. See pkg.scripts

#### npm start

```bash
bundle src/**/*.md docs --watch --server --template template/template.html
```

> This script allows you to create a livereload mode server that serves markdown files

**Where :**

1. `src/**/*.md`: expression for fast-glob, this will import all the files that comply with the expression.
2. `--watch`: It allows to observe the changes of the files associated to the expression, existing or to exist.
3. `--server` : Create a server by combining with the `--watch` flag enables livereload mode of the server.
4. `--template template/template.html`: allows to append the use of a superior template to nest the associated markdown files.

<br>

**Console output example**

```bash
server running on http://localhost:8000 # destination directory server

bundle: 15ms # bundle creation duration
```

> `npm run build:docs` This script allows you to run the build for production of the `npm start` script.

### npm build:components

```bash
bundle src/components/**/*-*.js ./ --minify --external
```

> This script allows you to export the associated web-components

**Where :**

1. `src/components/**/*-*.js`: look for files that match the expression, eg `src/components/my-header/my-header.js`.
2. `--minify`: Minify css and js code
3. `--external`: Lets consider `pkg.dependencies` as external dependencies.
