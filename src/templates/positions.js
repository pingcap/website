import PositionsComponent from '../components/positionsList'
import React from 'react'
import { graphql } from 'gatsby'

const Positions = ({ data, pageContext }) => (
  <PositionsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix={`/careers/${pageContext.category}`}
  />
)

export const query = graphql`
  query($category: String, $limit: Int!, $skip: Int!, $positionsPath: String) {
    allMdx(
      filter: {
        fileAbsolutePath: { regex: $positionsPath }
        frontmatter: { tags: { in: [$category] } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            summary
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
      filter: { fileAbsolutePath: { regex: $positionsPath } }
    ) {
      group(field: frontmatter___tags) {
        category: fieldValue
      }
    }
  }
`

export default Positions
