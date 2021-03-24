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

const celebrateYourGrowthDataJP = [
  {
    name: (
      <>
        オープンソース（Apache 2）、 <br /> ベンダーロックインなし
      </>
    ),
    desc:
      'TiDBは、エコシステム内に豊富なオープンソースデータ移行ツールをサポートしており、お客様の選ぶ自由な選択肢によってベンダーロックインが回避できます。',
    placeholder: c1SVG,
  },
  {
    name: 'スケールアウトリレーショナルデータベース',
    desc:
      'TiDBは大規模なSQLを提供する為に開発されたデータベースです。 大規模なSQL環境が抱える、アプリケーションのメンテナンスや従来のリレーショナルデータベースのスケーリングの問題を解消します。',
    placeholder: c2SVG,
  },
  {
    name: 'リアルタイム分析',
    desc:
      'HTAPデータベースプラットフォームとして、ライブトランザクションデータのリアルタイムな状況確認と企業の意思決定を同時に可能にし、ITでのボトルネックを排除してビジネスの成功へと導きます。',
    placeholder: c3SVG,
  },
]

const benefitsDataJP = [
  {
    name: '大規模なSQL',
    desc:
      'TiDBはACIDに準拠しており、高い信頼性があります。 お客様が使い慣れたSQLの構文とエコシステムツールを備えたスケールアウトMySQLデータベースとして使用できます。',
    link: 'お客様事例を見る',
    href: '/case-studies',
    placeholder: b1SVG,
    reverse: true,
  },
  {
    name: '高い柔軟性とスケーラビリティ',
    desc:
      'TiDBはデータを自動的にシャーディングするため、手動で行う必要はございません。新しいノードを追加するだけで、ビジネスの成長に合わせて水平方向かつ柔軟に拡張することが出来ます。',
    link: 'データがどのように配布されるかを確認する',
    href: '/blog/2017-07-11-tidbinternal1',
    placeholder: b2SVG,
  },
  {
    name: 'シンプルさと安全性',
    desc:
      'TiDBはETLプロセスを簡素化し、エラーから自動的に回復します。お客様はデータベースインフラストラクチャを心配する時間が減り、ビジネスへ注力する事が出来ます。',
    link: 'お客様事例を見る',
    href: '/case-studies',
    placeholder: b3SVG,
    reverse: true,
  },
  {
    name: 'タイムリーなデータで優れたインサイト',
    desc:
      'TiDBはリアルタイム分析をサポートしています。 OLTPとOLAPの間にある壁を打ち破ることで迅速に意思決定が可能になります。',
    link: 'お客様事例を見る',
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

export {
  celebrateYourGrowthData,
  benefitsData,
  logos,
  celebrateYourGrowthDataJP,
  benefitsDataJP,
}
