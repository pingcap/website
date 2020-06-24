import '../styles/components/positions.scss'

import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link, useIntl } from '@std4453/gatsby-plugin-intl'
import { replaceTitle } from '../lib/string'

const Positions = () => {
  let { positions } = useStaticQuery(graphql`
    query {
      positions: allMarkdownRemark(
        filter: { fields: { collection: { glob: "markdown-pages/careers/*" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              location
            }
            fields {
              collection
            }
          }
        }
      }
    }
  `)

  const intl = useIntl()

  positions = positions.edges
    .map(edge => edge.node)
    .filter(
      node => node.fields.collection === `markdown-pages/careers/${intl.locale}`
    )
    .map(node => node.frontmatter)

  return (
    <div className="PingCAP-Positions columns">
      {positions.map(p => (
        <Link
          to={`/careers/${replaceTitle(p.title)}`}
          key={p.title}
          className="position column"
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
