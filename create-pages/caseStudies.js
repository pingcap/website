const path = require('path')
const replaceTitle = require('./utils').replaceTitle
const langConfig = require('../lang.config.json')

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
            parent {
              ... on File {
                relativePath
              }
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
      caseStudiesZH: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "markdown-pages/zh/blogs" } }
          frontmatter: { category: { eq: "case" } }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              customerCategory
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

  data.caseStudies.edges.forEach(({ node }) => {
    createPage({
      path: `case-studies/${replaceTitle(node.parent.relativePath)}`,
      component: caseStudyTemplate,
      context: {
        title: node.frontmatter.title,
        language: 'en',
        ...langConfig.languages['en'],
      },
    })
  })

  data.caseStudiesZH.edges.forEach(({ node }) => {
    createPage({
      path: `zh/case-studies/${replaceTitle(node.parent.relativePath)}`,
      component: caseStudyTemplate,
      context: {
        title: node.frontmatter.title,
        language: 'zh',
        ...langConfig.languages['zh'],
      },
    })
  })

  const categoriesOfStudies = [
    ...new Set(
      data.caseStudies.edges
        .map(({ node }) => node.frontmatter.customerCategory || 'All')
        .concat(
          data.caseStudiesWithoutReadMore.edges.map(({ node }) => node.name),
          'All'
        )
    ),
  ]
  categoriesOfStudies.forEach((c) => {
    const pagePath = `case-studies/${c.split(' ').join('-')}`

    createPage({
      path: pagePath,
      matchPath: pagePath,
      component: path.resolve(`${__dirname}/../src/pages/case-studies.js`),
      context: {
        language: 'en',
        ...langConfig.languages['en'],
      },
    })
  })

  const categoriesOfStudiesZH = [
    ...new Set([
      '全部行业',
      ...data.caseStudiesZH.edges.map(
        ({ node }) => node.frontmatter.customerCategory || '全部行业'
      ),
    ]),
  ]

  categoriesOfStudiesZH.forEach((c) => {
    const pagePath = `zh/case-studies/${c.split(' ').join('-')}`

    createPage({
      path: pagePath,
      matchPath: pagePath,
      component: path.resolve(`${__dirname}/../src/pages/zh/case-studies.js`),
      context: {
        language: 'zh',
        ...langConfig.languages['zh'],
      },
    })
  })
}

module.exports = createCaseStudies
