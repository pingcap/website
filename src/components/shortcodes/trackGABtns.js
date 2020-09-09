import PropTypes from 'prop-types'
import React from 'react'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { Button } from '@seagreenio/react-bulma'
import '../../styles/components/trackGABtns.scss'

const TrackGABtns = ({ blogName }) => {
  const trackViews = (blog, btnType) => {
    console.log('blog', blog, btnType)
    trackCustomEvent({
      category: btnType,
      action: 'click',
      label: blog,
    })
  }

  return (
    <div className="PingCAP-TrackGABtns">
      <div className="destinations">
        <Button
          as="a"
          className="get-started"
          outlined
          rounded
          onClick={trackViews(`${blogName}, download-tidb-btn-middle`)}
        >
          Download TiDB
        </Button>

        <Button
          as="a"
          to="/contact-us"
          outlined
          rounded
          onClick={trackViews(`${blogName}, subscribe-blog-btn-middle`)}
        >
          Subscribe to Blog
        </Button>
      </div>
    </div>
  )
}

TrackGABtns.propTypes = {
  blogName: PropTypes.node.isRequired,
}

export default TrackGABtns
