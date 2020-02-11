const path = require('path')

const createBlogCategories = async ({ graphql, createPage }) => {
  const blogCategoriesTemplate = path.resolve(
    `${__dirname}/../src/templates/blogCategories.js`
  )
  const result = await graphql(`
    query {
      categories: allMarkdownRemark {
        group(field: frontmatter___categories) {
          category: fieldValue
          totalCount
        }
      }
    }
  `)

  const categories = result.data.categories.group
  const blogsPerPage = 6
  categories.forEach(categoryObj => {
    const category = categoryObj.category
    const totalCount = categoryObj.totalCount
    const numPages = Math.ceil(totalCount / blogsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/blog/category/${category}`
            : `/blog/category/${category}/${i + 1}`,
        component: blogCategoriesTemplate,
        context: {
          category,
          limit: blogsPerPage,
          skip: i * blogsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })
}

module.exports = createBlogCategories
