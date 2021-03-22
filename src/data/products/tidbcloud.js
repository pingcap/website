import aws from '../../../images/products/tidbcloud/aws.svg'
import f1SVG from '../../../images/products/tidbcloud/full-managed.svg'
import f2SVG from '../../../images/products/tidbcloud/elastic-scaling.svg'
import f3SVG from '../../../images/products/tidbcloud/visual-diagnostics-and-monitoring.svg'
import f4SVG from '../../../images/products/tidbcloud/enterprise-grade-security.svg'
import googleCloud from '../../../images/products/tidbcloud/google-cloud.svg'
import r1SVG from '../../../images/products/tidbcloud/multi-cloud-support.svg'
import r2SVG from '../../../images/products/tidbcloud/massive-scale.svg'
import r3SVG from '../../../images/products/tidbcloud/highly-resilient.svg'
import r4SVG from '../../../images/products/tidbcloud/always-up-to-date.svg'

const reasonsData = [
  {
    name: 'Easy to Scale and Manage ',
    desc:
      'Scale and manage your TiDB clusters with a click of a button, through our easy-to-use online management console.',
    placeholder: r1SVG,
  },
  {
    name: 'High Availability and Reliability',
    desc:
      'Ensure business continuity for your mission critical applications with our ACID compliant and Multi-AZ cluster deployment, built upon the RAFT consensus algorithm.',
    placeholder: r2SVG,
  },
  {
    name: 'Truly Scalable Multi-Master',
    desc:
      'Scale without restrictions or worry of bottlenecks, as every TiDB node is read and write capable, allowing you to scale both read and write performance horizontally.',
    placeholder: r3SVG,
  },
  {
    name: 'High Concurrency of High Performance Queries',
    desc:
      'Get high performance for your most demanding applications with our query optimizer, which delivers quick query response times by optimizing performance by scaling horizontally.',
    placeholder: r4SVG,
  },
  {
    name: 'Transactional and Analytical Workloads in a Single Cloud Database',
    desc:
      'Eliminate complex and costly data migration between multiple transactional (OLTP) and analytical (OLAP) workloads by having your data automatically stored and synced together in one database.',
    placeholder: r4SVG,
  },
  {
    name: 'Real Time Operational Analytics',
    desc:
      'Give your applications the ability to run analytical queries on real time data with our HTAP (hybrid transactional-analytical processing) capabilities that can execute analytical queries in real-time.',
    placeholder: r4SVG,
  },
  {
    name: 'MySQL Compatibility',
    desc:
      'Increase productivity and shorten time-to-market for your applications without the need to rewrite your SQL code.',
    placeholder: r4SVG,
  },
]

const featuresData = [
  {
    name: 'Hybrid Transactional and Analytical Processing (HTAP)',
    desc:
      'Run both transactional and analytical workloads in the same cluster, reducing cost and complexity.',
    placeholder: f1SVG,
  },
  {
    name: 'Elastic Scaling',
    desc:
      'Scale in or out your performance and storage simply with a few clicks, while TiDB automatically redistributes your data.',
    placeholder: f2SVG,
    reverse: true,
  },
  {
    name: 'Visual Diagnostics and Monitoring',
    desc:
      'Troubleshoot your database and SQL queries with an intuitive dashboard and diagnostics tools.',
    placeholder: f3SVG,
  },
  {
    name: 'Enterprise Grade Security',
    desc:
      'Secure your data in dedicated networks and machines, with support for encryption both in-flight and at-rest.',
    placeholder: f4SVG,
    reverse: true,
  },
]

const servicesData = [
  {
    name: 'Real HTAP',
    desc: 'Support mission-critical OLTP and real-time OLAP workload.',
  },
  {
    name: 'Multi-cloud Support',
    desc: 'Stay flexible with no cloud vendor lock-in.',
  },
  {
    name: 'Productivity Booster',
    desc: 'Easy deployment and management in just a few clicks.',
  },
  {
    name: 'Highly Secure',
    desc: 'Dedicated networks and machines, with enterprise grade encryption.',
  },
  {
    name: 'Highly Resilient',
    desc: 'Data is replicated across availability zones with backup available.',
  },
]

const faqData = [
  {
    q: '1. What is TiDB Cloud?',
    a:
      '<p>TiDB Cloud makes deploying, managing and maintaining your TiDB clusters even simpler with a fully managed cloud instance that you control through an intuitive dashboard. You’ll be able to easily deploy on Amazon Web Services or Google Cloud to quickly build mission critical applications.</p><p>TiDB Cloud allows developers and DBAs with little or no training to handle once-complex tasks such as infrastructure management and cluster deployment. And by scaling TiDB clusters in or out with a simple click of a button, you’ll no longer waste costly resources because you’ll be able to provision your databases for exactly how much and how long you need them. </p>',
  },
  {
    q: '2. How is TiDB different from other relational databases like MySQL?',
    a:
      '<p> TiDB is a next-generation, distributed relational database. TiDB can scale both processing and storage capacity simply by adding new nodes. This makes infrastructure capacity scaling easier and more flexible compared to traditional relational databases that only scale vertically.</p> <div>TiDB’s advantages over MySQL:</div><ul><li> TiDB has a distributed architecture with flexible and elastic scalability. It automatically takes care of dynamic distribution, allowing you to easily scale your TiDB cluster horizontally with just a few clicks.</li><li>TiDB supports high availability with automatic failover, ensuring business continuity with auto-backups regardless of disk or machine failures.</li> <li> TiDB is a Hybrid Transactional/Analytical Processing (HTAP) database that handles both OLTP and OLAP workloads within one database. </li></ul><p>TiDB supports MySQL protocol and dialect. You can replace  MySQL with TiDB to power your applications <span className="underline">without changing any code</span> .</p>',
  },
  {
    q: '3. What is the relationship between TiDB and TiDB Cloud?',
    a:
      '<p>TiDB Cloud is a fully managed cloud service (database-as-a-service) of TiDB. It has an easy-to-use web-based management portal to let you manage TiDB clusters for mission-critical production environments. </p>',
  },
]

const logos = { aws, googleCloud }

export { reasonsData, featuresData, servicesData, logos, faqData }
