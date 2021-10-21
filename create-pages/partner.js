const path = require('path')
const { langPrefixes, replaceTitle } = require('./utils')
const langConfig = require('../lang.config.json')

const createPartner = async ({ graphql, createPage }) => {
  const partnerTemplate = path.resolve(
    `${__dirname}/../src/templates/partner.js`
  )

  for (const lang in langConfig.languages) {
    const { partnerPath } = langConfig.languages[lang]

    const result = await graphql(`
      query {
        blogs: allMdx(
          filter: { fileAbsolutePath: { regex: "${partnerPath}" } }
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
      const _path = `/${langPrefixes(lang)}${replaceTitle(
        node.parent.relativePath
      )}`

      console.log('_path', _path)
      createPage({
        path: _path,
        component: partnerTemplate,
        context: {
          title: node.frontmatter.title,
          language: lang,
          ...langConfig.languages[lang],
        },
      })
    })
  }
}

module.exports = createPartner
