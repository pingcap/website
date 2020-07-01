import '../styles/components/startTiDBRibbon.scss'

import React from 'react'
import { Button, Buttons } from '@seagreenio/react-bulma'
import { Link } from 'gatsby'

const StartTiDBRibbon = () => {
  return (
    <section className="PingCAP-Start-TiDB-ribbon section section-get-started">
      <div className="container">
        <h2 className="title is-3 has-text-white">
          Ready to get started with TiDB?
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
            CONTACT US
          </Button>
          <Button className="get-tidb" as={Link} to="/download" rounded>
            GET TiDB
          </Button>
        </Buttons>
      </div>
    </section>
  )
}

export default StartTiDBRibbon
