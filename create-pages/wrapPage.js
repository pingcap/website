import React from 'react'
import { IntlProvider } from 'react-intl'

export const wrapPageElement = ({ element, props }) => {
  const { pageContext } = props

  return <IntlProvider locale={pageContext.language}>{element}</IntlProvider>
}
