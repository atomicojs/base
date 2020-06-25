---
title: <simple-doc-header/>
description: my description...
draft: true
---

# {{page.title}}

> {{page.description}}

## Installation

```bash
npm install "{{pkg.name}}"
```

## Usage

```raw
import "{{pkg.name}}/simple-doc-header"
```

## Demo

<simple-doc-header></simple-doc-header>

## Properties

| Prop/Attr | Description | Type   | Reflect | Event                  | Default Value         |
| --------- | ----------- | ------ | ------- | ---------------------- | --------------------- |
| message   | message     | String | String  | `{type:"ChangeEvent"}` | `"simple-doc-header"` |

<script type="module" src="simple-doc-header.js"><script>
