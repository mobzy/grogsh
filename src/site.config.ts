import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  title: 'grog.sh',
  author: 'mo',
  description: 'notes from the terminal',
  favicon: '/favicon/favicon.ico',
  socialCard: '/images/social-card.png',
  locale: {
    lang: 'en-GB',
    attrs: 'en_GB',
    dateLocale: 'en-GB',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  logo: {
    src: '/src/assets/avatar.png',
    alt: 'mo'
  },

  titleDelimiter: '·',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  head: [],
  customCss: [],

  header: {
    menu: [
      { title: 'blog', link: '/blog' },
      { title: 'projects', link: '/projects' },
      { title: 'about', link: '/about' }
    ]
  },

  footer: {
    year: `© ${new Date().getFullYear()}`,
    links: [],
    credits: false,
    // TODO: replace with your GitHub username
    social: { github: 'https://github.com/mobzy' }
  },

  content: {
    externalLinks: {
      content: ' ↗',
      properties: {
        style: 'user-select:none'
      }
    },
    blogPageSize: 8,
    share: ['x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  links: {
    logbook: [],
    applyTip: [
      { name: 'Name', val: theme.title },
      { name: 'Desc', val: theme.description || '' },
      { name: 'Link', val: 'https://grog.sh' }
    ],
    cacheAvatar: false
  },
  pagefind: true,
  quote: {
    server: 'https://dummyjson.com/quotes/random',
    target: `(data) => (data.quote.length > 80 ? \`\${data.quote.slice(0, 80)}...\` : data.quote || 'Error')`
  },
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // To enable comments: deploy a Waline server, replace the URL, and set enable: true
  waline: {
    enable: false,
    server: 'https://example.com/',
    showMeta: false,
    emoji: ['bmoji'],
    additionalConfigs: {
      pageview: false,
      comment: false,
      locale: {
        placeholder: 'Leave a comment'
      },
      imageUploader: false
    }
  }
}

export const terms: CardListData = {
  title: 'Terms',
  list: [
    { title: 'Privacy Policy', link: '/terms/privacy-policy' },
    { title: 'Disclaimer', link: '/terms/disclaimer' }
  ]
}

const config = { ...theme, integ } as Config
export default config
