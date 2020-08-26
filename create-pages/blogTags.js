const path = require('path')
const { langPrefixes, replaceSpaceWithDash } = require('./utils')
const langConfig = require('../lang.config.json')

const createBlogTags = async ({ graphql, createPage }) => {
  const blogTagsTemplate = path.resolve(
    `${__dirname}/../src/templates/blogTags.js`
  )
  for (const lang in langConfig.languages) {
    const { blogsPath } = langConfig.languages[lang]

    const result = await graphql(`
      query {
        tags: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${blogsPath}" }
            frontmatter: { customer: { eq: null } }
          }
        ) {
          group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }
      }
    `)

    const tags = result.data.tags.group
    const blogsPerPage = 6
    tags.forEach((tagObj) => {
      const tag = tagObj.tag
      const tagPath = replaceSpaceWithDash(tagObj.tag)
      const totalCount = tagObj.totalCount
      const numPages = Math.ceil(totalCount / blogsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        langPrefixes(lang).forEach((prefix) => {
          createPage({
            path:
              i === 0
                ? `/${prefix}blog/tag/${tagPath}`
                : `/${prefix}blog/tag/${tagPath}/${i + 1}`,
            component: blogTagsTemplate,
            context: {
              tag,
              limit: blogsPerPage,
              skip: i * blogsPerPage,
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
}

module.exports = createBlogTags
