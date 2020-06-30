import { graphql, useStaticQuery, Link } from 'gatsby'

import AddIcon from '@material-ui/icons/Add'
import LanguageIcon from '@material-ui/icons/Language'
import React, { useState } from 'react'
import Socials from './socials'
import { footerColumns } from '../data/footer'
import BoundLink from './boundLink'
import langConfig from '../../lang.config.json'
import { useIntl } from 'react-intl'

const Footer = () => {
  const { FooterLogoSVG } = useStaticQuery(
    graphql`
      query {
        FooterLogoSVG: file(relativePath: { eq: "pingcap-logo.svg" }) {
          publicURL
        }
      }
    `
  )

  const handleSpreadItems = (e) => {
    const screenWidth = window.screen.width
    if (screenWidth > 768) {
      return
    }

    const title = e.currentTarget
    const spread = title.children[0]
    title.tabIndex = title.tabIndex === 0 ? 1 : 0
    spread.classList.toggle('clicked')
    title.nextSibling.classList.toggle('displayed')
  }

  const intl = useIntl()

  const Lang = ({ align }) => {
    const [dropdownActive, setDropdownActive] = useState('')

    const handleMenuOpen = () => {
      if (dropdownActive) {
        setDropdownActive('')
      } else {
        setDropdownActive(' is-active')
      }
    }

    return (
      <div className={`dropdown is-${align} is-up lang${dropdownActive}`}>
        <div
          role="button"
          tabIndex={0}
          className="dropdown-trigger"
          onClick={handleMenuOpen}
          onKeyDown={handleMenuOpen}
        >
          <LanguageIcon /> Language
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {Object.keys(langConfig.languages).map((lang) => (
              <Link
                key={lang}
                className="dropdown-item"
                to={window.location.pathname.replace(
                  new RegExp(
                    `(/(${Object.keys(langConfig.languages).join('|')}))?`
                  ),
                  `/${lang}`
                )}
              >
                {langConfig.languages[lang].langName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <footer className="footer PingCAP-Footer">
      <div className="container">
        <div className="columns">
          {footerColumns.map((column) => (
            <div key={column.name} className="column">
              <div
                role="button"
                tabIndex={0}
                className="title is-7"
                onClick={handleSpreadItems}
                onKeyDown={handleSpreadItems}
              >
                {column.name}
                <span className="spread">
                  <AddIcon />
                </span>
              </div>
              <ul className="items">
                {column.items.map((item) => (
                  <li key={item.name}>
                    <BoundLink to={item.link} outbound={item.outbound}>
                      {item.name}
                    </BoundLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="column with-socials">
            <img
              className="footer-logo"
              src={FooterLogoSVG.publicURL}
              alt="footer logo"
            />
            <div className="columns is-multiline socials-desktop">
              <Socials className="column is-4" type="follow" />
            </div>
          </div>
        </div>

        <div className="annotations annotations-desktop">
          <div className="copyright">
            ©{new Date().getFullYear()} PingCAP. All Rights Reserved.
          </div>
          <Lang align="right" />
        </div>
        <div className="annotations annotations-mobile">
          <Lang align="left" />
          <div className="copyright">
            ©{new Date().getFullYear()} PingCAP. All Rights Reserved.
          </div>
        </div>

        <div className="socials-mobile">
          <Socials type="follow" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
