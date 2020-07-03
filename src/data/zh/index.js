import c3SVG from '../../../images/home/celebrate-your-growth/real-time-analysis.svg'
import c2SVG from '../../../images/home/celebrate-your-growth/scale-out-mysql.svg'
import c1SVG from '../../../images/home/celebrate-your-growth/true-open-source.svg'
import b1SVG from '../../../images/home/benefits/sql-at-scale.svg'
import b3SVG from '../../../images/home/benefits/simplification-and-safety.svg'
import b4SVG from '../../../images/home/benefits/timely-data-means-better-insights.svg'
import b2SVG from '../../../images/home/benefits/elastic-scalability.svg'
import kubernetes from '../../../images/home/logos/kubernetes.svg'
import tiup from '../../../images/home/logos/tiup.svg'
import aws from '../../../images/home/logos/aws.svg'
import googleCloudPlatform from '../../../images/home/logos/google-cloud-platform.png'
import tidbCloud from '../../../images/home/logos/tidb-cloud.svg'

const celebrateYourGrowthData = [
  {
    name: '真正的开源',
    desc:
      'TiDB 由生态系统中的大量开源数据迁移工具提供支持，支持用户自由选择供应商。',
    placeholder: c1SVG,
  },
  {
    name: '自由扩容的关系型数据库',
    desc:
      '专门为在不侵入应用程序的情况下按比例交付 SQL 和解决传统关系数据库的扩展难题而构建。',
    placeholder: c2SVG,
  },
  {
    name: '实时的数据分析',
    desc:
      '真正的开源 HTAP 数据库平台，能够对实时事务数据进行实时位置感知和决策，消除 IT 与业务目标之间的摩擦。',
    placeholder: c3SVG,
  },
]

const benefitsData = [
  {
    name: '水平弹性扩展',
    desc:
      '分布式的 TiDB 可随着你的数据或者流量增长而无缝地水平扩展，只需要通过增加更多的机器来满足业务增长需要，应用层可以不用关心容量和吞吐量等问题。',
    link: '查看如何使用',
    href: '/case-studies',
    placeholder: b1SVG,
    reverse: true,
  },
  {
    name: '分布式事务',
    desc:
      '可以把 TiDB 想象成一个单机的 RDBMS，ACID 事务可以跨节点进行，提供金融级别的数据可靠性保证。',
    link: '查看如何使用',
    href: '/blog/2017-07-11-tidbinternal1',
    placeholder: b2SVG,
  },
  {
    name: '高可用和数据安全',
    desc:
      'TiDB 使用强一致性的 Raft 算法实现多副本存储，提供跨数据中心的数据安全保证，任意一个数据中心出现宕机，自动在短时间内进行主副本切换，无需人工介入，保证服务的持续可用。',
    link: '查看如何使用',
    href: '/case-studies',
    placeholder: b3SVG,
    reverse: true,
  },
  {
    name: '实时海量数据分析查询',
    desc:
      '在大数据量的场景下，TiDB 提供海量数据的聚合和汇总支持，提供自由灵活的大规模实时分析以及查询能力。',
    link: '查看如何使用',
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
