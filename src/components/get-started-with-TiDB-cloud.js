import React from 'react'

import '../styles/components/getStartedWithTiDBCloud.sass'
import StartYourFreeTrialNowButton from '../components/StartYourFreeTrialNowButton'

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
