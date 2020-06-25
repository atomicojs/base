---
title: input-password
description: input-password, input that allows to show or hide the password based on a state such as owner or click event
tag: doc
order: 2
---

## Input password

> {{page.description}}

## Installation

```bash
npm install {{pkg.name}}
```

## Usage

```
import "{{pkg.name}}/{{page.title}}"
```

## Demo

<input-password placeholder="Enter your password" second-color="var(--theme-background)"></input-password> This is a web component in a [markdown document]({{pkg.meta.branch}}{{page.file}})

## Properties

| Prop/Attr                  | Description       | Type    | Reflect | Event                           | Default Value |
| -------------------------- | ----------------- | ------- | ------- | ------------------------------- | ------------- |
| value                      | input value       | String  | -       | `{type:"change", bubbles:true}` | -             |
| placeholder                | input placeholder | String  | -       | -                               | -             |
| primaryColor/primary-color | -                 | String  | -       | -                               | `black`       |
| secondColor/second-color   | -                 | String  | -       | -                               | `white`       |
| show                       | -                 | Boolean | true    | -                               |               |

<script type="module" src="input-password.js"><script>
