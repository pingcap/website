import aws from '../../../images/products/tidb-cloud/aws.svg'
import f1SVG from '../../../images/products/tidb-cloud/full-managed.svg'
import f2SVG from '../../../images/products/tidb-cloud/elastic-scaling.svg'
import f3SVG from '../../../images/products/tidb-cloud/always-up-to-date.svg'
import f4SVG from '../../../images/products/tidb-cloud/visual-diagnostics-and-monitoring.svg'
import googleCloud from '../../../images/products/tidb-cloud/google-cloud.png'
import r1SVG from '../../../images/products/tidb-cloud/operational-analytics.svg'
import r2SVG from '../../../images/products/tidb-cloud/multi-cloud-support.svg'
import r3SVG from '../../../images/products/tidb-cloud/productivity-booster.svg'
import r4SVG from '../../../images/products/tidb-cloud/enterprise-grade-security.svg'
import r5SVG from '../../../images/products/tidb-cloud/highly-resilient.svg'
import r6SVG from '../../../images/products/tidb-cloud/expert-support.svg'

const reasonsData = [
  {
    name: 'Hybrid Transactional/Analytical Processing (HTAP)',
    desc:
      'Support massive-scale, mission-critical OLTP and real-time analytics workloads right out of the box . (Columnar-based OLAP support available in Q3, 2020)',
    placeholder: r1SVG
  },
  {
    name: 'Multi-Cloud Support',
    desc:
      'Stay flexible with no cloud vendor lock-in. TiDB Cloud is currently  available on AWS and GCP.',
    placeholder: r2SVG
  },
  {
    name: 'Productivity Booster',
    desc:
      'Boost your productivity with easy deployment, operations, and monitoring on TiDB Cloud in just a few clicks.',
    placeholder: r3SVG
  },
  {
    name: 'Enterprise Grade Security',
    desc:
      'Secure your data in dedicated networks and machines, with support for encryption both in flight and at rest.',
    placeholder: r4SVG
  },
  {
    name: 'Highly Resilient',
    desc:
      'Data is replicated across multiple Availability Zones and backed up daily to ensure your service is always on.',
    placeholder: r5SVG
  },
  {
    name: 'Expert Support',
    desc:
      'We support thousands of TiDB users, and we bring that same experience to our TiDB Cloud users.',
    placeholder: r6SVG
  }
]

const featuresData = [
  {
    name: 'Fully Managed',
    desc:
      'TiDB Cloud is fully managed by PingCAP so you don’t need to worry about server provisioning, scaling, failover, etc. Just focus on your applications with faster time-to-market and lower cost.',
    placeholder: f1SVG
  },
  {
    name: 'Elastic Scaling',
    desc:
      'As  your business grows, simply scale out by adding more nodes in just a few clicks. Let TiDB automatically balance data distribution for you.',
    placeholder: f2SVG,
    reverse: true
  },
  {
    name: 'Always up-to-date',
    desc:
      'Updates are provided as hot fixes and are applied as needed. Rest assured that you’ll always have the latest features and security updates.',
    placeholder: f3SVG
  },
  {
    name: 'Visual diagnostics and monitoring',
    desc:
      'Online visual diagnostics tools display hot data status, analyze your storage and performance, and locate SQL problems.',
    placeholder: f4SVG,
    reverse: true
  }
]

const servicesData = [
  {
    name: 'Real HTAP',
    desc: 'Support mission-critical OLTP and real-time OLAP workload.'
  },
  {
    name: 'Multi-cloud Support',
    desc: 'Stay flexible with no cloud vendor lock-in.'
  },
  {
    name: 'Productivity Booster',
    desc: 'Easy deployment and management in just a few clicks.'
  },
  {
    name: 'Highly Secure',
    desc: 'Dedicated networks and machines, with enterprise grade encryption.'
  },
  {
    name: 'Highly Resilient',
    desc: 'Data is replicated across availability zones with backup available.'
  }
]

const logos = { aws, googleCloud }

export { reasonsData, featuresData, servicesData, logos }
