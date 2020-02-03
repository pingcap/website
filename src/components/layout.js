import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => {
  return <main>{children}</main>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
