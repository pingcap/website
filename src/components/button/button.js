import React from 'react'
import classNames from 'classnames'

import '../../styles/components/button/button.scss'

const Button = ({
  as,
  icon,
  children,
  size,
  type,
  rounded,
  disabled,
  lowerCase,
  ...rest
}) => {
  const className = `Button`

  // if lowerCase === false, convert all text to UpperCase, otherwise use lowerCase
  lowerCase = !!lowerCase
  children = lowerCase ? children : children.toUpperCase()

  const Tag = as
  const props = {
    className: classNames(className, size, type, {
      rounded,
      disabled,
    }),
    ...rest,
  }

  const iconNode = icon ? (
    <div className={`${className}-icon`}>{icon}</div>
  ) : (
    <></>
  )
  const textNode = <div className={`${className}-text`}>{children}</div>
  const childNode = (
    <>
      {iconNode} {textNode}
    </>
  )

  return as ? (
    <Tag {...props}>{childNode}</Tag>
  ) : (
    <button {...props}>{childNode}</button>
  )
}

export default Button
