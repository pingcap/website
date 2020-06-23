const path = require('path')
const replaceTitle = require('./utils').replaceTitle
const langConfig = require('../languages.json')

const createBlogs = async ({ graphql, createPage }) => {
  const blogTemplate = path.resolve(`${__dirname}/../src/templates/blog.js`)
  const result = await graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "markdown-pages/blogs" } }
          frontmatter: { customer: { eq: null } }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              locale
            }
          }
        }
      }
    }
  `)

  result.data.blogs.edges.forEach(({ node }) => {
    const lang = node.frontmatter.locale
    const prefixes =
      lang === langConfig.defaultLang ? [`${lang}/`, ''] : [`${lang}/`]
    prefixes.forEach(prefix => {
      createPage({
        path: `${prefix}blog/${replaceTitle(node.frontmatter.title)}`,
        component: blogTemplate,
        context: {
          title: node.frontmatter.title,
          language: lang
        }
      })
    })
  })
}

module.exports = createBlogs
