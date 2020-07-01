const path = require('path')
const { langPrefixes, replaceTitle } = require('./utils')
const langConfig = require('../lang.config.json')

const createBlogs = async ({ graphql, createPage }) => {
  const blogTemplate = path.resolve(`${__dirname}/../src/templates/blog.js`)
  for (const lang in langConfig.languages) {
    const { blogsPath } = langConfig.languages[lang]

    const result = await graphql(`
      query {
        blogs: allMarkdownRemark(
          filter: {
            fields: { collection: { eq: "${blogsPath}" } }
            frontmatter: { customer: { eq: null } }
          }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
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
    `)

    result.data.blogs.edges.forEach(({ node }) => {
      langPrefixes(lang).forEach((prefix) => {
        createPage({
          path: `${prefix}blog/${replaceTitle(node.parent.relativePath)}`,
          component: blogTemplate,
          context: {
            title: node.frontmatter.title,
            filePath: `${replaceTitle(node.parent.relativePath)}`,
            language: lang,
            ...langConfig.languages[lang],
          },
        })
      })
    })
  }
}

module.exports = createBlogs
