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
    <div className="PingCAP-Positions columns">
      {positions.map(p => (
        <Link to={`/careers/${replaceTitle(p.title)}`} key={p.title} className="position column">
          <div className="position-wrapper">
            <div className="position-title">{p.title}</div>
            <div className="location">{p.location}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Positions
