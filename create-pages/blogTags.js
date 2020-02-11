const path = require('path')

const createBlogTags = async ({ graphql, createPage }) => {
  const blogTagsTemplate = path.resolve(
    `${__dirname}/../src/templates/blogTags.js`
  )
  const result = await graphql(`
    query {
      tags: allMarkdownRemark {
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
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/tag/${tag}` : `/blog/tag/${tag}/${i + 1}`,
        component: blogTagsTemplate,
        context: {
          tag,
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

module.exports = createBlogTags
