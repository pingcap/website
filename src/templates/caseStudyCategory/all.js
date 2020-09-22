import BlogsComponent from '../../components/blogs'
import React from 'react'
import { graphql } from 'gatsby'

const CaseStudies = ({ data, pageContext }) => (
  <BlogsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix="/case-studies/category"
    isBlog={false}
    isIndustryPage={true}
  />
)

export const query = graphql`
  query($limit: Int!, $skip: Int!, $blogsPath: String) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { ne: null } }
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
            customerCategory
            customer
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
    industries: allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { ne: null } }
      }
    ) {
      group(field: frontmatter___customerCategory) {
        industry: fieldValue
      }
    }
    companies: allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { ne: null } }
      }
    ) {
      group(field: frontmatter___customer) {
        company: fieldValue
      }
    }
    tags: allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { ne: null } }
      }
    ) {
      group(field: frontmatter___tags) {
        tag: fieldValue
      }
    }
  }
`

export default CaseStudies
