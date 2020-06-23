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
  query($tag: String, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "markdown-pages/blogs" } }
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
        }
      }
    }
  }
`

export default BlogTags
