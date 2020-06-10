---
order: 1
---

## Configuration

By default the template will take the configuration declared in the [index.md]({{pkg.meta.branch}}{{page.file}}) file, eg:

```yaml
title: Welcome a simple doc
description: Create quick singlePage documentation with markdown + webcomponents
hero: false # enable the header showing title and description
order: 0 # Define the order of the section
columns: true # Activate the use of columns in the section
socials:
  twitter: https://twitter.com/uppercod
  github: https://github.com/
files:
  logo: ./logo-white.svg
fetch:
  author: https://api.github.com/users/atomicojs # export the author from github
```

The minimum metadata to create a new section within documentation is:

```markdown
---
order: 1
---

## my document

bla bla bla...
```

## Using webcomponents

to use web components just import from your html document or markdow your script, eg:

```markdown
## Demo

<my-element></my-element>

<script type="module" src="./my-element.js"></script>
```

## Template configuration

The template is inside the `src/template`, it has local assets that can be modified to change all its behavior.
