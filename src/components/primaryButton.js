import { Button } from '@seagreenio/react-bulma'
import React from 'react'

import '../styles/components/primaryButton.scss'

const PrimaryButton = ({ children, to, ...rest }) => {
  const className = `PrimaryButton`
  return (
    <Button color="primary" className={className} rounded {...rest}>
      {children}
    </Button>
  )
}

export default PrimaryButton
