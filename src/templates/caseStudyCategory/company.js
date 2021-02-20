import BlogsComponent from '../../components/blogs'
import React from 'react'
import { graphql } from 'gatsby'

const BlogCategories = ({ data, pageContext }) => (
  <BlogsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix={`/case-studies/category/company/${pageContext.company.replace(
      /\s+/g,
      '-'
    )}`}
    isBlog={false}
    isCompanyPage={true}
  />
)

export const query = graphql`
  query($company: String, $limit: Int!, $skip: Int!, $blogsPath: String) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { eq: $company } }
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
            customer
            customerCategory
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
        totalCount: totalCount
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
        totalCount: totalCount
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
        totalCount: totalCount
      }
    }
  }
`

export default BlogCategories
