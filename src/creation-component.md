---
title: Component creation
description: Atomico automates the process of creating standardized components, a system of directories created thanks to the package tfolder
group: Welcome
---

# {{page.title}}

> {{page.description}}

## npm run create:component

```bash
tfolder template/tfolder/component src/components
```

> Create a component inside the `src/components/` directory

**Where :**

1. `template/tfolder/component`: source of the template to clone for the component.
2. `src/components`: Destination of the cloned template for the component.

**Console output example**

```bash
tfolder template/tfolder/component src/components

? Component Name? » custom-element
```

> The attached template will create the following files:

```bash
src/components/${component}
                ${component}.js
                ${component}.css
                ${component}.md
```

> `${component}` It will be replaced by the name entered when starting the script.
