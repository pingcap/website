import React from 'react'

import '../styles/components/getStartedWithTiDBCloud.scss'
import StartYourFreeTrialNowButton from '../components/startYourFreeTrialNowButton'

const GetStartedWithTiDBCloud = () => {
  const className = `GetStartedWithTiDBCloud`
  return (
    <section className={`section ${className}`}>
      <div className="container">
        <h2 className="title is-4">Get Started with TiDB Cloud</h2>
        <StartYourFreeTrialNowButton />
      </div>
    </section>
  )
}

export default GetStartedWithTiDBCloud
