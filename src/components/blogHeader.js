import CreateIcon from '@material-ui/icons/CreateOutlined'
import DateRangeIcon from '@material-ui/icons/DateRange'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { replaceTitle } from '../lib/string'

const BlogHeader = ({
  frontmatter,
  isTitleLink,
  withIcon = true,
  isCaseStudy = false,
}) => {
  const { title, date, author, customer } = frontmatter
  const category = isCaseStudy
    ? frontmatter.customerCategory
    : frontmatter.categories
    ? frontmatter.categories[0]
    : 'No Category'

  return (
    <section className="PingCAP-BlogHeader">
      {isTitleLink ? (
        <h2 className="title is-4 is-spaced blog-link-title">
          <Link to={`/blog/${replaceTitle(title)}`}>{title}</Link>
        </h2>
      ) : (
        <h2 className="title is-4 is-spaced blog-title">{title}</h2>
      )}
      <div className="subtitle is-7 is-spaced blog-subtitle">
        <span>
          {withIcon && <DateRangeIcon />}
          {date}
        </span>
        <span>
          {withIcon && <CreateIcon />}
          {isCaseStudy ? customer : (author && author[0]) || 'PingCAP'}
        </span>
        <span className={!withIcon ? 'without-icon' : ''}>
          <Link to={`/blog/category/${category}`}>{category}</Link>
        </span>
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
