import Footer from './footer'
import Navbar from './navbar'
import PropTypes from 'prop-types'
import React from 'react'
import PingCAPCookieConsent from './pingcapCookieConsent'

const Layout = ({ children, NavbarProps = {}, showCookieConsent = true }) => (
  <>
    <Navbar {...NavbarProps} />
    <main>{children}</main>
    <Footer />
    {showCookieConsent && <PingCAPCookieConsent />}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
