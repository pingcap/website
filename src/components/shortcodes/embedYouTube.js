import PropTypes from 'prop-types'
import React from 'react'
import '../../styles/components/embedYouTube.scss'

const EmbedYouTube = ({ videoTitle, videoSrcURL }) => (
  <div className="PingCAP-Video-Wrapper">
    <iframe
      title={videoTitle}
      src={videoSrcURL}
      frameBorder="0"
      allowFullScreen="allowfullscreen"
      mozallowfullscreen="mozallowfullscreen"
      msallowfullscreen="msallowfullscreen"
      oallowfullscreen="oallowfullscreen"
      webkitallowfullscreen="webkitallowfullscreen"
    ></iframe>
  </div>
)

EmbedYouTube.propTypes = {
  videoTitle: PropTypes.node.isRequired,
  videoSrcURL: PropTypes.node.isRequired,
}

export default EmbedYouTube
