import { graphql, useStaticQuery } from 'gatsby'
import Link from './IntlLink'
import React, { useEffect, useState, Fragment, useCallback } from 'react'

import AddIcon from '@material-ui/icons/Add'
import { Button } from '@seagreenio/react-bulma'
import { navbarItemsEn, navbarItemsZh, promotionText } from '../data/navbar'
import { useIntl } from 'react-intl'

import classNames from 'classnames'

function PromotionBanner({ promotionText, closePromotion }) {
  return (
    <div className="promotion">
      <div className="container">
        <div className="left">
          <div className="horn" />
          <div className="text">{promotionText}</div>
        </div>
        <div
          role="button"
          tabIndex={0}
          aria-label="close"
          className="close"
          onClick={closePromotion}
          onKeyDown={closePromotion}
        />
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
      }
    `
  )

  const intl = useIntl()
  const navbarItems = intl.locale === 'zh' ? navbarItemsZh : navbarItemsEn

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

  return (
    <nav
      className={classNames('navbar is-fixed-top PingCAP-Navbar', {
        'has-border-and-shadow': showBorder,
      })}
      role="navigation"
    >
      {promotionText &&
        promotionOpen &&
        PromotionBanner({ promotionText, closePromotion })}

      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item with-brand" to="/">
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
                      <AddIcon />
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
                        className="navbar-item with-main-section"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="navbar-item with-main-section"
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
                color="primary"
                rounded
                outlined
              >
                {navbarItems.contactUs.name}
              </Button>
            </div>
            <div className="navbar-item with-get-tidb">
              <Button
                as={Link}
                to={navbarItems.downloadTiDB.href}
                className="get-tidb"
                color="primary"
                rounded
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
