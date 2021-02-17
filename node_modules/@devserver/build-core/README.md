# @devserver/build-core

Build used by [@devserver/cli](http://github.com/atomicojs/cli), allows to group the equal import to the `@devserver/cli` development server, like:

1. Export html files and assets.
2. Export files type js
3. Detect the external dependencies of the root and the subpackages, in case of using a monorepo type manager.

## Todo

-   [ ] Import assets from CSS files.
-   [ ] Minify CSS files.
-   [ ] Compress JPG, PNG and SVG type assets.
