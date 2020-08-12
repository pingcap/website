import PositionsComponent from '../components/positionsList'
import React from 'react'
import { graphql } from 'gatsby'

const Positions = ({ data, pageContext }) => (
  <PositionsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix={`/careers/join`}
  />
)

export const query = graphql`
  query($limit: Int!, $skip: Int!, $positionsPath: String) {
    allMdx(
      filter: { fileAbsolutePath: { regex: $positionsPath } }
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
