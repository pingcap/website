import Create from '@material-ui/icons/CreateOutlined'
import DateRange from '@material-ui/icons/DateRange'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const BlogHeader = ({ frontmatter, isTitleLink }) => {
  const { title, date, author } = frontmatter
  const category = frontmatter.categories
    ? frontmatter.categories[0]
    : 'No Category'

  return (
    <section className="PingCAP-BlogHeader">
      {isTitleLink ? (
        <Link
          className="title is-4 is-spaced blog-title"
          to={`/blog/${title
            .replace(/[?.,:%]/g, '')
            .split(' ')
            .join('-')}`}
        >
          {title}
        </Link>
      ) : (
        <h4 className="title is-4 is-spaced blog-title">{title}</h4>
      )}
      <div className="subtitle is-7 is-spaced blog-subtitle">
        <span>
          <DateRange />
          {date}
        </span>
        <span>
          <Create />
          {(author && author[0]) || 'PingCAP'}
        </span>
        <span>{category}</span>
      </div>
    </section>
  )
}

BlogHeader.propTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.array,
  }),
  isTitleLink: PropTypes.bool,
}

export default BlogHeader
