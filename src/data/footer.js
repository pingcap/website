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
  en: footerColumns,
  jp: footerColumnsJP,
}

export { footerColumns }

export default footerColumnsMap
