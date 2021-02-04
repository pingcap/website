import React from 'react'
import { Link } from 'gatsby'

import Button from './button'

const StartYourFreeTrialNowButton = () => {
  return (
    <Button as={Link} to="/products/tidbcloud/trial">
      Start Free Trial
    </Button>
  )
}

export default StartYourFreeTrialNowButton
