import PropTypes from 'prop-types'
import React from 'react'
import { footerSocials } from '../data/footer'

const Socials = ({ className }) => (
  <>
    {footerSocials.map(social => (
      <div
        key={social.name}
        className={className ? className + ' ' + social.name : social.name}
      />
    ))}
  </>
)

Socials.propTypes = {
  className: PropTypes.string,
}

export default Socials
