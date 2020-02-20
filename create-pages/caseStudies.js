const path = require('path')

const createCaseStudies = async ({ graphql, createPage }) => {
  const caseStudyTemplate = path.resolve(
    `${__dirname}/../src/templates/caseStudy.js`
  )
  const result = await graphql(`
    query {
      caseStudies: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "markdown-pages/blogs" } }
          frontmatter: { customer: { ne: null } }
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

  result.data.caseStudies.edges.forEach(({ node }) => {
    createPage({
      path: `case-studies/${node.frontmatter.title
        .replace(/[?%]/g, '')
        .split(' ')
        .join('-')}`,
      component: caseStudyTemplate,
      context: {
        title: node.frontmatter.title,
      },
    })
  })
}

module.exports = createCaseStudies
