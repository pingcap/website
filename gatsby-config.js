const purgecssWhitelist = require('./purgecss-whitelist')
const langConfig = require('./lang.config.json')
const { createProxyMiddleware } = require('http-proxy-middleware')

const getSitemapForLanguage = (lang) => {
  const langPrefix = lang === 'en' ? '' : `/${lang}`
  const _ouput = `/sitemap-${lang}.xml`
  const _exclude =
    lang === 'en' ? [`${langPrefix}/404`, '/careers/*'] : [`${langPrefix}/404`]
  const filterRegex =
    lang === 'en' ? '/^((?!/zh/)(?!/jp/).)*$/' : `/^/${lang}//`

  const _query = `{
    site {
      siteMetadata {
        siteUrl
      }
    }
    allSitePage( filter: { path: { regex: "${filterRegex}" } } ) {
      edges {
        node {
          path
        }
      }
    }
  }`

  return {
    output: _ouput,
    exclude: _exclude,
    createLinkInHead: false,
    query: _query,
    serialize: ({ site, allSitePage }) =>
      allSitePage.edges.map((edge) => ({
        url: site.siteMetadata.siteUrl + edge.node.path,
        priority: 0.7,
        links: [
          {
            lang: lang,
            url: site.siteMetadata.siteUrl + edge.node.path,
          },
        ],
      })),
  }
}

module.exports = {
  siteMetadata: {
    title: 'PingCAP',
    description: 'PingCAP Website',
    author: '@PingCAP',
    siteUrl: 'https://pingcap.com/',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-99991864-8',
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        cookieDomain: 'pingcap.com',
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-99991864-8',
          cookieName: 'gatsby-gdpr-google-analytics',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn:
          'https://12d5de765f5941a8ac5518b32110aaa7@o226447.ingest.sentry.io/5287522',
        enabled: (() => process.env.NODE_ENV === 'production')(),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${__dirname}/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/data`,
      },
    },
    ...Object.keys(langConfig.languages).map((lang) => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        name: langConfig.languages[lang].blogsPath,
        path: `${__dirname}/${langConfig.languages[lang].blogsPath}`,
      },
    })),
    ...Object.keys(langConfig.languages).map((lang) => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        name: langConfig.languages[lang].policyTermsPath,
        path: `${__dirname}/${langConfig.languages[lang].policyTermsPath}`,
      },
    })),
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages/careers',
        path: `${__dirname}/markdown-pages/careers`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {
                'c++': 'cpp',
                golang: 'go',
                proto: 'protobuf',
              },
              showLineNumbers: false,
              noInlineHighlight: false,
              escapeEntities: {},
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PingCAP Website',
        short_name: 'PingCAP',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        content: [
          `${__dirname}/src/**/*.js`,
          `${__dirname}/node_modules/@seagreenio/react-bulma/dist/index.es.js`,
        ],
        whitelist: purgecssWhitelist,
        ignore: [
          `src/styles/`,
          'prismjs/',
          'node_modules/swiper/css/swiper.min.css',
        ],
      },
    },
    `gatsby-plugin-meta-redirect`,

    // stop generating /zh pages from sitemap until Chinese pages go live
    // ...Object.keys(langConfig.languages).map((lang) => ({
    //   resolve: `gatsby-plugin-sitemap`,
    //   options: getSitemapForLanguage(lang),
    // })),
    {
      resolve: `gatsby-plugin-sitemap`,
      options: getSitemapForLanguage('en'),
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: getSitemapForLanguage('jp'),
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: '/sitemap.xml',
        serialize: () =>
          ['en', 'jp'].map((lang) => ({
            priority: 1,
            url: `https://pingcap.com/sitemap-${lang}.xml`,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://pingcap.com',
        sitemap: 'https://pingcap.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.summary,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    '/blog/' +
                    edge.node.parent.relativePath.replace('.md', ''),
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: {
                    fileAbsolutePath: { regex: "/markdown-pages/blogs/" }
                    frontmatter: { customer: { eq: null } }
                  }
                  limit: 1000
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      body
                      frontmatter {
                        title
                        date
                        summary
                      }
                      parent {
                        ... on File {
                          relativePath
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/blog/index.xml',
            title: 'PingCAP Blog RSS Feed',
          },
        ],
      },
    },
  ],
  proxy: [
    {
      prefix: '/api/v1',
      url: 'http://localhost:8001/api/v1',
    },
  ],
  developMiddleware: (app) => {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'https://forms.pingcap.com',
        changeOrigin: true,
        onProxyReq: (req) => {
          req.setHeader('Origin', 'https://pingcap-zh-preview.netlify.app')
        },
      })
    )
  },
}
