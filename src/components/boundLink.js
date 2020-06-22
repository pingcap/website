import React from 'react'
import { Link } from 'gatsby'

const BoundLink = ({ to, children, outbound, ...rest }) => {
  return (
    <>
      {outbound ? (
        <a {...rest} href={to} target="_blank">
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
