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
]

// to hide promotion, uncomment:
// const promotionText = null
const promotionText = (
  <>
    TiDB Cloud (beta) is open for free trial now. Apply&nbsp;
    <a
      href="https://pingcap.com/products/tidbcloud"
      target="_blank"
      rel="noreferrer noopener"
    >
      Here
    </a>
  </>
)

export { navbarItems, promotionText }
