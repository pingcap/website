import React from 'react'

import { Link } from 'gatsby'
import { Button } from '@seagreenio/react-bulma'

import '../styles/components/get-started-with-TiDB-cloud.sass'

const GetStartedWithTiDBCloud = React.memo(() => {
  const className = `GetStartedWithTiDBCloud`
  const classNameButton = `${className}-button`
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <h2 className="title is-4">Get Started with TiDB Cloud</h2>
        <Button
          as={Link}
          color="primary"
          className={classNameButton}
          rounded
          to="/products/tidbcloud/trial"
        >
          Start Your Free Trial Now
        </Button>
      </div>
    </section>
  )
})

export default GetStartedWithTiDBCloud
