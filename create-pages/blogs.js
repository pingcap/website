const path = require('path')

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

  const blogs = result.data.blogs.edges
  const blogsPerPage = 6
  const numPages = Math.ceil(blogs.length / blogsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogsTemplate,
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

module.exports = createBlogPagination
