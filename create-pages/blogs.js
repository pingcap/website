const path = require('path')
const langConfig = require('../languages.json')

const createBlogPagination = async ({ graphql, createPage }) => {
  const blogsTemplate = path.resolve(`${__dirname}/../src/templates/blogs.js`)
  const result = await graphql(`
    query {
      blogs: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "markdown-pages/blogs" } }
          frontmatter: { customer: { eq: null } }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              locale
            }
          }
        }
      }
    }
  `)

  for (const { name: lang } of langConfig.languages) {
    const blogs = result.data.blogs.edges.filter(
      ({ node }) => node.frontmatter.locale == lang
    )
    const blogsPerPage = 6
    const numPages = Math.ceil(blogs.length / blogsPerPage)

    const prefixes =
      lang === langConfig.defaultLang ? [`${lang}/`, ''] : [`${lang}/`]
    prefixes.forEach(prefix => {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/${prefix}blog` : `/${prefix}blog/${i + 1}`,
          component: blogsTemplate,
          context: {
            limit: blogsPerPage,
            skip: i * blogsPerPage,
            numPages,
            currentPage: i + 1,
            language: lang
          }
        })
      })
    })
  }
}

module.exports = createBlogPagination
