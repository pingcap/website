const footerColumns = [
  [
    {
      name: 'Product',
      items: [
        {
          name: 'TiDB',
          link: '/products/tidb',
        },
        {
          name: 'TiDB Cloud',
          link: '/products/tidbcloud',
        },
      ],
    },
    {
      name: 'Ecosystem',
      items: [
        {
          name: 'TiKV',
          link: 'https://github.com/tikv/tikv',
          outbound: true,
        },
        {
          name: 'TiSpark',
          link: 'https://github.com/pingcap/tispark',
          outbound: true,
        },
        {
          name: 'Chaos Mesh®',
          link: 'https://github.com/pingcap/chaos-mesh',
          outbound: true,
        },
      ],
    },
  ],

  [
    {
      name: 'Blog',
      items: [
        {
          name: 'Engineering',
          link: '/blog/category/Engineering',
        },
        {
          name: 'Product',
          link: '/blog/category/Product',
        },
        {
          name: 'Community',
          link: '/blog/category/Community',
        },
        {
          name: 'Company',
          link: '/blog/category/Company',
        },
      ],
    },
  ],

  [
    {
      name: 'Resources',
      items: [
        {
          name: 'Case Studies',
          link: '/case-studies',
        },
        {
          name: 'Community',
          link: '/community',
        },
        {
          name: 'Docs',
          link: 'https://docs.pingcap.com/tidb/v4.0',
          outbound: true,
        },
        {
          name: 'GitHub',
          link: 'https://github.com/pingcap',
          outbound: true,
        },
        {
          name: 'TiDB Monthly',
          link: 'https://pingcap.com/weekly/',
          outbound: true,
        },
        {
          name: 'Trust Center',
          link: '/trust',
        },
      ],
    },
  ],

  [
    {
      name: 'Company',
      items: [
        {
          name: 'About',
          link: '/about',
        },
        {
          name: 'News',
          link: '/in-the-news',
        },
        {
          name: 'Careers',
          link: '/careers',
        },
        {
          name: 'Legal',
          link: '/legal',
        },
        {
          name: 'Contact Us',
          link: '/contact-us',
        },
      ],
    },
  ],
]

const footerColumnsZh = [
  [
    {
      name: '产品',
      items: [
        {
          name: 'TiDB',
          link: 'https://docs.pingcap.com/zh/tidb/v4.0',
          outbound: true,
        },
        {
          name: '周边工具',
          link: 'https://docs.pingcap.com/zh/tools',
          outbound: true,
        },
      ],
    },
  ],

  [
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
          link: '/blog',
        },
        {
          name: 'Github',
          link: 'https://github.com/pingcap',
          outbound: true,
        },
      ],
    },
  ],

  [
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
          link: '/case-studies',
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
  ],

  [
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
          link: '/contact-us',
        },
        {
          name: '资源支持',
          link: 'https://docs.pingcap.com/zh/tidb/stable/support',
          outbound: true,
        },
      ],
    },
  ],
  [
    {
      name: '公司',
      items: [
        {
          name: '关于我们',
          link: '/about',
        },
        {
          name: '招贤纳士',
          link: 'https://job.pingcap.com/',
          outbound: true,
        },
        {
          name: '新闻报道',
          link: '/news',
        },
        {
          name: '隐私声明',
          link: '/privacy-policy',
        },
      ],
    },
  ],
]

const footerColumnsJP = [
  [
    {
      name: '製品',
      items: [
        {
          name: 'TiDB',
          link: '/jp/products/tidb',
        },
        {
          name: 'TiDB Cloud',
          link: '/jp/products/tidbcloud',
        },
      ],
    },
    {
      name: 'エコシステム',
      items: [
        {
          name: 'TiKV',
          link: 'https://github.com/tikv/tikv',
          outbound: true,
        },
        {
          name: 'TiSpark',
          link: 'https://github.com/pingcap/tispark',
          outbound: true,
        },
        {
          name: 'Chaos Mesh®',
          link: 'https://github.com/pingcap/chaos-mesh',
          outbound: true,
        },
      ],
    },
  ],

  [
    {
      name: 'ブログ',
      items: [
        {
          name: 'エンジニアリング',
          link: '/blog/category/Engineering',
        },
        {
          name: '製品',
          link: '/blog/category/Product',
        },
        {
          name: 'コミュニティ',
          link: '/blog/category/Community',
        },
        {
          name: '会社',
          link: '/blog/category/Company',
        },
      ],
    },
  ],

  [
    {
      name: 'リソース',
      items: [
        {
          name: 'ケーススタディ',
          link: '/case-studies',
        },
        {
          name: 'コミュニティ',
          link: '/jp/community',
        },
        {
          name: 'ドキュメント',
          link: 'https://docs.pingcap.com/tidb/v4.0',
          outbound: true,
        },
        {
          name: 'GitHub',
          link: 'https://github.com/pingcap',
          outbound: true,
        },
        {
          name: '毎月のアップデート',
          link: 'https://pingcap.com/weekly/',
          outbound: true,
        },
        {
          name: 'トラストセンター',
          link: '/trust',
        },
      ],
    },
  ],

  [
    {
      name: '会社',
      items: [
        {
          name: 'PingCAPについて',
          link: '/jp/about',
        },
        {
          name: 'ニュース',
          link: '/jp/in-the-news',
        },
        {
          name: 'キャリア',
          link: '/jp/careers',
        },
        {
          name: 'Legal',
          link: '/legal',
        },
        {
          name: '問い合わせ',
          link: '/jp/contact-us',
        },
      ],
    },
  ],
]

const footerColumnsMap = {
  zh: footerColumnsZh,
  en: footerColumns,
  jp: footerColumnsJP,
}

export { footerColumns, footerColumnsZh }

export default footerColumnsMap
