import React from 'react'
import { Link } from 'gatsby'

import PrimaryButton from './primaryButton'

const StartYourFreeTrialNowButton = () => {
  return (
    <PrimaryButton as={Link} to="/products/tidbcloud/trial">
      Start Your Free Trial Now
    </PrimaryButton>
  )
}

export default StartYourFreeTrialNowButton
