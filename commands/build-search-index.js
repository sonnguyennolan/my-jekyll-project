const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const glob = require('glob');
const matter = require('gray-matter');

// Find all markdown files
const markdownFiles = glob.sync('./_docs/**/*.md');

// Process each file
const searchIndex = markdownFiles.map(file => {
  const content = fs.readFileSync(file, 'utf8');
  const { data, content: markdownContent } = matter(content);
  
  // Create excerpt (first 200 characters of content)
  const excerpt = markdownContent
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200) + '...';
    
  return {
    title: data.title,
    url: data.permalink || file.replace('./_docs', '/docs').replace('.md', '/'),
    excerpt: excerpt,
    content: markdownContent
  };
});

// Save the index
fs.writeFileSync('./_site/assets/search-index.json', JSON.stringify(searchIndex));
console.log(`Created search index with ${searchIndex.length} documents`);
