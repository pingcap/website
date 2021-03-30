import '../styles/components/startTiDBRibbon.scss'

import React from 'react'
import { Button, Buttons } from '@seagreenio/react-bulma'
import Link from './IntlLink'
import { FormattedMessage, useIntl } from 'react-intl'

const StartTiDBRibbon = () => {
  const intl = useIntl()
  const lang = intl.locale === 'en' ? '' : intl.locale + '/'

  return (
    <section className="PingCAP-Start-TiDB-ribbon section section-get-started">
      <div className="container">
        <div className="column-placeholder" />
        <h2 className="title is-4 has-text-white">
          <FormattedMessage id="components.StartTiDBRibbon.ready" />
        </h2>
        <div className="column-grow" />
        <Buttons>
          <Button
            className="contact-us"
            as={Link}
            to={`/${lang}contact-us`}
            color="primary"
            inverted
            outlined
          >
            <FormattedMessage id="components.StartTiDBRibbon.contactUs" />
          </Button>
          <Button className="get-tidb" as={Link} to={`/${lang}download`}>
            <FormattedMessage id="components.StartTiDBRibbon.getTiDB" />
          </Button>
        </Buttons>
        <div className="column-placeholder" />
      </div>
    </section>
  )
}

export default StartTiDBRibbon
