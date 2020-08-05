const purgecssWhitelist = require('./purgecss-whitelist')
const langConfig = require('./lang.config.json')

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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages/careers',
        path: `${__dirname}/markdown-pages/careers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages/zh/careers',
        path: `${__dirname}/markdown-pages/zh/careers`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages/terms',
        path: `${__dirname}/markdown-pages/terms`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
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
        icon: 'images/pingcap-icon.png', // This path is relative to the root of the site.
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
        ignore: [`src/styles/`, 'node_modules/swiper/css/swiper.min.css'],
      },
    },
    `gatsby-plugin-meta-redirect`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/website-en-sitemap.xml`,
        exclude: ['/404'],
        sitemapSize: 500,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://pingcap.com',
        sitemap: 'https://pingcap.com/website-en-sitemap.xml',
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
  proxy: {
    prefix: '/api/v1',
    url: 'http://localhost:8001/api/v1',
  },
}
