const path = require('path')

const createBlogs = async ({ graphql, createPage }) => {
  const blogTemplate = path.resolve(`${__dirname}/../src/templates/blog.js`)
  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "markdown-pages/blogs" } } }
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.frontmatter.title
        .replace(/[?.,:%]/g, '')
        .split(' ')
        .join('-')}`,
      component: blogTemplate,
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}

module.exports = createBlogs
