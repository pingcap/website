import React from 'react'
import classNames from 'classnames'

import '../styles/components/button.scss'

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
  block,
  ...rest
}) => {
  const classNameButton = `Button`

  size = size && size.length !== 0 ? size : 'medium'
  type = type || 'primary'

  // if lowerCase === false, convert all text to UpperCase, otherwise use lowerCase
  lowerCase = !!lowerCase
  if (typeof children === 'string') {
    children = lowerCase ? children : children.toUpperCase()
  }

  const TagName = as ?? 'button'

  // href is outbound link
  if (rest.href) {
    rest.target = '_blank'
    rest.rel = 'noopener noreferrer'
  }

  const props = {
    className: classNames(classNameButton, className, size, type, {
      rounded,
      disabled,
      block,
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
    <div className={`${classNameButton}-content`}>
      {iconNode} {textNode}
    </div>
  )

  return <TagName {...props}>{childNode}</TagName>
}

export default Button
