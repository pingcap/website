import { Link, graphql, useStaticQuery } from 'gatsby'

import { Button } from '@seagreenio/react-bulma'
import React from 'react'
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

  return (
    <nav
      className="container navbar is-fixed-top PingCAP-Navbar"
      role="navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item with-brand" to="/">
          <img className="navbar-brand" src={BrandSVG.publicURL} alt="brand" />
        </Link>
      </div>
      <div className="navbar-menu">
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
            <Button as="a" className="free-download" color="primary">
              Free Download
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
