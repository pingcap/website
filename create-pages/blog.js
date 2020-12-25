const path = require('path')
const { langPrefixes, replaceTitle } = require('./utils')
const langConfig = require('../lang.config.json')

const createBlogs = async ({ graphql, createPage, createRedirect }) => {
  const blogTemplate = path.resolve(`${__dirname}/../src/templates/blog.js`)
  for (const lang in langConfig.languages) {
    const { blogsPath } = langConfig.languages[lang]

    const result = await graphql(`
      query {
        blogs: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${blogsPath}" }
            frontmatter: { customer: { eq: null } }
          }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                aliases
                redirectCategory
                redirectTag
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

    result.data.blogs.edges.forEach(({ node }) => {
      langPrefixes(lang).forEach((prefix) => {
        const _path = `${prefix}blog/${replaceTitle(node.parent.relativePath)}`

        createPage({
          path: _path,
          component: blogTemplate,
          context: {
            title: node.frontmatter.title,
            filePath: `${replaceTitle(node.parent.relativePath)}`,
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

        if (node.frontmatter.redirectCategory) {
          const redirectCategoryArr = node.frontmatter.redirectCategory

          redirectCategoryArr.forEach((category) => {
            createRedirect({
              fromPath: `/blog/category/${category}`,
              toPath: '/blog',
              isPermanent: true,
            })
          })
        }

        if (node.frontmatter.redirectTag) {
          const redirectTagArr = node.frontmatter.redirectTag

          redirectTagArr.forEach((tag) => {
            createRedirect({
              fromPath: `/blog/tag/${tag}`,
              toPath: '/blog',
              isPermanent: true,
            })
          })
        }
      })
    })
  }
}

module.exports = createBlogs
