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
          }
        }
      }
    }
  `)

  positions = positions.edges.map(edge => edge.node.frontmatter)

  return (
    <div className="PingCAP-Positions">
      <div className="columns">
        {positions.map(p => (
          <div className="column position">
            <Link
              to={`/careers/${replaceTitle(p.title)}`}
              key={p.title}
            >
              <div className="position-wrapper">
                <div className="position-title">{p.title}</div>
                <div className="location">{p.location}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Positions
