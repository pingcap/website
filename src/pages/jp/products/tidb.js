import '../../../styles/pages/products/tidb.scss'

import React from 'react'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import SectionUseCases from '../../../components/sectionUseCases'
import StartTiDBRibbon from '../../../components/startTiDBRibbon'
import { graphql } from 'gatsby'
import { industryIcons } from '../../../data/product-tidb'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'

const TiDB = ({ data }) => {
  const { hyperGrowthHeroSVG, htapArchSVG } = data
  return (
    <Layout>
      <SEO
        title="TiDB "
        description="TiDB is a distributed SQL database platform that features horizontal scalability, strong consistency, and high availability."
      />
      <article className="PingCAP-Product-TiDB">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">
                お客様のビジネスの成長に寄り添うデータベース
              </h1>
              <div className="subtitle-under-main-title">
                データベースのキャパシティがビジネスの成長の妨げになってしまうことがあります。
                TiDBを使用するとITで起きるボトルネックの心配に開放されます。
              </div>
              <img src={hyperGrowthHeroSVG.publicURL} alt="Hyper Growth Hero" />
              <p className="paragraph">
                TiDBは、水平方向のスケーラビリティ、強力な一貫性、および高可用性を備えた分散型SQLデータベースプラットフォームです。
                TiDBの目標は、すべてのオンライントランザクションとリアルタイム分析のワンストップソリューションとして機能し、単一ノード上で同じように簡単にアプリケーションを構築できるようにすることです。
              </p>
            </div>
          </div>
        </section>

        <section className="section HTAP-section">
          <div className="container">
            <h2 className="title section-title">
              Hybrid Transactional and Analytical Processing (HTAP)
            </h2>
            <img src={htapArchSVG.publicURL} alt="HATP Architecture" />
          </div>
        </section>

        <SectionUseCases hasLightBg={true} />

        <section className="section industry-section">
          <div className="container">
            <div className="subtitle-under-main-title industry-title">
              <div>
                TiDBは業界にとらわれないデータベースソリューションとして、多くのセグメントで幅広く採用されています。
              </div>
            </div>
            <div className="columns">
              {industryIcons.map((i) => (
                <div className="column" key={i.desc}>
                  <img src={i.icon} alt={i.desc} />
                  <p>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section comparison-table-section">
          <div className="container">
            <h2 className="title section-title">製品比較</h2>
            <div className="subtitle-under-main-title">
              TiDBと他の分散型SQLデータベースの比較
            </div>
            <div className="table-container">
              <table className="table is-bordered comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Amazon Aurora</th>
                    <th>Google Cloud Spanner</th>
                    <th>YugaByteDB</th>
                    <th>CockroachDB</th>
                    <th>TiDB</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Elastic scalability (Both read and write)</td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Automated failover and high availability</td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Distributed ACID transactions</td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>SQL compatibility and protocol</td>
                    <td>MySQL and PostgreSQL</td>
                    <td>Proprietary</td>
                    <td>PostgreSQL</td>
                    <td>PostgreSQL</td>
                    <td>MySQL</td>
                  </tr>
                  <tr>
                    <td>Open Source License</td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>Apache 2.0</td>
                    <td>BSL and CCL</td>
                    <td>Apache 2.0</td>
                  </tr>
                  <tr>
                    <td>Open Source Contributor Count</td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>100+</td>
                    <td>300+</td>
                    <td>500+</td>
                  </tr>
                  <tr>
                    <td>HTAP</td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section benefit-table-section">
          <div className="container">
            <h2 className="title section-title">TiDBの利点</h2>
            <div className="table-container">
              <table className="table is-bordered benefit-table">
                <thead>
                  <tr>
                    <th>オープンソース</th>
                    <th>SQL</th>
                    <th>スケール</th>
                    <th>スピード</th>
                    <th>シンプル</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>成長し続けるコミュニティ</li>
                        <li>ベンダーロックインなし</li>
                        <li>透明性と信頼性</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>慣れ親しんだMySQLエコシステム</li>
                        <li>強い一貫性</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>
                          大規模な成長のためのスケールアウトリレーショナルデータベース
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>リアルタイムデータの洞察と分析</li>
                        <li>経営判断、市場投入までのスピードを短縮</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>高可用性と自動フェイルオーバー</li>
                        <li>手動シャーディングの煩雑さからの開放</li>
                        <li>
                          データ移動を最小限に抑え、ソフトウェアスタックを簡素化
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <StartTiDBRibbon />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    hyperGrowthHeroSVG: file(
      relativePath: { eq: "products/tidb/hyper-growth-hero.svg" }
    ) {
      publicURL
    }
    htapArchSVG: file(
      relativePath: { eq: "products/tidb/htap-architecture.svg" }
    ) {
      publicURL
    }
  }
`

export default TiDB
