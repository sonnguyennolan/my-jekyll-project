---
layout: docs
title: Getting Started
permalink: /docs/
order: 1
---

# Getting Started

This guide will help you get started with this Jekyll project that uses TailwindCSS and AlpineJS.

## Prerequisites

Before you begin, make sure you have the following installed:

- Ruby (version 2.7.0 or higher)
- Bundler
- Node.js and npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/my-jekyll-project.git
   cd my-jekyll-project
   ```

2. Install Ruby dependencies:
   ```bash
   bundle install
   ```

3. Install Node.js dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm start
```

This will start both Jekyll and Webpack in watch mode.

## Build for Production

To build the site for production:

```bash
npm run build
```

This will generate the static site in the `_site` directory.
