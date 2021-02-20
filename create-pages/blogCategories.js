const path = require('path')
const { langPrefixes, replaceSpaceWithDash } = require('./utils')
const langConfig = require('../lang.config.json')
const { queryCategories } = require('../src/lib/graphql/blog')

const createBlogCategories = async ({ graphql, createPage }) => {
  const blogCategoriesTemplate = path.resolve(
    `${__dirname}/../src/templates/blogCategories.js`
  )
  for (const lang in langConfig.languages) {
    const { blogsPath, hasBlogCategories } = langConfig.languages[lang]
    if (!hasBlogCategories) continue

    const result = await queryCategories(graphql, blogsPath)

    const categories = result.data.categories.group
    const blogsPerPage = 6
    categories.forEach((categoryObj) => {
      const category = categoryObj.category
      const categoryPath = replaceSpaceWithDash(category)
      const totalCount = categoryObj.totalCount
      const numPages = Math.ceil(totalCount / blogsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        langPrefixes(lang).forEach((prefix) => {
          createPage({
            path:
              i === 0
                ? `/${prefix}blog/category/${categoryPath}`
                : `/${prefix}blog/category/${categoryPath}/${i + 1}`,
            component: blogCategoriesTemplate,
            context: {
              category,
              limit: blogsPerPage,
              skip: i * blogsPerPage,
              numPages,
              totalCount,
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
