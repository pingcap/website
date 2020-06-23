const path = require('path')
const replaceTitle = require('./utils').replaceTitle

const createPositions = async ({ graphql, createPage }) => {
  const policyTermsTemplate = path.resolve(
    `${__dirname}/../src/templates/policyTerms.js`
  )
  const result = await graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: { fields: { collection: { eq: "markdown-pages/terms" } } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
            parent {
              ... on File {
                name
                relativePath
              }
            }
          }
        }
      }
    }
  `)

  result.data.blogs.edges.forEach(({ node }) => {
    createPage({
      path: `/${replaceTitle(node.parent.relativePath)}`,
      component: policyTermsTemplate,
      context: {
        title: node.frontmatter.title
      }
    })
  })
}

module.exports = createPositions
