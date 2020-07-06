const path = require('path')
const replaceTitle = require('./utils').replaceTitle

const createBlogs = async ({ graphql, createPage, createRedirect }) => {
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
              aliases
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
    const _path = `blog/${replaceTitle(node.parent.relativePath)}`
    createPage({
      path: _path,
      component: blogTemplate,
      context: {
        title: node.frontmatter.title,
        filePath: `${replaceTitle(node.parent.relativePath)}`
      },
    })

    // create redirect
    if (node.frontmatter.aliases) {
      const aliasesArr = node.frontmatter.aliases

      aliasesArr.forEach((alias) => {
        createRedirect({
          fromPath: `${alias}`,
          toPath: _path,
          isPermanent: true,
        })
      })
    }
  })
}

module.exports = createBlogs
