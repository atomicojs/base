---
title: <hello-world/>
description: my description...
group: Components
---

# {{page.title}}

> {{page.description}}

## Installation

```bash
npm install {{pkg.name}}
```

## Usage

```
import "{{pkg.name}}/hello-world"
```

## Demo

<hello-world></hello-world>

## Properties

| Property | Attribute | Description       | Type   | Reflect | Event         | Default Value |
| -------- | --------- | ----------------- | ------ | ------- | ------------- | ------------- |
| message  | message   | little message... | String | true    | changeMessage | hello-world   |

<script type="module" src="hello-world.js"><script>
