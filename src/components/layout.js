import Footer from './footer'
import Navbar from './navbar'
import PropTypes from 'prop-types'
import React from 'react'
import PingCAPCookieConsent from './pingcapCookieConsent'
import { useIntl } from 'react-intl'

const Layout = ({ children, NavbarProps = {} }) => {
  const intl = useIntl()
  return (
    <>
      <Navbar {...NavbarProps} />
      <main>{children}</main>
      <Footer />
      {intl.locale === 'en' && <PingCAPCookieConsent />}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
