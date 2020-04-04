---
title: <hello-world/>
description: my description...
group: Components
---

# {{page.title}}

> {{page.description}}

## Installation

```bash
npm install "{{pkg.name}}"
```

## Usage

```js
import "{{pkg.name}}/hello-world";
```

## Demo

<hello-world></hello-world>

## Properties

| Prop/Attr | Description       | Type   | Reflect | Event         | Default     |
| --------- | ----------------- | ------ | ------- | ------------- | ----------- |
| message   | little message... | String | true    | changeMessage | hello-world |

<script type="module" src="hello-world.js"><script>
