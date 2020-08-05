const path = require('path')
const { langPrefixes } = require('./utils')
const langConfig = require('../lang.config.json')

const createPositionsPagination = async ({ graphql, createPage }) => {
  const positionsTemplate = path.resolve(
    `${__dirname}/../src/templates/positions.js`
  )
  const lang = 'zh'
  const { positionsPath } = langConfig.languages[lang]

  const result = await graphql(`
    query {
      categories: allMdx(
        filter: {
          fileAbsolutePath: { regex: "${positionsPath}" }
        }
      ) {
        group(field: frontmatter___tags) {
          category: fieldValue
          totalCount
        }
      }
    }
  `)

  const categories = result.data.categories.group
  const positionsPerPage = 5
  categories.forEach(({ category, totalCount }) => {
    const numPages = Math.ceil(totalCount / positionsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      langPrefixes(lang).forEach((prefix) => {
        createPage({
          path:
            i === 0
              ? `/${prefix}careers/${category}`
              : `/${prefix}careers/${category}/${i + 1}`,
          component: positionsTemplate,
          context: {
            category,
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
  })
}

module.exports = createPositionsPagination
