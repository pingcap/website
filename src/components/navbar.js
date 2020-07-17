import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState, Fragment, useCallback } from 'react'

import { Button } from '@seagreenio/react-bulma'
import { navbarItems, promotionText } from '../data/navbar'

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

  const [showBorder, setShowBorder] = useState(false)
  const [burgerActive, setBurgerActive] = useState(false)
  const handleSetBurgerActive = () => setBurgerActive(!burgerActive)

  function toggleDropdown() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      const dropdown = document.querySelector('.navbar-dropdown')
      dropdown.classList.toggle('toggle-drop')
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
  const closePromotion = useCallback(() => setPromotionOpen(false))

  return (
    <nav
      className={`navbar is-fixed-top PingCAP-Navbar${
        showBorder ? ' has-border-and-shadow' : ''
      }`}
      role="navigation"
    >
      {promotionText && promotionOpen && (
        <div className="promotion">
          <div className="container">
            <div className="horn" />
            {promotionText}
            <div className="blank" />
            <div className="close" onClick={closePromotion} />
          </div>
        </div>
      )}

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
            className={`navbar-burger${burgerActive ? ' is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleSetBurgerActive}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div className={`navbar-menu${burgerActive ? ' is-active' : ''}`}>
          <div className="navbar-start">
            {navbarItems.map((item) => (
              <Fragment key={item.name}>
                {item.dropdown ? (
                  <div
                    role="navigation"
                    className={`navbar-item has-dropdown is-hoverable with-main-section ${
                      burgerActive ? '' : 'hide-burger'
                    }"`}
                    onClick={toggleDropdown}
                    onKeyDown={toggleDropdown}
                  >
                    {item.name}
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
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/pingcap"
              target="_blank"
              className="navbar-item with-github-section"
            >
              <div className="github-icon"></div>
            </a>
            <div className="navbar-item with-get-tidb">
              <Button
                as={Link}
                to="/download"
                className="get-tidb"
                color="primary"
                rounded
              >
                GET TiDB
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
