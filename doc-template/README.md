# doc-template

This folder contains the template that bundle-cli can consume, to generate the documentation of the components processed as a markdown, for the generation of design systems

## use

To append this template to bundle-cli, it is recommended that you create a configuration within the package, eg:

```json
{
  "scripts": {
    "dev-docs": "bundle --config bundleDoc --watch --server"
  },
  "bundleDoc": {
    "src": ["src/components/*/*-*.md"],
    "dir": "docs",
    "mdTemplate": "doc-template/doc-template.js"
  }
}
```

## Special components

### doc-show-html

It allows you to show the HTML contained within this component, it is useful to generate preview of both the component and the associated code, eg:

```html
<doc-show-html>
  <my-button theme="danger" label="User"></my-button>
</doc-show-html>
```

![doc-show-html](./assets/doc-show-html.png)

### doc-props

allows you to list the props defined for the atomically created component, provides a table that allows you to know the configuration in broad strokes, eg:

```html
<my-button theme="danger" icon="user" label="User"></my-button>

<a-props selector="my-button"></a-props>
```

![doc-props](./assets/doc-props.png)

## Personalization

### directory

```bash
# owns the styles associated with the template
style/
    aside.js
    content.js
    index.js # groups aside.js and content.js content
# grouped template, see before editing the rest of the template
index.js
# contains the html associated with the aside
aside.js
# contains the html associated with the header
header.js
#  contains the html content associated with the logo, used by the header.js file
logo.js
# has the general utilities to build the template
utils.js
```
