import '../styles/components/pingcapCookieConsent.scss'

import CookieConsent from 'react-cookie-consent'
import React from 'react'

const PingCAPCookieConsent = () => {
  const buttonStyle = {
    color: '#6e77a3',
    fontSize: '13px',
    background: '#fff'
  }

  const cookieBannerStyle = {
    background: '#6e77a3'
  }

  return (
    <section className="PingCAP-Cookie-Consent">
      <div className="container">
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="gatsby-gdpr-google-analytics"
          enableDeclineButton
          declineButtonText="Decline"
          style={cookieBannerStyle}
          buttonStyle={buttonStyle}
          declineButtonClasses="decline-button"
          expires={150}
        >
          This website uses cookies to enhance the user experience.{' '}
          <span style={{ fontSize: '10px' }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
      </div>
    </section>
  )
}

export default PingCAPCookieConsent
