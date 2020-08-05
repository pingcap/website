const path = require('path')
const { langPrefixes, replaceTitle } = require('./utils')
const langConfig = require('../lang.config.json')

const createPositionsZH = async ({ graphql, createPage }) => {
  const positionTemplate = path.resolve(
    `${__dirname}/../src/templates/position-zh.js`
  )
  const lang = 'zh'
  const { positionsPath } = langConfig.languages[lang]

  const result = await graphql(`
    query {
      positions: allMdx(
        filter: {
          fileAbsolutePath: { regex: "${positionsPath}" }
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

  result.data.positions.edges.forEach(({ node }) => {
    langPrefixes(lang).forEach((prefix) => {
      createPage({
        path: `${prefix}careers/${replaceTitle(node.parent.relativePath)}`,
        component: positionTemplate,
        context: {
          title: node.frontmatter.title,
          filePath: `${replaceTitle(node.parent.relativePath)}`,
          language: lang,
          ...langConfig.languages[lang],
        },
      })
    })
  })
}

module.exports = createPositionsZH
