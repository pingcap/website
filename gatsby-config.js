module.exports = {
  siteMetadata: {
    title: 'PingCAP',
    description: '',
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'markdown-pages/blogs',
        path: `${__dirname}/markdown-pages/blogs`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-autolink-headers`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'PingCAP Website',
        short_name: 'PingCAP',
        start_url: '/',
        background_color: '#fff',
        theme_color: 'blue',
        display: 'minimal-ui',
        icon: 'images/pingcap-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        useResolveUrlLoader: true,
      },
    },
  ],
  proxy: {
    prefix: '/api/v1',
    url: 'http://localhost:8001/api/v1',
  },
}
