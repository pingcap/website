import c3SVG from '../../../images/home/celebrate-your-growth/real-time-analysis.svg'
import c2SVG from '../../../images/home/celebrate-your-growth/scale-out-mysql.svg'
import c1SVG from '../../../images/home/celebrate-your-growth/true-open-source.svg'
import b1SVG from '../../../images/home/benefits/horizontal-scale.svg'
import b2SVG from '../../../images/home/benefits/high-availability.svg'
import b3SVG from '../../../images/home/benefits/real-time-hatp.svg'
import b4SVG from '../../../images/home/benefits/cloud-native-distributed-db.svg'
import b5SVG from '../../../images/home/benefits/compatibility.svg'
import kubernetes from '../../../images/home/logos/kubernetes.svg'
import tiup from '../../../images/home/logos/tiup.svg'
import aws from '../../../images/home/logos/aws.svg'
import googleCloudPlatform from '../../../images/home/logos/google-cloud-platform.png'
import database from '../../../images/home/logos/zh/database.svg'

const celebrateYourGrowthData = [
  {
    name: '开源生态',
    desc: 'TiDB 的开源生态系统提供各类开源服务工具，支持用户自由选择供应商。',
    placeholder: c1SVG,
  },
  {
    name: '分布式关系型数据库',
    desc: '实现一键水平伸缩及自由扩展，解决传统关系数据库的扩展难题。',
    placeholder: c2SVG,
  },
  {
    name: '实时的数据分析',
    desc:
      '真正的开源 HTAP 数据库平台，能够对实时事务数据进行实时感知和决策，消除 IT 与业务目标之间的摩擦。',
    placeholder: c3SVG,
  },
]

const benefitsData = [
  {
    name: '一键水平扩容或者缩容',
    desc:
      '得益于 TiDB 存储计算分离的架构的设计，可按需对计算、存储分别进行在线扩容或者缩容，扩容或者缩容过程中对应用运维人员透明。',
    link: '查看如何使用',
    href: '/case-studies',
    placeholder: b1SVG,
    reverse: true,
  },
  {
    name: '金融级高可用',
    desc:
      '数据采用多副本存储，数据副本通过 Multi-Raft 协议同步事务日志，多数派写入成功事务才能提交，确保数据强一致性且少数副本发生故障时不影响数据的可用性。可按需配置副本地理位置、副本数量等策略满足不同容灾级别的要求。',
    link: '查看如何使用',
    href: '/case-studies',
    placeholder: b2SVG,
  },
  {
    name: '实时 HTAP',
    desc:
      '提供行存储引擎 TiKV、列存储引擎 TiFlash 两款存储引擎，TiFlash 通过 Multi-Raft Learner 协议实时从 TiKV 复制数据，确保行存储引擎 TiKV 和列存储引擎 TiFlash 之间的数据强一致。TiKV、TiFlash 可按需部署在不同的机器，解决 HTAP 资源隔离的问题。',
    link: '查看如何使用',
    href: '/case-studies',
    placeholder: b3SVG,
    reverse: true,
  },
  {
    name: '云原生的分布式数据库',
    desc:
      '专为云而设计的分布式数据库，通过 TiDB Operator 可在公有云、私有云、混合云中实现部署工具化、自动化。',
    link: '查看如何使用',
    href: '/case-studies',
    placeholder: b4SVG,
  },
  {
    name: '兼容 MySQL 5.7 协议和 MySQL 生态',
    desc:
      '兼容 MySQL 5.7 协议、MySQL 常用的功能、MySQL 生态，应用无需或者修改少量代码即可从 MySQL 迁移到 TiDB。提供丰富的数据迁移工具帮助应用便捷完成数据迁移。',
    link: '查看如何使用',
    href: '/case-studies',
    placeholder: b5SVG,
    reverse: true,
  },
]

const logos = {
  kubernetes,
  tiup,
  googleCloudPlatform,
  aws,
  database,
}

export { celebrateYourGrowthData, benefitsData, logos }
