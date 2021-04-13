import React from 'react'
import { Link } from 'gatsby'
import { FormattedMessage } from 'react-intl'
import Button from './button'

const StartYourFreeTrialNowButton = ({ btnText }) => {
  return (
    <Button as={Link} target="_blank" to="https://tidbcloud.com/signup">
      <FormattedMessage id="components.StartYourFreeTrialNow.button" />
    </Button>
  )
}

export default StartYourFreeTrialNowButton
