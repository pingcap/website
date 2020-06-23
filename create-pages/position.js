const path = require('path')
const replaceTitle = require('./utils').replaceTitle

const createPositions = async ({ graphql, createPage }) => {
  const positionTemplate = path.resolve(`${__dirname}/../src/templates/position.js`)
  const result = await graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "markdown-pages/careers" } }
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
      path: `careers/${replaceTitle(node.frontmatter.title)}`,
      component: positionTemplate,
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}

module.exports = createPositions
