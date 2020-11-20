import React from 'react'
import { Link } from 'gatsby'
import { Button } from '@seagreenio/react-bulma'

import '../styles/components/startYourFreeTrialNowButton.scss'

const StartYourFreeTrialNowButton = () => {
  const className = `StartYourFreeTrialNowButton`
  return (
    <Button
      as={Link}
      color="primary"
      className={className}
      rounded
      to="/products/tidbcloud/trial"
    >
      Start Your Free Trial Now
    </Button>
  )
}

export default StartYourFreeTrialNowButton
