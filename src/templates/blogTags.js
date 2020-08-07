import BlogsComponent from '../components/blogs'
import React from 'react'
import { graphql } from 'gatsby'

const BlogTags = ({ data, pageContext }) => (
  <BlogsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix={`/blog/tag/${pageContext.tag}`}
    isTagPage
  />
)

export const query = graphql`
  query($tag: String, $limit: Int!, $skip: Int!, $blogsPath: String) {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: $blogsPath } }
        frontmatter: { tags: { in: [$tag] }, customer: { eq: null } }
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
    categories: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: $blogsPath } }
        frontmatter: { customer: { eq: null } }
      }
    ) {
      group(field: frontmatter___categories) {
        category: fieldValue
      }
    }
    tags: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: $blogsPath } }
        frontmatter: { customer: { eq: null } }
      }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
  }
`

export default BlogTags
