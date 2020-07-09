const footerColumns = [
  {
    name: 'Open Source Ecosystem',
    key: 'components.footer.openSourceEco',
    items: [
      {
        name: 'TiDB',
        link: '/products/tidb',
        key: 'components.footer.tidb',
      },
      {
        name: 'TiKV',
        link: 'https://github.com/tikv/tikv',
        outbound: true,
        key: 'components.footer.tikv',
      },
      {
        name: 'TiSpark',
        link: 'https://github.com/pingcap/tispark',
        outbound: true,
        key: 'components.footer.tispark',
      },
      {
        name: 'Chaos MeshÂ®',
        link: 'https://github.com/pingcap/chaos-mesh',
        outbound: true,
        key: 'components.footer.chaosMesh',
      },
    ],
  },

  {
    name: 'Resources',
    key: 'components.footer.resources',
    items: [
      {
        name: 'Quick Start',
        link: 'https://docs.pingcap.com/tidb/v4.0/quick-start-with-tidb',
        outbound: true,
        key: 'components.footer.quickStart',
      },
      {
        name: 'Documentation',
        link: 'https://docs.pingcap.com/tidb/v4.0',
        outbound: true,
        key: 'components.footer.documentation',
      },
      {
        name: 'Blog',
        link: '/blog',
        key: 'components.footer.blog',
      },
      {
        name: 'Community',
        link: '/community',
        key: 'components.footer.community',
      },
      {
        name: 'GitHub',
        link: 'https://github.com/pingcap',
        outbound: true,
        key: 'components.footer.github',
      },
    ],
  },
  {
    name: 'Use Cases',
    key: 'components.footer.useCases',
    items: [
      {
        name: 'Internet',
        link: '/case-studies/Internet',
        key: 'components.footer.internet',
      },
      {
        name: 'Gaming',
        link: '/case-studies/Gaming',
        key: 'components.footer.gaming',
      },
      {
        name: 'Financial services',
        link: '/case-studies/Financial-Services',
        key: 'components.footer.financial',
      },
    ],
  },
  {
    name: 'Company',
    key: 'components.footer.company',
    items: [
      {
        name: 'About',
        link: '/about',
        key: 'components.footer.about',
      },
      {
        name: 'Contact',
        link: '/contact-us',
        key: 'components.footer.contactUs',
      },
      {
        name: 'Careers',
        link: '/careers',
        key: 'components.footer.careers',
      },
      {
        name: 'Cookie Policy',
        link: '/cookie-policy',
        key: 'components.footer.cookiePolicy',
      },
      {
        name: 'Privacy Policy',
        link: '/privacy-policy',
        key: 'components.footer.privacyPolicy',
      },
    ],
  },
]

const footerColumnsZh = [
  {
    name: '产品',
    items: [
      {
        name: 'TiDB',
        link: 'https://docs.pingcap.com/zh/tidb/v4.0',
        outbound: true,
      },
      // {
      //   name: 'Cloud',
      //   outbound: true,
      // },
      {
        name: '周边工具',
        link: 'https://docs.pingcap.com/zh/tools',
        outbound: true,
      },
    ],
  },

  {
    name: '资源',
    items: [
      {
        name: '快速上手',
        link: 'https://docs.pingcap.com/zh/tidb/stable/quick-start-with-tidb',
        outbound: true,
      },
      {
        name: '最佳实践',
        link: 'https://docs.pingcap.com/zh/tidb/stable/tidb-best-practices',
        outbound: true,
      },
      {
        name: '常见问题解答',
        link: 'https://docs.pingcap.com/zh/tidb/stable/tidb-faq',
        outbound: true,
      },
      {
        name: '版本发布',
        link: 'https://docs.pingcap.com/zh/tidb/dev/release-notes',
        outbound: true,
      },
      {
        name: '联合解决方案',
        link: 'https://pingcap.com/solutions/intel/',
        outbound: true,
      },
      {
        name: '博客',
        link: '/zh/blog',
      },
      {
        name: 'Github',
        link: 'https://github.com/pingcap',
        outbound: true,
      },
    ],
  },
  {
    name: '学习',
    items: [
      {
        name: '文档',
        link: 'https://docs.pingcap.com/zh/tidb/v4.0/',
        outbound: true,
      },
      {
        name: '案例',
        link: '/zh/case-studies',
      },
      {
        name: 'PingCAP University',
        link: 'https://university.pingcap.com/',
        outbound: true,
      },
      {
        name: 'TiDB in Action',
        link: 'https://book.tidb.io/',
        outbound: true,
      },
      {
        name: '社区活动',
        link: 'https://pingcap.com/community-cn/',
        outbound: true,
      },
    ],
  },
  {
    name: '支持',
    items: [
      {
        name: 'AskTUG 论坛',
        link: 'https://asktug.com/',
        outbound: true,
      },
      {
        name: '联系我们',
        link: 'mailto:',
        outbound: true,
      },
      {
        name: '资源支持',
        link: 'https://github.com/pingcap/docs-cn/blob/master/support.md',
        outbound: true,
      },
    ],
  },
  {
    name: '公司',
    items: [
      {
        name: '关于我们',
        link: '/zh/about',
      },
      {
        name: '招贤纳士',
        link: '/zh/careers',
      },
    ],
  },
]

const footerColumnsMap = {
  zh: footerColumnsZh,
  en: footerColumns,
}

export { footerColumns, footerColumnsZh }

export default footerColumnsMap
