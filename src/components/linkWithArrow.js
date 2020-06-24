import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Link } from '@std4453/gatsby-plugin-intl'

const LinkWithArrow = ({ to, linkText, outboundLink }) => {
  return (
    <>
      {outboundLink ? (
        <a
          className="link-with-arrow"
          rel="noopener noreferrer"
          href={to}
          target="_blank"
        >
          <ArrowForwardIcon /> <span>{linkText}</span>
        </a>
      ) : (
        <Link className="link-with-arrow" to={to}>
          <ArrowForwardIcon /> <span>{linkText}</span>
        </Link>
      )}
    </>
  )
}

export default LinkWithArrow
