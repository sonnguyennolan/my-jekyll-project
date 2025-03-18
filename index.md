---
layout: default
---

<div class="py-12 bg-gradient-to-r from-primary to-blue-600 dark:from-blue-800 dark:to-purple-900">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to My Jekyll Project</h1>
    <p class="text-xl text-white/80 mb-8 max-w-3xl mx-auto">A modern documentation site built with Jekyll, TailwindCSS, and AlpineJS</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="{{ '/docs/' | relative_url }}" class="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
        View Documentation
      </a>
      <a href="https://github.com/sonnguyennolan/my-jekyll-project" class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition duration-300">
        GitHub Repository
      </a>
    </div>
  </div>
</div>

<div class="grid md:grid-cols-3 gap-8 my-12">
  <div class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl font-bold mb-2">Jekyll</h2>
    <p class="text-gray-600">Jekyll is a simple, blog-aware, static site generator perfect for personal, project, or organization sites.</p>
  </div>
  
  <div class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl font-bold mb-2">TailwindCSS</h2>
    <p class="text-gray-600">A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.</p>
  </div>
  
  <div class="bg-white p-6 rounded shadow-md">
    <h2 class="text-xl font-bold mb-2">AlpineJS</h2>
    <p class="text-gray-600">A rugged, minimal framework for composing JavaScript behavior in your markup with simple directives.</p>
  </div>
</div>

<div class="mt-12 bg-white p-8 rounded shadow-md" x-data="{ open: false }">
  <h2 class="text-2xl font-bold mb-4">Try Alpine.js</h2>
  <p class="mb-4">Click the button below to see Alpine.js in action:</p>
  
  <button @click="open = !open" class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Toggle Content
  </button>
  
  <div x-show="open" x-transition class="mt-4 p-4 bg-gray-100 rounded">
    <p>This content is toggled using Alpine.js!</p>
  </div>
</div>
