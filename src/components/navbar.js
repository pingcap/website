import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'

import { Button } from '@seagreenio/react-bulma'
import { navbarItems } from '../data/navbar'

const Navbar = () => {
  const { BrandSVG } = useStaticQuery(
    graphql`
      query {
        BrandSVG: file(relativePath: { eq: "pingcap-logo.svg" }) {
          publicURL
        }
      }
    `
  )

  const [showBorder, setShowBorder] = useState(false)
  const [burgerActive, setBurgerActive] = useState(false)
  const handleSetBurgerActive = () => setBurgerActive(!burgerActive)

  useEffect(() => {
    const scrollListener = () => {
      const winScrollTop = document.documentElement.scrollTop

      setShowBorder(winScrollTop > 0)
    }

    window.addEventListener('scroll', scrollListener)

    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <nav
      className={`navbar is-fixed-top PingCAP-Navbar${
        showBorder ? ' has-border-and-shadow' : ''
      }`}
      role="navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item with-brand" to="/">
            <img
              className="navbar-brand"
              src={BrandSVG.publicURL}
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
            {navbarItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className="navbar-item with-main-section"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item with-free-download">
              <Button as="a" className="free-download" color="primary" rounded>
                Free Download
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
