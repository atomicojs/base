---
title: "{{name}}"
description: my description...
group: Hooks
draft: true
---

{{=<% %>=}}# {{page.title}}

> {{page.description}}<%={{ }}=%>

## Installation

```bash
npm install "{{=<% %>=}}{{pkg.name}}/{{page.title}}<%={{ }}=%>"
```

## Usage

```jsx
import { h } from "atomico";
import { {{nameCamelCase}} }from {{=<% %>=}}"{{pkg.name}}/{{page.title}}<%={{ }}=%>"

function Component(){
    {{nameCamelCase}}();
    return <host></host>;
}
```
