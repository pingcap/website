import PositionsComponent from '../components/positionsList'
import React from 'react'
import { graphql } from 'gatsby'

const Positions = ({ data, pageContext }) => (
  <PositionsComponent
    data={data}
    pageContext={pageContext}
    PaginationPathPrefix={`/careers/${pageContext.category}`}
    isTagPage
  />
)

export const query = graphql`
  query($tag: String, $limit: Int!, $skip: Int!, $positionsPath: String) {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: $positionsPath } } }
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
    categories: allMarkdownRemark(
      filter: { fields: { collection: { eq: $positionsPath } } }
    ) {
      group(field: frontmatter___categories) {
        category: fieldValue
      }
    }
  }
`

export default Positions
