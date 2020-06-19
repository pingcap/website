const purgecssWhitelist = require('./purgecss-whitelist')

module.exports = {
  siteMetadata: {
    title: 'PingCAP',
    description: 'PingCAP Website',
    author: '@PingCAP',
  },
  plugins: [
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages/blogs',
        path: `${__dirname}/markdown-pages/blogs`,
      },
    },
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
        name: 'markdown-pages/terms',
        path: `${__dirname}/markdown-pages/terms`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
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
      },
    },
  ],
  proxy: {
    prefix: '/api/v1',
    url: 'http://localhost:8001/api/v1',
  },
}
