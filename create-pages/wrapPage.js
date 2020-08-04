import React from 'react'
import { IntlProvider } from 'react-intl'
import langConfig from '../lang.config.json'

const toPairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]])
const fromPairs = (pairs) => {
  const obj = {}
  for (const [key, value] of pairs) obj[key] = value
  return obj
}
const flatMap = (arr, mapper) =>
  arr.map(mapper).reduce((a, b) => [...a, ...b], [])
const flatten = (messages) => {
  return flatMap(toPairs(messages), ([key, value]) =>
    typeof value === 'object'
      ? flatten(value).map(([childKey, value]) => [`${key}.${childKey}`, value])
      : [[key, value]]
  )
}

export const wrapPageElement = ({ element, props }) => {
  const {
    pageContext: { language = langConfig.defaultLang },
  } = props
  const messages = require(`${__dirname}/../data/i18n/${language}.json`)
  const flattened = fromPairs(flatten(messages))

  console.log(flattened)

  return (
    <IntlProvider locale={language} messages={flattened}>
      {element}
    </IntlProvider>
  )
}
