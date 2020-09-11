import React from 'react'
import { Link } from 'gatsby'
import { replaceSpaceWithDash } from '../lib/string'
import { isArray } from '../lib/dataType'

const Labels = ({
  className,
  selectedClassName,
  labels,
  currentLabel,
  pathPrefix,
  labelPathMap = {},
}) => {
  if (!isArray(currentLabel)) {
    currentLabel = [currentLabel]
  }

  const labelPathProxy = new Proxy(labelPathMap, {
    get(target, name) {
      return name in target
        ? target[name]
        : `${pathPrefix}/${replaceSpaceWithDash(name)}`
    },
  })

  return (
    <div className={className}>
      {labels.map((label) => {
        return (
          <Link
            key={label}
            className={currentLabel.includes(label) ? selectedClassName : ''}
            to={labelPathProxy[label]}
          >
            {label}
          </Link>
        )
      })}
    </div>
  )
}

export default Labels
