---
title: "{{name}}"
description: my description...
group: Components
draft: true
---

{{=<% %>=}}# {{ page.title }}

> {{ page.description }}<%={{ }}=%>

## Installation

```bash
npm install "{{=<% %>=}}{{pkg.name}}<%={{ }}=%>"
```

## Usage

```
import {{=<% %>=}}"{{pkg.name}}<%={{ }}=%>/{{name}}"
```

## Demo

<{{name}}></{{name}}>

## Properties

| Prop/Attr | Description | Type   | Reflect | Event                  | Default Value |
| --------- | ----------- | ------ | ------- | ---------------------- | ------------- |
| message   | message     | String | String  | `{type:"ChangeEvent"}` | `"{{name}}"`  |

<script type="module" src="{{=<% %>=}}{{<%={{ }}=%>'{{name}}.js'{{=<% %>=}}|asset}}<%={{ }}=%>"><script>
