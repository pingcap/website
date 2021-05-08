const path = require('path')
const { langPrefixes, replaceTitle } = require('./utils')
const langConfig = require('../lang.config.json')

const createPolicyTerms = async ({ graphql, createPage, createRedirect }) => {
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
      createPage({
        path: _path,
        component: policyTermsTemplate,
        context: {
          title: node.frontmatter.title,
          language: lang,
          ...langConfig.languages[lang],
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
}

module.exports = createPolicyTerms
