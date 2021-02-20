import BlogsComponent from '../components/blogs'
import React from 'react'
import { graphql } from 'gatsby'

const BlogCategories = ({ data, pageContext }) => (
  <BlogsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix={`/blog/category/${pageContext.category.replace(
      /\s+/g,
      '-'
    )}`}
    isCategoryPage
  />
)

export const query = graphql`
  query($category: String, $limit: Int!, $skip: Int!, $blogsPath: String) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { categories: { in: [$category] }, customer: { eq: null } }
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
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
    categories: allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { eq: null } }
      }
    ) {
      group(field: frontmatter___categories) {
        category: fieldValue
        totalCount: totalCount
      }
    }
    tags: allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { eq: null } }
      }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount: totalCount
      }
    }
  }
`

export default BlogCategories
