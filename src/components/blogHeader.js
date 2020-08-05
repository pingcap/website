import CreateIcon from '@material-ui/icons/CreateOutlined'
import DateRangeIcon from '@material-ui/icons/DateRange'
import Link from './IntlLink'
import PropTypes from 'prop-types'
import React from 'react'
import { replaceTitle } from '../lib/string'

const BlogHeader = ({
  frontmatter,
  filePath,
  isTitleLink,
  withIcon = true,
  isCaseStudy = false,
  hasBlogCategories = true,
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
          <Link to={`/blog/${replaceTitle(filePath)}`}>{title}</Link>
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
          {isCaseStudy ? customer : (author && author.join(', ')) || 'PingCAP'}
        </span>
        {hasBlogCategories && (
          <span className={!withIcon ? 'without-icon' : ''}>
            {isCaseStudy ? (
              `${category}`
            ) : (
              <Link to={`/blog/category/${category}`}>{category}</Link>
            )}
          </span>
        )}
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
