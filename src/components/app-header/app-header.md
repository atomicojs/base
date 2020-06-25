---
title: "app-header"
description: my description...
group: Components
draft: true
---

# {{ page.title }}

> {{ page.description }}

## Installation

```bash
npm install "{{pkg.name}}"
```

## Usage

```
import "{{pkg.name}}/app-header"
```

## Demo

<app-header></app-header>

## Properties

| Prop/Attr | Description | Type   | Reflect | Event                  | Default Value |
| --------- | ----------- | ------ | ------- | ---------------------- | ------------- |
| message   | message     | String | String  | `{type:"ChangeEvent"}` | `"app-header"`  |

<script type="module" src="app-header.js"><script>
