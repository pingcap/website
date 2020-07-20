const path = require('path')
const replaceTitle = require('./utils').replaceTitle

const createPositions = async ({ graphql, createPage, createRedirect }) => {
  const positionTemplate = path.resolve(
    `${__dirname}/../src/templates/position.js`
  )
  const result = await graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: { fields: { collection: { eq: "markdown-pages/careers" } } }
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
    const _path = `careers/${replaceTitle(node.parent.relativePath)}`
    createPage({
      path: _path,
      component: positionTemplate,
      context: {
        title: node.frontmatter.title,
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

module.exports = createPositions
