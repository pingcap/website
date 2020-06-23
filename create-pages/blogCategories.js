const path = require('path')
const langConfig = require('../languages.json')

const createBlogCategories = async ({ graphql, createPage }) => {
  const blogCategoriesTemplate = path.resolve(
    `${__dirname}/../src/templates/blogCategories.js`
  )
  for (const { name: lang } of langConfig.languages) {
    const result = await graphql(`
      query {
        categories: allMarkdownRemark(
          filter: { frontmatter: {
            customer: { eq: null }
            locale: { eq: "${lang}" }
          } }
        ) {
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
      const prefixes =
        lang === langConfig.defaultLang ? [`${lang}/`, ''] : [`${lang}/`]
      Array.from({ length: numPages }).forEach((_, i) => {
        prefixes.forEach(prefix => {
          createPage({
            path:
              i === 0
                ? `/${prefix}blog/category/${category}`
                : `/${prefix}blog/category/${category}/${i + 1}`,
            component: blogCategoriesTemplate,
            context: {
              category,
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

module.exports = createBlogCategories
