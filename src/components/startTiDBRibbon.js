import '../styles/components/startTiDBRibbon.scss'

import React from 'react'
import { Button, Buttons } from '@seagreenio/react-bulma'
import Link from './IntlLink'
import { FormattedMessage } from 'react-intl'

const StartTiDBRibbon = () => {
  return (
    <section className="PingCAP-Start-TiDB-ribbon section section-get-started">
      <div className="container">
        <h2 className="title is-3 has-text-white">
          <FormattedMessage id="components.StartTiDBRibbon.ready" />
        </h2>
        <Buttons>
          <Button
            className="contact-us"
            as={Link}
            to="/contact-us"
            color="primary"
            rounded
            inverted
            outlined
          >
            <FormattedMessage id="components.StartTiDBRibbon.contactUs" />
          </Button>
          <Button className="get-tidb" as={Link} to="/download" rounded>
            <FormattedMessage id="components.StartTiDBRibbon.getTiDB" />
          </Button>
        </Buttons>
      </div>
    </section>
  )
}

export default StartTiDBRibbon
