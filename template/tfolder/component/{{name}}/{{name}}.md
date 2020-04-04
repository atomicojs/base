---
title: <{{name}}/>
description: my description...
group: Components
---

{{=<% %>=}}# {{page.title}}

> {{page.description}}<%={{ }}=%>

## Installation

```bash
npm install "{{=<% %>=}}{{pkg.name}}<%={{ }}=%>"
```

## Usage

```js
import "{{=<% %>=}}{{pkg.name}}<%={{ }}=%>/{{name}}";
```

## Demo

<{{name}}></{{name}}>

## Properties

| Prop/Attr | Description       | Type   | Reflect | Event         | Default  |
| --------- | ----------------- | ------ | ------- | ------------- | -------- |
| message   | little message... | String | true    | changeMessage | {{name}} |

<script type="module" src="{{name}}.js"><script>
