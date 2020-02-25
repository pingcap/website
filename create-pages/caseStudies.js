const path = require('path')

const createCaseStudies = async ({ graphql, createPage }) => {
  const caseStudyTemplate = path.resolve(
    `${__dirname}/../src/templates/caseStudy.js`
  )
  const { data } = await graphql(`
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
              customerCategory
            }
          }
        }
      }
      caseStudiesWithoutReadMore: allCaseStudiesJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  data.caseStudies.edges.forEach(({ node }) => {
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

  const categoriesOfStudies = [
    ...new Set(
      data.caseStudies.edges
        .map(({ node }) => node.frontmatter.customerCategory)
        .concat(
          data.caseStudiesWithoutReadMore.edges.map(({ node }) => node.name)
        )
    ),
  ]
  categoriesOfStudies.forEach(c => {
    const pagePath = `case-studies/${c.split(' ').join('-')}`

    createPage({
      path: pagePath,
      matchPath: pagePath,
      component: path.resolve(`${__dirname}/../src/pages/case-studies.js`),
    })
  })
}

module.exports = createCaseStudies
