import Footer from './footer'
import Navbar from './navbar'
import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
