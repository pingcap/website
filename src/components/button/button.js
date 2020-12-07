import React from 'react'
import classNames from 'classnames'

import '../../styles/components/button/button.scss'

const Button = ({
  as,
  icon,
  className,
  children,
  size,
  type,
  rounded,
  disabled,
  lowerCase,
  ...rest
}) => {
  const classNameButton = `Button`

  size = size && size.length !== 0 ? size : 'medium'
  type = type || 'primary'

  // if lowerCase === false, convert all text to UpperCase, otherwise use lowerCase
  lowerCase = !!lowerCase
  children = lowerCase ? children : children.toUpperCase()

  const Tag = as
  const props = {
    className: classNames(classNameButton, className, size, type, {
      rounded,
      disabled,
    }),
    ...rest,
  }

  const iconNode = icon ? (
    <div className={`${classNameButton}-icon`}>{icon}</div>
  ) : (
    <></>
  )
  const textNode = <div className={`${classNameButton}-text`}>{children}</div>
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
