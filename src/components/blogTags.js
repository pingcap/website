import { Button } from '@seagreenio/react-bulma'
import PropTypes from 'prop-types'
import React from 'react'

const BlogTags = ({ tags }) => (
  <div className="PingCAP-BlogTags">
    {tags.map(tag => (
      <Button key={tag} as="a">
        {tag}
      </Button>
    ))}
  </div>
)

BlogTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default BlogTags
