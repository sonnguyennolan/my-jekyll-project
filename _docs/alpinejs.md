---
layout: docs
title: AlpineJS
permalink: /docs/alpinejs/
order: 3
---

# AlpineJS

This project uses AlpineJS for adding interactive elements. Here's how to use it.

## Basic Usage

AlpineJS allows you to add interactivity directly in your HTML markup using directives.

### Toggle Example

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  
  <div x-show="open">
    This content will be shown when toggled.
  </div>
</div>
```

### Dropdown Example

```html
<div x-data="{ isOpen: false }" @click.away="isOpen = false">
  <button @click="isOpen = !isOpen">Menu</button>
  
  <div x-show="isOpen" x-transition>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
```

## Learning Resources

- [AlpineJS Documentation](https://alpinejs.dev/start-here)
- [AlpineJS Examples](https://alpinejs.dev/components)
