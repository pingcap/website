import React from 'react'
import { Link } from 'gatsby'

const navbarItemsEn = [
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
    href: 'https://docs.pingcap.com/tidb/stable',
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

const navbarItemsZh = [
  {
    name: '文档',
    href: 'https://docs.pingcap.com/zh/tidb/stable',
    outbound: true,
  },
  {
    name: '案例',
    href: '/case-studies',
  },
  {
    name: '社区',
    href: '/community',
  },
  {
    name: '博客',
    href: '/blog',
  },
  {
    name: '问答',
    href: 'https://asktug.com',
    outbound: true,
  },
  {
    name: 'University',
    href: 'https://university.pingcap.com',
    outbound: true,
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

export { navbarItemsEn, navbarItemsZh, promotionText }
