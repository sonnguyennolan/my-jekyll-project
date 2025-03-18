# Jekyll Project with TailwindCSS and AlpineJS

A sample Jekyll website using TailwindCSS for styling and AlpineJS for interactive components.

## Features

- Static site generation with Jekyll
- Responsive design with TailwindCSS
- Interactive UI components with AlpineJS
- Automatic deployment with GitHub Actions

## Getting Started

### Prerequisites

- Ruby (version 2.7.0 or higher)
- Bundler
- Node.js and npm

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/sonnguyennolan/my-jekyll-project.git
   cd my-jekyll-project
   ```

2. Install dependencies:
   ```bash
   bundle install
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   This will start both Jekyll and Webpack in watch mode.

4. Visit `http://localhost:4000` in your browser.

### Building for Production

```bash
npm run build
```

This will generate the static site in the `_site` directory.

## Deployment

This project automatically deploys to GitHub Pages when changes are pushed to the main branch.

## Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [AlpineJS Documentation](https://alpinejs.dev/start-here)
