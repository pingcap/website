import React from 'react'
import { Link } from 'gatsby'

const navbarItems = [
  {
    name: 'Product',
    key: 'components.navbar.product',
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
    key: 'components.navbar.caseStudies',
  },
  {
    name: 'Docs',
    href: 'https://docs.pingcap.com/tidb/v4.0',
    outbound: true,
    key: 'components.navbar.docs',
  },
  {
    name: 'Blog',
    href: '/blog',
    key: 'components.navbar.blog',
  },
  {
    name: 'Community',
    href: '/community',
    key: 'components.navbar.community',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
    key: 'components.navbar.contactUs',
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
