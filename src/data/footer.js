const footerColumns = [
  {
    name: 'Open Source Ecosystem',
    items: [
      {
        name: 'TiDB',
        link: '/products/tidb'
      },
      {
        name: 'TiKV',
        link: 'https://github.com/tikv/tikv',
        outbound: true
      },
      {
        name: 'TiSpark',
        link: 'https://github.com/pingcap/tispark',
        outbound: true
      },
      {
        name: 'Chaos Mesh®',
        link: 'https://github.com/pingcap/chaos-mesh',
        outbound: true
      }
    ]
  },

  {
    name: 'Resources',
    items: [
      {
        name: 'Quick Start',
        link:
          'https://docs.pingcap.com/tidb/v4.0/quick-start-with-tidb',
        outbound: true
      },
      {
        name: 'Documentation',
        link: 'https://docs.pingcap.com/tidb/v4.0',
        outbound: true
      },
      {
        name: 'Blog',
        link: '/blog'
      },
      {
        name: 'Community',
        link: '/community'
      },
      {
        name: 'GitHub',
        link: 'https://github.com/pingcap',
        outbound: true
      }
    ]
  },
  {
    name: 'Use Cases',
    items: [
      {
        name: 'Internet',
        link: '/case-studies/Internet',
      },
      {
        name: 'Gaming',
        link: '/case-studies/gaming',
      },
      {
        name: 'Financial services',
        link: '/case-studies/Financial-Services',
        outbound: true
      }
    ]
  },
  {
    name: 'Company',
    items: [
      {
        name: 'About',
        link: '/about'
      },
      {
        name: 'Contact',
        link: '/contact-us'
      },
      {
        name: 'Careers',
        link: '/careers'
      },
      {
        name: 'Cookie Policy',
        link: '/cookie-policy'
      },
      {
        name: 'Privacy Policy',
        link: '/privacy-policy'
      }
    ]
  }
]

export { footerColumns }
