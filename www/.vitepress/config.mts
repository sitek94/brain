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
  title: 'brain.macieksitkowski',
  description: "Maciek's knowledge dump",
  sitemap: {
    hostname: 'https://brain.macieksitkowski.com',
  },
  head: [
    ['link', {rel: 'icon', href: '/brain.png'}],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-BM898K8QCN',
      },
    ],
    [
      'script',
      {},
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BM898K8QCN');
      `,
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/brain.png',
    editLink: {
      pattern: 'https://github.com/sitek94/brain/edit/main/www/:path',
    },
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

    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
  },

  // Unfortunately, it's not enough because localSearch shows $frontmatter.title as well. This PR needs to be merged
  // before we can use `transformHtml` to fix frontmatter: https://github.com/vuejs/vitepress/pull/3032
  // transformHtml(code, _, ctx) {
  //   // Vitepress replaces frontmatter.title with actual title in <h1> tag, but it doesn't do it for:
  //   // - href="#frontmatter-title"
  //   // - aria-label="Permalink to &quot;{{ $frontmatter.title }}&quot;"
  //   // - id="frontmatter-title"
  //   // That's why we need to replace it manually.

  //   if (code.includes(`frontmatter.title`)) {
  //     const title = ctx.pageData.frontmatter.title as string
  //     const slug = slugify(title)

  //     code = code.replace('#frontmatter-title', `#${slug}`)
  //     code = code.replace('{{ $frontmatter.title }}', title)
  //     code = code.replace('frontmatter-title', slug)
  //   }

  //   return code
  // },
})

function createSidebarItemFromFile(file: string) {
  const frontmatter = matter.read(file)
  const link = file.replace('www/', '').replace('.md', '')
  const [day, month, year] = frontmatter.data.createdAt.split('/').map(Number)
  const createdAt = new Date(year, month - 1, day)

  return {text: frontmatter.data.title, createdAt, link}
}

function slugify(text: string) {
  return (
    text
      .toLowerCase()
      .trim()
      // Remove punctuation. [^\w\s]|_ matches any character that is not a word character (a-z, A-Z, 0-9, _),
      // not a whitespace character, or an underscore. This effectively removes all punctuation.
      .replace(/[^\w\s]|_/g, '')
      // Replace all whitespace with a dash. \s+ matches one or more whitespace characters.
      .replace(/\s+/g, '-')
  )
}
