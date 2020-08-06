import { graphql, useStaticQuery } from 'gatsby'
import Link from './IntlLink'
import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search'
import cx from 'classnames'
import { replaceTitle } from '../lib/string'

const BlogSearch = ({ className }) => {
  let { blogs } = useStaticQuery(graphql`
    query {
      blogs: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "markdown-pages/blogs" } }
          frontmatter: { customer: { eq: null } }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  blogs = blogs.edges.map((edge) => edge.node)

  const blogSearchclassName = cx('PingCAP-BlogSearch', className)

  const [withPanel, setWithPanel] = useState(false)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState(null)

  const handleSearchOnChange = (e) => {
    const value = e.target.value

    setSearch(value)

    if (value.length > 3) {
      const results = blogs.filter((blog) =>
        blog.frontmatter.title.toLowerCase().includes(value.toLowerCase())
      )

      setWithPanel(results.length > 0)
      setSearchResults(results.length ? results : null)
    } else {
      setWithPanel(false)
      setSearchResults(null)
    }
  }

  return (
    <section className={blogSearchclassName}>
      <div className="field">
        <div className="control has-icons-left">
          <input
            className={`input${withPanel ? ' with-panel' : ''}`}
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearchOnChange}
          />
          <span className="icon is-small is-left">
            <SearchIcon />
          </span>
        </div>
      </div>
      {searchResults && (
        <div className="panel">
          {searchResults
            .map((blog) => blog.frontmatter.title)
            .map((title) => (
              <Link
                key={title}
                className="panel-block"
                to={`/blog/${replaceTitle(title)}`}
              >
                {title}
              </Link>
            ))}
        </div>
      )}
    </section>
  )
}

export default BlogSearch
