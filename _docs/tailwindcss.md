---
layout: docs
title: TailwindCSS
permalink: /docs/tailwindcss/
order: 2
---

# TailwindCSS

This project uses TailwindCSS for styling. Here's how to use it effectively.

## Basic Usage

TailwindCSS is a utility-first CSS framework. Instead of writing custom CSS, you apply pre-defined classes directly in your HTML.

```html
<div class="p-4 bg-white rounded shadow-md">
  <h2 class="text-xl font-bold text-gray-800">Example</h2>
  <p class="mt-2 text-gray-600">This is a TailwindCSS example.</p>
</div>
```

## Customization

You can customize TailwindCSS by modifying the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#3490dc',
        'secondary': '#ffed4a'
      }
    },
  },
  // ...
};
```

## Learning Resources

- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TailwindCSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
