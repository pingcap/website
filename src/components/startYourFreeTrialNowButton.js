import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import Button from './button'

const StartYourFreeTrialNowButton = () => {
  return (
    <Button as={Link} to="/products/tidbcloud/trial">
      <FormattedMessage id="components.StartYourFreeTrialNow.button" />
    </Button>
  )
}

export default StartYourFreeTrialNowButton
