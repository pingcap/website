/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import { IntlProvider } from 'react-intl'

export const wrapPageElement = ({ element, props }) => {
  const { pageContext } = props

  return <IntlProvider locale={pageContext.language}>{element}</IntlProvider>
}
