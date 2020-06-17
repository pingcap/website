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
        link: 'https://github.com/tikv/tikv'
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
          'https://pingcap.com/docs/dev/deploy-test-cluster-using-docker-compose/',
        outbound: true
      },
      {
        name: 'Best Practices',
        link: 'https://pingcap.com/blog/2017-07-24-tidbbestpractice/',
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
        link: 'https://pingcap.com/case-studies/Internet',
        outbound: true
      },
      {
        name: 'Gaming',
        link: 'https://pingcap.com/case-studies/gaming',
        outbound: true
      },
      {
        name: 'Financial services',
        link: 'https://pingcap.com/case-studies/Financial-Services',
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
        name: 'Privacy Policy',
        link: '/privacy-policy'
      }
    ]
  }
]

export { footerColumns }
