import { followSocials, shareSocials } from '../data/socials'

import PropTypes from 'prop-types'
import React from 'react'

const Socials = ({ className, type, title }) => {
  const data =
    type === 'follow'
      ? followSocials
      : type === 'share'
      ? shareSocials(window.location.href, title)
      : followSocials

  return (
    <>
      {data.map(social => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          key={social.name}
          className={className ? className + ' ' + social.name : social.name}
          target="_blank"
          rel="noopener noreferrer"
          href={social.href}
        />
      ))}
    </>
  )
}

Socials.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
}

export default Socials
