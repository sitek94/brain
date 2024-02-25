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
      {
        ariaLabel: 'Goodreads',
        icon: {
          svg: `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Goodreads</title><path d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.078.695.007 1.375-.013 2.07-.006.224 1.342 1.065 2.43 2.683 3.026 1.583.496 3.737.46 5.082-.174 1.351-.636 2.145-1.822 2.503-3.577.212-1.042.236-1.734.231-2.92l-.005-1.631h-.059c-1.245 2.564-3.315 3.53-5.59 3.475-5.74-.054-7.68-4.534-7.528-8.606.01-5.241 3.22-8.537 7.557-8.495 2.354-.14 4.605 1.362 5.554 3.37l.059.002.002-2.918 2.099.004-.002 15.717c-.193 7.04-4.376 7.89-8.209 7.811zm6.1-15.633c-.096-3.26-1.601-6.62-5.503-6.645-3.954-.017-5.625 3.592-5.604 6.85-.013 3.439 1.643 6.305 4.703 6.762 4.532.591 6.551-3.411 6.404-6.967z"/></svg>`,
        },
        link: 'https://www.goodreads.com/macieksitkowski',
      },
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
