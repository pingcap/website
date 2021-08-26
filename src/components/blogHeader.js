import CreateIcon from '@material-ui/icons/CreateOutlined'
import DateRangeIcon from '@material-ui/icons/DateRange'
import Link from './IntlLink'
import PropTypes from 'prop-types'
import React from 'react'
import { replaceTitle, replaceSpaceWithDash } from '../lib/string'

const BlogHeader = ({
  frontmatter,
  filePath,
  isTitleLink,
  withIcon = true,
  isCaseStudy = false,
  hasBlogCategories = true,
  isBodyH1Title = false,
}) => {
  const { title, date, author, customer } = frontmatter
  const category = isCaseStudy
    ? frontmatter.customerCategory
    : frontmatter.categories
    ? frontmatter.categories[0]
    : ''

  return (
    <section className="PingCAP-BlogHeader">
      {isTitleLink ? (
        <h2 className="title is-4 is-spaced blog-link-title">
          <Link
            to={`${isCaseStudy ? '/case-studies/' : '/blog/'}${replaceTitle(
              filePath
            )}`}
          >
            {title}
          </Link>
        </h2>
      ) : (
        <h2
          className={`title is-4 is-spaced blog-title ${
            isBodyH1Title ? 'blog-title-in-body-content' : ''
          }`}
        >
          {title}
        </h2>
      )}
      <div className="subtitle is-7 is-spaced blog-subtitle">
        {date && (
          <span>
            {withIcon && <DateRangeIcon />}
            {date}
          </span>
        )}
        <span>
          {withIcon && <CreateIcon />}
          {isCaseStudy ? customer : (author && author.join(', ')) || 'PingCAP'}
        </span>
        {/* uses an empty <span> so that span:last-child won't select the author <span> */}
        {hasBlogCategories ? (
          <span className={!withIcon ? 'without-icon' : ''}>
            {isCaseStudy ? (
              `${category}`
            ) : (
              <Link to={`/blog/category/${replaceSpaceWithDash(category)}`}>
                {category}
              </Link>
            )}
          </span>
        ) : (
          <span />
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
