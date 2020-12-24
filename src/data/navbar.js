import React from 'react'
import Link from '../components/IntlLink'

const navbarItemsEn = {
  navItems: [
    {
      name: 'TiDB',
      href: '/products/tidb',
    },
    {
      name: 'TiDB Cloud',
      href: '/products/tidbcloud',
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
  ],
  contactUs: {
    name: 'CONTACT US',
    href: '/contact-us',
  },
  downloadTiDB: {
    name: 'GET TiDB',
    href: '/download',
  },
}

const navbarItemsZh = {
  navItems: [
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
    {
      name: '关于',
      href: '/about',
    },
  ],
  contactUs: {
    name: '联系我们',
    href: '/contact-us',
  },
  downloadTiDB: {
    name: '下载试用',
    href: '/download',
  },
}

// to hide promotion, uncomment:
// const promotionText = null
const promotionText = (
  <>
    Announcement:{' '}
    <Link
      to="https://support.pingcap.com/hc/en-us/articles/360061072733-SLA-Change-for-the-TiDB-Cloud-Public-Preview"
      type="outBoundLink"
    >
      SLA Change for the TiDB Cloud Public Preview
    </Link>
  </>
)

export { navbarItemsEn, navbarItemsZh, promotionText }
