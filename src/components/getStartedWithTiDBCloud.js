import React from 'react'

import '../styles/components/getStartedWithTiDBCloud.scss'
import StartYourFreeTrialNowButton from '../components/startYourFreeTrialNowButton'

const GetStartedWithTiDBCloud = () => {
  const className = `GetStartedWithTiDBCloud`
  return (
    <section className={`section ${className}`}>
      <div className="container columns">
        <div className="text column">
          <p className="main-desc">Are you ready to start your free trial?</p>
          <p className="desc">
            Choose from the free and discounted public preview options
          </p>
        </div>

        <StartYourFreeTrialNowButton className="column" />
      </div>
    </section>
  )
}

export default GetStartedWithTiDBCloud
