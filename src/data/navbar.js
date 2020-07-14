import React from 'react'

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
    name: 'About',
    href: '/about',
  },
  {
    name: 'Github',
    href: 'https://github.com/pingcap',
    outbound: true,
  },
]

// to hide promotion, uncomment:
// const promotionText = null
const promotionText = (
  <>
    TiDB Cloud (beta) is open for free trial now. Apply&nbsp;<a href="">here</a>
  </>
)

export { navbarItems, promotionText }
