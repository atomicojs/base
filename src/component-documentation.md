---
title: Component documentation
description: Quick and easy way to view and document your component
group: Welcome
---

# {{page.title}}

> {{page.description}}

The template system is based on handerbars, bundle-cli provides a series of data for the construction of the documentation.

```yaml
---
title: Component documentation
description: description
folder: /custom-folder
group: Welcome
---

```

> you can append metadata to be used by the template or the same document

**Where :**

1.  `title`: _String_, Title of the document to be used for navigation.
2.  `description`: _String_ ,General description of the page.
3.  `folder`: _String_, Lets you custumize the destination folder of the html document.
4.  `group`: _String[]_, Define a target group for the aside.

## Global data

```yaml
theme: goal declared in the template
pkg: data from package.json
page: goal declares on the page
pages: Pages grouped by group
```

> This data can be easily seen from the template by `\{{log this}}`

## Import from markdown

```md
<my-component><my-component/>

<script type="module" src="./my-component.js"></script>
```

> Bundle-cli will import using the expression `[src=local|node_module]` or `link[href=local|node_module]`, for a correct import keep a unique name for the local js files to include in the markdown, if you import from node_module define the exact path of the component file to use, eg `atomico-base/doc-story`
