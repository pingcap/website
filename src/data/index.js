import c3SVG from '../../images/home/celebrate-your-growth/real-time-analysis.svg'
import c2SVG from '../../images/home/celebrate-your-growth/scale-out-mysql.svg'
import c1SVG from '../../images/home/celebrate-your-growth/true-open-source.svg'
import b1SVG from '../../images/home/benefits/sql-at-scale.svg'
import b3SVG from '../../images/home/benefits/simplification-and-safety.svg'
import b4SVG from '../../images/home/benefits/timely-data-means-better-insights.svg'
import b2SVG from '../../images/home/benefits/elastic-scalability.svg'
import kubernetes from '../../images/home/logos/kubernetes.svg'
import ansible from '../../images/home/logos/ansible.svg'
import aws from '../../images/home/logos/aws.svg'
import googleCloudPlatform from '../../images/home/logos/google-cloud-platform.png'
import tidb from '../../images/home/logos/tidb.svg'

const celebrateYourGrowthData = [
  {
    name: 'True open source, no lock-in',
    desc:
      'Powered by a wealth of open source data migration tools in the ecosystem, TiDB gives you the freedom to choose your own vendor and avoid lock-in.',
    placeholder: c1SVG,
  },
  {
    name: 'Scale-out MySQL, no more sharding',
    desc:
      'Purpose-built to solve MySQL scaling challenges without intrusion to your application brought by manual sharding.',
    placeholder: c2SVG,
  },
  {
    name: 'Real-time analysis',
    desc:
      'Real-Time situation awareness and decision making on live transactional data.',
    placeholder: c3SVG,
  },
]

const benefitsData = [
  {
    name: 'SQL at scale',
    desc:
      'TiDB is ACID compliant and strongly consistent. You can use TiDB as a scale-out MySQL database with your familiar SQL syntax and ecosystem tools.',
    link: 'See how others succeed',
    href:
      '/case-studies/TiDB,-the-Key-to-a-Better-Life-for-Meituan-Dianping’s-290-Million-Monthly-Users',
    placeholder: b1SVG,
    reverse: true,
  },
  {
    name: 'Elastic scalability',
    desc:
      'TiDB automatically shards your data so you don’t have do it manually. You can simply add new nodes to scale horizontally and elastically to meet your business growth.',
    link: 'See how your data is sharded',
    href:
      '/blog/Building-a-Large-scale-Distributed-Storage-System-Based-on-Raft',
    placeholder: b2SVG,
  },
  {
    name: 'Simplification and safety',
    desc:
      'TiDB minimizes the ETL process and automatically recover from malfunctions so you can scale and grow your business and stop worrying about database infrastructure.',
    link: 'See how others succeed',
    href:
      '/case-studies/BookMyShow.com:-More-Uptime,-30-Less-Operational-Cost-with-TiDB',
    placeholder: b3SVG,
    reverse: true,
  },
  {
    name: 'Timely data means better insights',
    desc:
      'No more after-the-fact analysis on stale data. Accelerated data to insights, reduced time to market. TiDB breaks the wall between OLTP and OLAP, making your applications adaptive to transient business opportunities.',
    link: 'See how others succeed',
    href:
      '/case-studies/Lesson-Learned-from-Queries-over-1.3-Trillion-Rows-of-Data-Within-Milliseconds-of-Response-Time-at-Zhihu.com',
    placeholder: b4SVG,
  },
]

const logos = {
  kubernetes,
  ansible,
  googleCloudPlatform,
  aws,
  tidb,
}

export { celebrateYourGrowthData, benefitsData, logos }
