import { Button } from '@seagreenio/react-bulma'
import React from 'react'

import '../styles/components/primaryButton.scss'

const PrimaryButton = ({ children, className, ...rest }) => {
  const combinationClassName = `PrimaryButton ${className}`
  return (
    <Button color="primary" className={combinationClassName} rounded {...rest}>
      {children}
    </Button>
  )
}

export default PrimaryButton
