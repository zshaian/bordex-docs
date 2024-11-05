---
sidebar_position: 1
---

# Quick Overview

Bordex is a simple, fun library for adding creative borders to HTML elements with minimal effort. Designed to be easy to use, Bordex offers a variety of pre-styled borders that can be applied with a single function call.

## Getting Started

### Install Bordex

```bash
npm install bordex
```
or you can use the CDN link. 
```js
import { addGradientBorder } from "https://unpkg.com/bordex@latest/dist/index.js";
```

### Import and Use

```js
import { addGradientBorder } from "bordex";

// Apply a gradient border to an element
const element = document.getElementById("my-element");
addGradientBorder(element, {}, "class");
```

![example border demo](/border-style-images/gradient-border-demo.jpg)

### Explore Options
Customize borders with available settings, but proceed with caution, as some configurations may be unpredictable! Check the [List of Border Styles](/docs/category/border---styles) for more styling examples.