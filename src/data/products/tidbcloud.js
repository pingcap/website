import aws from '../../../images/products/tidbcloud/aws.svg'
import f1SVG from '../../../images/products/tidbcloud/full-managed.svg'
import f2SVG from '../../../images/products/tidbcloud/elastic-scaling.svg'
import f3SVG from '../../../images/products/tidbcloud/always-up-to-date.svg'
import f4SVG from '../../../images/products/tidbcloud/visual-diagnostics-and-monitoring.svg'
import googleCloud from '../../../images/products/tidbcloud/google-cloud.png'
import r1SVG from '../../../images/products/tidbcloud/operational-analytics.svg'
import r2SVG from '../../../images/products/tidbcloud/multi-cloud-support.svg'
import r3SVG from '../../../images/products/tidbcloud/productivity-booster.svg'
import r4SVG from '../../../images/products/tidbcloud/enterprise-grade-security.svg'
import r5SVG from '../../../images/products/tidbcloud/highly-resilient.svg'
import r6SVG from '../../../images/products/tidbcloud/expert-support.svg'

const reasonsData = [
  {
    name: 'Hybrid Transactional/Analytical Processing (HTAP)',
    desc:
      'Support massive-scale, mission-critical OLTP and real-time analytics workloads right out of the box.',
    placeholder: r1SVG,
  },
  {
    name: 'Multi-Cloud Support',
    desc:
      'Stay flexible with no cloud vendor lock-in. Currently available on AWS and GCP, with more platforms in the works.',
    placeholder: r2SVG,
  },
  {
    name: 'Productivity Booster',
    desc:
      'Boost your productivity with easy deployment, operation, and monitoring on TiDB Cloud in just a few clicks.',
    placeholder: r3SVG,
  },
  {
    name: 'Enterprise Grade Security',
    desc:
      'Secure your data in dedicated networks and machines, with support for encryption both in-flight and at-rest.',
    placeholder: r4SVG,
  },
  {
    name: 'Highly Resilient',
    desc:
      'Data is replicated across multiple availability zones and backed up daily to ensure your service is always on.',
    placeholder: r5SVG,
  },
  {
    name: 'Expert Support',
    desc:
      'We support hundreds of TiDB users, and we bring that same experience to our TiDB Cloud users.',
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
    name: 'Fully Managed',
    desc:
      'TiDB Cloud is fully managed by PingCAP so you don’t need to worry about server provisioning, scaling, failover, etc. Just focus on your applications with faster time-to-market and lower cost.',
    placeholder: f1SVG,
  },
  {
    name: 'Elastic Scaling',
    desc:
      'As your business grows, simply scale out by adding more nodes in just a few clicks. Let TiDB automatically balance data distribution for you.',
    placeholder: f2SVG,
    reverse: true,
  },
  {
    name: 'Always Up-to-date',
    desc:
      'Updates are provided as hot fixes and are applied as needed. Rest assured that you’ll always have the latest features and security updates.',
    placeholder: f3SVG,
  },
  {
    name: 'Visual Diagnostics and Monitoring',
    desc:
      'Online visual diagnostics tools display hot data status, analyze your storage and performance, and locate SQL problems.',
    placeholder: f4SVG,
    reverse: true,
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

const logos = { aws, googleCloud }

export {
  reasonsData,
  reasonsDataJP,
  featuresData,
  featuresDataJP,
  servicesData,
  logos,
}
