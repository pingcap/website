import { Link, graphql, useStaticQuery } from 'gatsby'
import { footerColumns, footerSocials } from '../data/footer'

import React from 'react'

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

  return (
    <footer className="footer PingCAP-Footer">
      <div className="container">
        <div className="columns">
          {footerColumns.map(column => (
            <div key={column.name} className="column">
              <div className="title is-7">{column.name}</div>
              <ul className="items">
                {column.items.map(item => (
                  <li key={item.name}>
                    <Link to="/">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="column with-socials">
            <img
              className="footer-logo"
              src={FooterLogoSVG.publicURL}
              alt="footer-logo"
            />
            <div className="columns is-multiline socials">
              {footerSocials.map(social => (
                <div
                  key={social.name}
                  className={`column is-4 ${social.name}`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="annotations">
          <div className="lang">English</div>
          <div className="copyright">
            ©{new Date().getFullYear()} PingCAP. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
