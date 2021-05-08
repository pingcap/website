import aws from '../../../images/products/tidbcloud/aws.png'
import f1SVG from '../../../images/products/tidbcloud/htap.svg'
import f2SVG from '../../../images/products/tidbcloud/visual-diagnostics-and-monitoring.svg'
import f3SVG from '../../../images/products/tidbcloud/enterprise-grade-security.svg'
import f4SVG from '../../../images/products/tidbcloud/mysql-compatible.svg'
import f5SVG from '../../../images/products/tidbcloud/open-souce-community.svg'
import googleCloud from '../../../images/products/tidbcloud/google-cloud.svg'
import r1SVG from '../../../images/products/tidbcloud/more-control-over-scaling.svg'
import r2SVG from '../../../images/products/tidbcloud/high-availability-reliability.svg'
import r3SVG from '../../../images/products/tidbcloud/scalable-multi-master.svg'
import r4SVG from '../../../images/products/tidbcloud/high-concurrency.svg'
import r5SVG from '../../../images/products/tidbcloud/transactional-analytical-workloads.svg'
import r6SVG from '../../../images/products/tidbcloud/real-time-operational-analytics.svg'

const reasonsData = [
  {
    name: 'More Control Over Scaling',
    desc:
      'Scale the performance or storage separately to best suit your business needs',
    placeholder: r1SVG,
  },
  {
    name: 'High Availability and Reliability',
    desc:
      'Ensure business continuity for your mission critical applications with our ACID-compliant cluster deployment',
    placeholder: r2SVG,
  },
  {
    name: 'Scalable Multi-Master',
    desc:
      'No more bottlenecks - scale without restrictions with TiDB’s read and write capability on every node',
    placeholder: r3SVG,
  },
  {
    name: 'High Concurrency',
    desc:
      'Have thousands of users query your data at the same time without losing performance',
    placeholder: r4SVG,
  },
  {
    name: 'Transactional and Analytical Workloads in a Single Cloud Database',
    desc:
      'Eliminate complex data migration between transactional and analytical workloads by storing your data in a single database',
    placeholder: r5SVG,
  },
  {
    name: 'Real Time Operational Analytics',
    desc:
      'Run real-time analytical queries with our hybrid transactional-analytical processing (HTAP) capabilities',
    placeholder: r6SVG,
  },
]

const reasonsDataJP = [
  {
    name: 'ハイブリッドトランザクション/分析処理（HTAP）',
    desc:
      '大規模でミッションクリティカルなOLTPおよびリアルタイム分析（HTAP）ワークロードをサポートします。',
    placeholder: r1SVG,
  },
  {
    name: 'マルチクラウドのサポート',
    desc:
      'クラウドベンダーのロックインなしで柔軟性を維持します。現在AWSとGCPで利用可能であり、さらに多くのプラットフォームで開発中です。',
    placeholder: r2SVG,
  },
  {
    name: '生産性の向上',
    desc:
      '数回クリックするだけで、TiDB Cloudを簡単に導入、運用、監視できる為、生産性が大幅に向上します。',
    placeholder: r3SVG,
  },
  {
    name: 'エンタープライズグレードのセキュリティ',
    desc:
      '稼働中と静止中の両方の暗号化をサポートして、専用のネットワークとマシンでデータを保護します。',
    placeholder: r4SVG,
  },
  {
    name: '高い柔軟性',
    desc:
      'データは複数のアベイラビリティーゾーンに複製され、サービスが常に稼働するように毎日バックアップされます。',
    placeholder: r5SVG,
  },
  {
    name: 'エキスパートサポート',
    desc:
      '私たちは多くのTiDBユーザーをサポートしており、同じエクスペリエンスをTiDB Cloudユーザーに提供しています。',

    placeholder: r6SVG,
  },
]

const featuresData = [
  {
    name: 'Hybrid Transactional and Analytical Processing (HTAP)',
    desc:
      'Run both transactional and analytical workloads in the same cluster, reducing cost and complexity',
    placeholder: f1SVG,
  },
  {
    name: 'Visual Diagnostics and Monitoring',
    desc:
      'Troubleshoot your database and SQL queries with built-in diagnostics tools',
    placeholder: f2SVG,
    reverse: true,
  },
  {
    name: 'Enterprise Grade Security',
    desc:
      'Secure your data in dedicated networks and machines, with support for encryption both in-flight and at-rest',
    placeholder: f3SVG,
  },
  {
    name: 'MySQL Compatible',
    desc:
      'Increase productivity and shorten time-to-market for your applications without the need to rewrite your SQL code',
    placeholder: f4SVG,
    reverse: true,
  },
  {
    name: 'Open Source Community',
    desc:
      'TiDB, the engine behind TiDB Cloud, has been open source since day one with a growing community of 400+ contributors',
    placeholder: f5SVG,
  },
]

const featuresDataJP = [
  {
    name: 'フルマネージド',
    desc:
      'TiDB CloudはPingCAPによってフルマネージドされている為、サーバーのプロビジョニング、スケーリング、フェイルオーバーなどについての心配は必要ございません。市場投入までの時間を短縮し、コストを削減して、アプリケーションに集中する事が出来ます。',
    placeholder: f1SVG,
  },
  {
    name: '柔軟性のあるスケーリング',
    desc:
      'ビジネスの成長に合わせて、数回クリックするだけでノードを追加・スケールアウトできます。 TiDBにデータ分散のバランスを自動的に任せましょう。',
    placeholder: f2SVG,
    reverse: true,
  },
  {
    name: '常に最新バージョン',
    desc:
      'アップデートはHotFixとして提供され、必要に応じて適用されます。常に最新の機能とセキュリティアップデートを行っているため、安心して使用することが出来ます。',
    placeholder: f3SVG,
  },
  {
    name: '優れたGUIとモニタリング',
    desc:
      'オンラインの視覚的診断ツールは、ホットデータのステータスを表示し、ストレージとパフォーマンスの分析を行い、SQLの問題を特定します。',
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
      '<p>TiDB Cloud makes deploying, managing and maintaining your TiDB clusters even simpler with a fully managed cloud instance that you control through an intuitive console. You’ll be able to easily deploy on Amazon Web Services or Google Cloud to quickly build mission critical applications. </p> <p>TiDB Cloud allows developers and DBAs with little or no training to handle once-complex tasks such as infrastructure management and cluster deployment with ease, to focus on your applications, not the complexities of your database. And by scaling TiDB clusters in or out with a simple click of a button, you’ll no longer waste costly resources because you’ll be able to provision your databases for exactly how much and how long you need them. </p>',
  },
  {
    q: '2. How is TiDB different from other relational databases like MySQL?',
    a:
      '<p> TiDB is a next-generation, distributed relational database. TiDB can scale both computing and storage capacity simply by adding new nodes. This makes infrastructure capacity scaling easier and more flexible compared to traditional relational databases that only scale vertically.</p> <div>TiDB’s advantages over MySQL:</div><ul><li>TiDB has a distributed architecture with flexible and elastic scalability. It automatically takes care of dynamic distribution, allowing you to easily scale your TiDB cluster horizontally with just a few clicks. </li><li>TiDB supports high availability with automatic failover, ensuring business continuity with auto-backups regardless of disk or machine failures. </li> <li> TiDB is a Hybrid Transactional/Analytical Processing (HTAP) database that handles both OLTP and OLAP workloads within one database. </li></ul><p>TiDB supports the MySQL protocol and dialect. You can replace MySQL with TiDB to power your applications <span class="underline">without changing any code in most cases</span> .</p>',
  },
  {
    q: '3. What is the relationship between TiDB and TiDB Cloud? ',
    a:
      '<p>TiDB is an open-source database and is the best option for organizations who want to run TiDB on-premises or in their own data centers.</p><p>TiDB Cloud is a fully managed cloud service (Database-as-a-Service) of TiDB. It has an easy-to-use web-based management console to let you manage TiDB clusters for mission-critical production environments. </p>',
  },
]

const logos = { aws, googleCloud }

export {
  reasonsData,
  reasonsDataJP,
  featuresData,
  featuresDataJP,
  servicesData,
  logos,
  faqData,
}
