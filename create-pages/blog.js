const path = require('path')
const replaceTitle = require('./utils').replaceTitle

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
            }
          }
        }
      }
    }
  `)

  result.data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${replaceTitle(node.frontmatter.title)}`,
      component: blogTemplate,
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}

module.exports = createBlogs
