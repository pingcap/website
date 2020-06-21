import Footer from './footer'
import Navbar from './navbar'
import PropTypes from 'prop-types'
import React from 'react'
import PingcCAPCookieConsent from './pingcapCookieConsent'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
    <PingcCAPCookieConsent />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
