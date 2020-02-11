import { Button } from '@seagreenio/react-bulma'
import PropTypes from 'prop-types'
import React from 'react'
import { navigate } from 'gatsby'

const BlogTags = ({ tags }) => {
  const onClick = tag => () => {
    navigate(`/blog/tag/${tag}`)
  }

  return (
    <div className="PingCAP-BlogTags">
      {tags.map(tag => (
        <Button key={tag} as="a" onClick={onClick(tag)}>
          {tag}
        </Button>
      ))}
    </div>
  )
}

BlogTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default BlogTags
