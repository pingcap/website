import c3SVG from '../../images/home/celebrate-your-growth/real-time-analysis.svg'
import c2SVG from '../../images/home/celebrate-your-growth/scale-out-mysql.svg'
import c1SVG from '../../images/home/celebrate-your-growth/true-open-source.svg'
import b1SVG from '../../images/home/benefits/sql-at-scale.svg'
import b3SVG from '../../images/home/benefits/simplification-and-safety.svg'
import b4SVG from '../../images/home/benefits/timely-data-means-better-insights.svg'
import b2SVG from '../../images/home/benefits/elastic-scalability.svg'
import kubernetes from '../../images/home/logos/kubernetes.svg'
import tiup from '../../images/home/logos/tiup.svg'
import aws from '../../images/home/logos/aws.svg'
import googleCloudPlatform from '../../images/home/logos/google-cloud-platform.png'
import tidbCloud from '../../images/home/logos/tidb-cloud.svg'

import React from 'react'

const celebrateYourGrowthData = [
  {
    name: (
      <>
        Open-source under Apache 2, <br /> No Lock-in
      </>
    ),
    desc:
      'Supported by a wealth of open-source data migration tools in the ecosystem, TiDB gives you the freedom to choose your own vendor and avoid lock-in.',
    placeholder: c1SVG,
  },
  {
    name: 'Scale-out Relational Database',
    desc:
      'Purposely built to deliver SQL at scale, TiDB eliminates the scaling problems of traditional relational databases without intrusion to your application.',
    placeholder: c2SVG,
  },
  {
    name: 'Real-time Analytics',
    desc:
      'HTAP database platform that enables real-time situation awareness and decision making on live transactional data and eliminates friction between IT and business goals.',
    placeholder: c3SVG,
  },
]

const benefitsData = [
  {
    name: 'SQL at Scale',
    desc:
      'TiDB is ACID-compliant and strongly consistent. You can use TiDB as a scale-out MySQL database with familiar SQL syntaxes and ecosystem tools.',
    link: 'See how others succeed',
    href: '/case-studies',
    placeholder: b1SVG,
    reverse: true,
  },
  {
    name: 'Elastic Scalability',
    desc:
      'TiDB automatically shards your data so you don’t have to do it manually. You can simply add new nodes to scale horizontally and elastically to meet your business growth.',
    link: 'See how your data is distributed',
    href: '/blog/2017-07-11-tidbinternal1',
    placeholder: b2SVG,
  },
  {
    name: 'Simplicity and Safety',
    desc:
      'TiDB simplifies the ETL process and automatically recovers from errors. You can focus on your business and stop worrying about your database infrastructure.',
    link: 'See how others succeed',
    href: '/case-studies',
    placeholder: b3SVG,
    reverse: true,
  },
  {
    name: 'Better Insights with Timely Data',
    desc:
      'TiDB supports real-time analytics. By breaking the wall between OLTP and OLAP, it makes your applications adaptive to transient business opportunities.',
    link: 'See how others succeed',
    href: '/case-studies',
    placeholder: b4SVG,
  },
]

const logos = {
  kubernetes,
  tiup,
  googleCloudPlatform,
  aws,
  tidbCloud,
}

export { celebrateYourGrowthData, benefitsData, logos }
