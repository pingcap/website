const path = require('path')
const replaceTitle = require('./utils').replaceTitle
const langConfig = require('../languages.json')

const createPositions = async ({ graphql, createPage }) => {
  const positionTemplate = path.resolve(
    `${__dirname}/../src/templates/position.js`
  )
  for (const { name: lang } of langConfig.languages) {
    const result = await graphql(`
      query {
        blogs: allMarkdownRemark(
          filter: {
            fields: { collection: { eq: "markdown-pages/careers/${lang}" } }
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

    result.data.blogs.edges.forEach(({ node }) => {
      createPage({
        path: `${lang}/careers/${replaceTitle(node.frontmatter.title)}`,
        component: positionTemplate,
        context: {
          title: node.frontmatter.title
        }
      })
      if (lang === langConfig.defaultLang) {
        createPage({
          path: `careers/${replaceTitle(node.frontmatter.title)}`,
          component: positionTemplate,
          context: {
            title: node.frontmatter.title
          }
        })
      }
    })
  }
}

module.exports = createPositions
