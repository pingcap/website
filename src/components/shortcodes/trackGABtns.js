import PropTypes from 'prop-types'
import React from 'react'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { Button } from '@seagreenio/react-bulma'
import Link from '../IntlLink'
import '../../styles/components/trackGABtns.scss'

const TrackGABtns = ({ blogName }) => {
  const trackViews = (blog, btnType) => {
    trackCustomEvent({
      category: btnType,
      action: 'click',
      label: blog,
    })
  }

  return (
    <div className="PingCAP-TrackGABtns">
      <div className="trackable-btns">
        <Button
          as={Link}
          to="/download"
          color="primary"
          outlined
          rounded
          onClick={trackViews(`${blogName}`, 'download-tidb-btn-middle')}
        >
          Download TiDB
        </Button>

        <Button
          as="a"
          href="https://share.hsforms.com/1e2W03wLJQQKPd1d9rCbj_Q2npzm"
          target="_blank"
          color="primary"
          outlined
          rounded
          onClick={trackViews(`${blogName}`, 'subscribe-blog-btn-middle')}
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
