const path = require('path')
const { langPrefixes } = require('./utils')
const langConfig = require('../lang.config.json')

const createPositionsAllPagination = async ({ graphql, createPage }) => {
  const positionsTemplate = path.resolve(
    `${__dirname}/../src/templates/positionsAll.js`
  )
  for (const lang in langConfig.languages) {
    const { positionsPath } = langConfig.languages[lang]
    if (!positionsPath) continue

    const result = await graphql(`
      query {
        positions: allMarkdownRemark(
          filter: {
            fields: { collection: { eq: "${positionsPath}" } }
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

    const positions = result.data.positions.edges
    const positionsPerPage = 5
    const numPages = Math.ceil(positions.length / positionsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      langPrefixes(lang).forEach((prefix) => {
        createPage({
          path:
            i === 0
              ? `/${prefix}careers/join`
              : `/${prefix}careers/join/${i + 1}`,
          component: positionsTemplate,
          context: {
            limit: positionsPerPage,
            skip: i * positionsPerPage,
            numPages,
            currentPage: i + 1,
            language: lang,
            ...langConfig.languages[lang],
          },
        })
      })
    })
  }
}

module.exports = createPositionsAllPagination
