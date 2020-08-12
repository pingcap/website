const path = require('path')
const { langPrefixes, replaceTitle } = require('./utils')
const langConfig = require('../lang.config.json')

const createPositions = async ({ graphql, createPage }) => {
  const policyTermsTemplate = path.resolve(
    `${__dirname}/../src/templates/policyTerms.js`
  )

  for (const lang in langConfig.languages) {
    const { policyTermsPath } = langConfig.languages[lang]

    const result = await graphql(`
      query {
        blogs: allMdx(
          filter: { fileAbsolutePath: { regex: "${policyTermsPath}" } }
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
        path: `/${langPrefixes(lang)}${replaceTitle(node.parent.relativePath)}`,
        component: policyTermsTemplate,
        context: {
          title: node.frontmatter.title,
          language: lang,
          ...langConfig.languages[lang],
        },
      })
    })
  }
}

module.exports = createPositions
