import '../styles/components/positions.scss'

import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { replaceTitle } from '../lib/string'

const Positions = () => {
  let { positions } = useStaticQuery(graphql`
    query {
      positions: allMarkdownRemark(
        filter: { fields: { collection: { eq: "markdown-pages/careers" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              location
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

  positions = positions.edges.map((edge) => edge.node)

  return (
    <div className="PingCAP-Positions columns is-multiline">
      {positions.map((p) => (
        <Link
          to={`/careers/${replaceTitle(p.parent.relativePath)}`}
          key={p.frontmatter.title}
          className="position column is-4"
        >
          <div className="position-wrapper">
            <div className="position-title">{p.frontmatter.title}</div>
            <div className="location">{p.frontmatter.location}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Positions
