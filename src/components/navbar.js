import { graphql, useStaticQuery } from 'gatsby'
import Link from './IntlLink'
import React, { useEffect, useState, Fragment, useCallback } from 'react'
import ArrowDown from '../../images/case-studies/arrow-down.svg'

import {
  navbarItemsEn,
  navbarItemsZh,
  navbarItemsJP,
  homepagePromotionText,
  cloudPromotionText,
  JapaneseHomepagePromotionText,
} from '../data/navbar'
import { useIntl } from 'react-intl'
import { useLocation } from '@reach/router'

import classNames from 'classnames'
import Button from '../components/button'

function PromotionBanner({
  promotionText,
  closePromotion,
  crossSVGPublicURL,
  hornSVGPublicURL,
}) {
  const classname = `PromotionBanner`
  return (
    <div className={`${classname}`}>
      <div className="container">
        <div className={`${classname}-main`}>
          <div className={`${classname}-main-horn`}>
            <img src={hornSVGPublicURL} alt="horn" />
          </div>
          <div className="text">{promotionText}</div>
        </div>
        <div
          role="button"
          tabIndex={0}
          aria-label="close"
          className={`${classname}-close`}
          onClick={closePromotion}
          onKeyDown={closePromotion}
        >
          <img src={crossSVGPublicURL} alt="close" />
        </div>
      </div>
    </div>
  )
}

const Navbar = ({ showBanner }) => {
  const imageData = useStaticQuery(
    graphql`
      query {
        BrandSVG: file(relativePath: { eq: "pingcap-logo.svg" }) {
          publicURL
        }
        GitHubSVG: file(relativePath: { eq: "github-icon-on-nav.svg" }) {
          publicURL
        }
        CrossSVG: file(relativePath: { eq: "cross.svg" }) {
          publicURL
        }
        HornSVG: file(relativePath: { eq: "horn.svg" }) {
          publicURL
        }
      }
    `
  )

  const intl = useIntl()
  // const navbarItems = intl.locale === 'zh' ? navbarItemsZh : navbarItemsEn
  let navbarItems = {}

  switch (intl.locale) {
    case 'zh':
      navbarItems = navbarItemsZh
      break
    case 'jp':
      navbarItems = navbarItemsJP
      break
    default:
      navbarItems = navbarItemsEn
  }

  const [showBorder, setShowBorder] = useState(false)
  const [burgerActive, setBurgerActive] = useState(false)
  const handleSetBurgerActive = () => setBurgerActive(!burgerActive)

  function toggleDropdown() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      const dropdown = document.querySelector('.navbar-dropdown')
      dropdown.classList.toggle('toggle-drop')
      const title = document.querySelector('.dropdown-title')
      title.classList.toggle('toggle-drop')
    }
  }

  useEffect(() => {
    const scrollListener = () => {
      const winScrollTop = document.documentElement.scrollTop

      setShowBorder(winScrollTop > 0)
    }

    window.addEventListener('scroll', scrollListener)

    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  const [promotionOpen, setPromotionOpen] = useState(showBanner)
  const closePromotion = useCallback(() => setPromotionOpen(false), [])
  const location = useLocation()
  let promotionText = ""
  if (location.pathname === '/') {
    promotionText = homepagePromotionText
  } else if (location.pathname === '/jp/') {
    promotionText = JapaneseHomepagePromotionText
  } else{
    promotionText = cloudPromotionText
  }

  return (
    <nav
      className={classNames('navbar PingCAP-Navbar', {
        'has-border-and-shadow': showBorder,
      })}
      role="navigation"
    >
      {promotionText &&
        promotionOpen &&
        PromotionBanner({
          promotionText,
          closePromotion,
          crossSVGPublicURL: imageData.CrossSVG.publicURL,
          hornSVGPublicURL: imageData.HornSVG.publicURL,
        })}

      <div className="container">
        <div className="navbar-brand">
          <Link
            className="navbar-item with-brand"
            to={intl.locale === 'jp' ? '/jp' : '/'}
          >
            <img
              className="navbar-brand"
              src={imageData.BrandSVG.publicURL}
              alt="brand"
            />
          </Link>

          <button
            className={classNames('navbar-burger', {
              'is-active': burgerActive,
            })}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleSetBurgerActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
          <a
            href="https://github.com/pingcap"
            target="_blank"
            rel="noreferrer"
            aria-label="github icon"
            className="github-icon-mobile"
          />
        </div>
        <div
          className={classNames('navbar-menu', { 'is-active': burgerActive })}
        >
          <div className="navbar-start">
            {navbarItems.navItems.map((item) => (
              <Fragment key={item.name}>
                {item.dropdown ? (
                  <div
                    role="button"
                    tabIndex={0}
                    className={classNames(
                      'navbar-item has-dropdown is-hoverable with-main-section',
                      {
                        'hide-burger': !burgerActive,
                      }
                    )}
                    onClick={toggleDropdown}
                    onKeyDown={toggleDropdown}
                  >
                    <div className="dropdown-title">
                      {item.name}
                      <img src={ArrowDown} alt="arrow-icon" />
                    </div>
                    <div className="navbar-dropdown">
                      {item.dropdown.map((navItem) => (
                        <Link
                          key={navItem.name}
                          to={navItem.href}
                          className="navbar-item "
                          onTouchStart={() => {}}
                        >
                          {navItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    {item.outbound ? (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`navbar-item with-main-section ${
                          item.hideOnPC ? 'hideOnPC' : ''
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`navbar-item with-main-section ${
                          item.hideOnPC ? 'hideOnPC' : ''
                        }`}
                        onTouchStart={() => {}}
                      >
                        {item.name}
                      </Link>
                    )}
                  </>
                )}
              </Fragment>
            ))}

            <a
              href="https://github.com/pingcap"
              target="_blank"
              className="navbar-item with-github-section"
              rel="noreferrer noopener"
            >
              <div className="github-icon"></div>
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item with-get-tidb">
              <Button
                as={Link}
                to={navbarItems.contactUs.href}
                className="get-tidb"
                size="medium"
                type="primary"
              >
                {navbarItems.contactUs.name}
              </Button>
            </div>
            <div className="navbar-item with-get-tidb">
              <Button
                as={Link}
                to={navbarItems.downloadTiDB.href}
                className="get-tidb"
                size="medium"
                type="outline"
              >
                {navbarItems.downloadTiDB.name}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
