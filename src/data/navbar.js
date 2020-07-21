import React from 'react'
import { Link } from 'gatsby'

const navbarItems = [
  {
    name: 'Product',
    dropdown: [
      {
        name: 'TiDB',
        href: '/products/tidb',
      },
      {
        name: 'TiDB Cloud',
        href: '/products/tidbcloud',
      },
    ],
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
  },
  {
    name: 'Docs',
    href: 'https://docs.pingcap.com/tidb/v4.0',
    outbound: true,
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Community',
    href: '/community',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
  },
]

// to hide promotion, uncomment:
// const promotionText = null
const promotionText = (
  <>
    TiDB Cloud (beta) is open for free trial now. Apply&nbsp;
    <Link to="/products/tidbcloud">Here</Link>
  </>
)

export { navbarItems, promotionText }
