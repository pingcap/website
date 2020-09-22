const CATE_BLOG = 'blog'
const CATE_CASESTUDY = 'case'
const CATE_INDUSTRY = 'industry'
const CATE_COMPANY = 'company'
const CATE_TAGS = 'tags'

exports.CATE_BLOG = CATE_BLOG
exports.CATE_CASESTUDY = CATE_CASESTUDY
exports.CATE_INDUSTRY = CATE_INDUSTRY
exports.CATE_COMPANY = CATE_COMPANY
exports.CATE_TAGS = CATE_TAGS

exports.queryCategories = async (
  graphql,
  blogsPath,
  articleType = CATE_BLOG,
  categoryType = `${articleType === CATE_BLOG ? null : CATE_INDUSTRY}`
) => {
  const isBlog = articleType === CATE_BLOG
  categoryType = isBlog ? null : categoryType
  const isIndustry = categoryType === CATE_INDUSTRY
  const isCompany = categoryType === CATE_COMPANY
  const isTags = categoryType === CATE_TAGS
  const comparator = isBlog ? 'eq' : 'ne'
  const category = isBlog
    ? 'frontmatter___categories'
    : isIndustry
    ? 'frontmatter___customerCategory'
    : isCompany
    ? 'frontmatter___customer'
    : isTags
    ? 'frontmatter___tags'
    : 'frontmatter___title'

  return graphql(`
      query {
        categories: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${blogsPath}" }
            frontmatter: { customer: { ${comparator}: null } }
          }
        ) {
          group(field: ${category}) {
            category: fieldValue
            totalCount
            field
          }
        }
      }
    `)
}

exports.queryAllArticles = async (graphql, blogsPath, articleType) => {
  const comparator = articleType === 'blog' ? 'eq' : 'ne'
  return graphql(`
         query {
        blogs: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${blogsPath}" }
            frontmatter: { customer: { ${comparator}: null } }
          }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
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
}
