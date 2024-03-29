import React from 'react'

import '../styles/components/hero.scss'

const Hero = React.memo(({ backgroundImage, children }) => {
  const className = `Banner`
  // const classNameMask = `${className}-mask`
  const classNameTitle = `${className}-title`
  return (
    <div
      className={className}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className={classNameTitle}>{children}</h1>
    </div>
  )
})

export default Hero
