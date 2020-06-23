import BlogsComponent from '../components/blogs'
import React from 'react'
import { graphql } from 'gatsby'

const BlogCategories = ({ data, pageContext }) => (
  <BlogsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix={`/blog/category/${pageContext.category}`}
    isCategoryPage
  />
)

export const query = graphql`
  query($category: String, $limit: Int!, $skip: Int!, $language: String!) {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "markdown-pages/blogs" } }
        frontmatter: {
          categories: { in: [$category] }
          customer: { eq: null }
          locale: { eq: $language }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            author
            tags
            categories
            summary
            image
            locale
          }
        }
      }
    }
  }
`

export default BlogCategories
