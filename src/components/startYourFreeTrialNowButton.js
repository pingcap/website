import React from 'react'
import { Link } from 'gatsby'

import Button from './button'

const StartYourFreeTrialNowButton = ({ btnText }) => {
  return (
    <Button as={Link} target="_blank" to="https://tidbcloud.com/signup">
      {btnText}
    </Button>
  )
}

export default StartYourFreeTrialNowButton
