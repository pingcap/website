const path = require('path')
const langConfig = require('../lang.config.json')

const createBlogCategories = async ({ graphql, createPage }) => {
  const blogCategoriesTemplate = path.resolve(
    `${__dirname}/../src/templates/blogCategories.js`
  )
  for (const lang in langConfig.languages) {
    const { blogsPath } = langConfig.languages[lang]

    const result = await graphql(`
      query {
        categories: allMarkdownRemark(
          filter: {
            fields: { collection: { eq: "${blogsPath}" } }
            frontmatter: { customer: { eq: null } }
          }
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
    categories.forEach((categoryObj) => {
      const category = categoryObj.category
      const totalCount = categoryObj.totalCount
      const numPages = Math.ceil(totalCount / blogsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        const prefixes =
          lang === langConfig.defaultLang ? ['', `${lang}/`] : [`${lang}/`]

        prefixes.forEach((prefix) => {
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

module.exports = createBlogCategories
