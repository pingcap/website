import '../styles/components/positions.scss'

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Link from './IntlLink'

const Positions = () => {
  let { positions } = useStaticQuery(graphql`
    query {
      positions: allPositionsJson {
        edges {
          node {
            link
            location
            title
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
          to={p.link}
          key={p.link}
          className="position column is-4"
          type="outBoundLink"
        >
          <div className="position-wrapper">
            <div className="position-title">{p.title}</div>
            <div className="location">{p.location}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Positions
