const path = require('path')
const { langPrefixes, replaceSpaceWithDash } = require('./utils')
const langConfig = require('../lang.config.json')
const {
  queryCategories,
  CATE_CASESTUDY,
  CATE_INDUSTRY,
  CATE_COMPANY,
  CATE_TAGS,
} = require('../src/lib/graphql/blog')

const createCaseStudyCategories = async ({ graphql, createPage }) => {
  const resolveCaseStudyCategory = (category, categoryType) => {
    return categoryType === CATE_INDUSTRY
      ? `industry/${category}`
      : categoryType === CATE_COMPANY
      ? `company/${category}`
      : categoryType === CATE_TAGS
      ? `tags/${category}`
      : ``
  }

  const resolveGroupField = (field) => {
    return field === 'frontmatter.customerCategory'
      ? CATE_INDUSTRY
      : field === 'frontmatter.customer'
      ? CATE_COMPANY
      : field === 'frontmatter.tags'
      ? CATE_TAGS
      : null
  }

  const industryTemplate = path.resolve(
    `${__dirname}/../src/templates/caseStudyCategory/industry.js`
  )
  const companyTemplate = path.resolve(
    `${__dirname}/../src/templates/caseStudyCategory/company.js`
  )
  const tagTemplate = path.resolve(
    `${__dirname}/../src/templates/caseStudyCategory/tags.js`
  )
  for (const lang in langConfig.languages) {
    const { blogsPath: caseStudiesPath } = langConfig.languages[lang]

    const industryResult = await queryCategories(
      graphql,
      caseStudiesPath,
      CATE_CASESTUDY
    )
    const companyResult = await queryCategories(
      graphql,
      caseStudiesPath,
      CATE_CASESTUDY,
      CATE_COMPANY
    )
    const tagsResult = await queryCategories(
      graphql,
      caseStudiesPath,
      CATE_CASESTUDY,
      CATE_TAGS
    )

    const categories = industryResult.data.categories.group.concat(
      companyResult.data.categories.group,
      tagsResult.data.categories.group
    )
    const casesPerPage = 6
    categories.forEach((categoryObj) => {
      const category = categoryObj.category
      const resolvedField = resolveGroupField(categoryObj.field)
      const categoryPath = resolveCaseStudyCategory(
        replaceSpaceWithDash(category),
        resolvedField
      )
      const totalCount = categoryObj.totalCount
      const numPages = Math.ceil(totalCount / casesPerPage)
      const [template, categoryType] =
        resolvedField === CATE_INDUSTRY
          ? [industryTemplate, 'industry']
          : resolvedField === CATE_COMPANY
          ? [companyTemplate, 'company']
          : resolvedField === CATE_TAGS
          ? [tagTemplate, 'tag']
          : [null, null]
      Array.from({ length: numPages }).forEach((_, i) => {
        langPrefixes(lang).forEach((prefix) => {
          createPage({
            path:
              i === 0
                ? `/${prefix}case-studies/category/${categoryPath}`
                : `/${prefix}case-studies/category/${categoryPath}/${i + 1}`,
            component: template,
            context: {
              [categoryType]: category,
              limit: casesPerPage,
              skip: i * casesPerPage,
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

module.exports = createCaseStudyCategories
