const path = require('path')
const langConfig = require('../languages.json')

const createBlogTags = async ({ graphql, createPage }) => {
  const blogTagsTemplate = path.resolve(
    `${__dirname}/../src/templates/blogTags.js`
  )
  for (const { name: lang } of langConfig.languages) {
    const result = await graphql(`
    query {
      tags: allMarkdownRemark(
        filter: { frontmatter: {
          customer: { eq: null }
          locale: { eq: "${lang}" }
        } }
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
    tags.forEach(tagObj => {
      const tag = tagObj.tag
      const totalCount = tagObj.totalCount
      const numPages = Math.ceil(totalCount / blogsPerPage)
      const prefixes =
        lang === langConfig.defaultLang ? [`${lang}/`, ''] : [`${lang}/`]
      Array.from({ length: numPages }).forEach((_, i) => {
        prefixes.forEach(prefix => {
          createPage({
            path:
              i === 0
                ? `/${prefix}blog/tag/${tag}`
                : `/${prefix}blog/tag/${tag}/${i + 1}`,
            component: blogTagsTemplate,
            context: {
              tag,
              limit: blogsPerPage,
              skip: i * blogsPerPage,
              numPages,
              currentPage: i + 1
            }
          })
        })
      })
    })
  }
}

module.exports = createBlogTags
