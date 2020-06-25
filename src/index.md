---
title: Welcome a simple docs
hero: true
description: Create quick singlePage documentation with Markdown + Webcomponents
columns: true
tag: doc
order: 0
socials:
    twitter: https://twitter.com/uppercod
    github: https://github.com/
files:
    logo: ./logo-white.svg
fetch:
    author: https://api.github.com/users/atomicojs
query:
    pages:
        where:
            tag: doc
        sort: order
        order: 1
---

## Introduction

Create documentation in a simple way, this configuration allows you to extract all the html and markdow files from your `src/` directory and group them into a single document, but with a big difference **use webcomponetns** freely, the configuration will dynamically resolve all Assets exports and groups them using Rollup. **It is the magic of [EStack](https://github.com/atomicojs/estack)**
