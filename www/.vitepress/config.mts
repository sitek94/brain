import {defineConfig} from 'vitepress'

import glob from 'fast-glob'
import matter from 'gray-matter'

const todayILearnedItems = glob
  .sync('**/today-i-learned/*.md', {ignore: ['**/index.md']})
  .map(createSidebarItemFromFile)

const booksItems = glob
  .sync('**/books/*.md', {ignore: ['**/index.md']})
  .map(createSidebarItemFromFile)

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'brain.macieksitkowski.com',
  description: "Maciek's knowledge dump",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {
        text: 'Today I Learned',
        link: '/today-i-learned/',
      },
      {text: 'Books', link: '/books/'},
    ],

    sidebar: {
      '/today-i-learned/': [
        {
          text: 'Today I Learned',
          items: todayILearnedItems,
        },
      ],
      '/books/': [
        {
          text: 'Books',
          items: booksItems,
        },
      ],
    },

    socialLinks: [
      {icon: 'github', link: 'https://github.com/sitek94'},
      {icon: 'linkedin', link: 'https://www.linkedin.com/in/maciek-sitkowski/'},
      {icon: 'youtube', link: 'https://www.youtube.com/@macieksitkowski'},
    ],
    footer: {
      copyright: 'Copyright © 2024-present Maciek Sitkowski',
    },
  },
})

function createSidebarItemFromFile(file: string) {
  const frontmatter = matter.read(file)
  const link = file.replace('www/', '').replace('.md', '')
  const [day, month, year] = frontmatter.data.createdAt.split('/').map(Number)
  const createdAt = new Date(year, month - 1, day)

  return {text: frontmatter.data.title, createdAt, link}
}
