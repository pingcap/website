import React from 'react'
import Link from './IntlLink'

const BoundLink = ({ to, children, outbound, ...rest }) => {
  return (
    <>
      {outbound ? (
        <a {...rest} href={to} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      ) : (
        <Link {...rest} to={to}>
          {children}
        </Link>
      )}
    </>
  )
}

export default BoundLink
