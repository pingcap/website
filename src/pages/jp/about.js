import '../../styles/pages/about.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import AroundParticles from '../../components/particles'
import { graphql, Link } from 'gatsby'
import Button from '../../components/button'

const About = ({ data }) => {
  const { aboutHeroSVG, timeLineSVG, mobileTimeLineSVG } = data
  return (
    <Layout>
      <SEO
        title="About PingCAP"
        description="Story about PingCAP, the team behind TiDB"
      />
      <article className="PingCAP-About">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={aboutHeroSVG.publicURL} alt="Community Hero" />
            </div>
          </div>
        </section>

        <section className="section intro-section container">
          <div className="container">
            <h1 className="title">PingCAPについて</h1>
            <p className="paragraph">
              PingCAPは2015年に3人のインフラストラクチャエンジニアによってスタートしました。
              3人はインターネット企業のデータベース管理者として、データベースの管理・スケーリング・運用・保守の業務に莫大な手間と時間に日々頭を抱えておりました。
            </p>
            <p className="paragraph">
              市場に良い解決策がないため、彼らはオープンソースで解決策を構築することに決めました。
            </p>
            <p className="paragraph">
              PingCAPは、一流のチームと世界中のコントリビューターの協力を得て、オープンソースの分散型NewSQLハイブリッドトランザクションおよび分析処理（HTAP）データベースを構築しています。
            </p>
            <p className="paragraph">
              メインに開発したプロジェクトTiDBとは、MySQLと互換性のあるクラウドネイティブの分散SQLレイヤーであり、世界で最も人気のあるオープンソースデータベースプロジェクトの1つです。
            </p>
            <p className="paragraph">
              （詳細はこちらでご確認下さい：
              <a
                href="https://github.com/pingcap/tidb"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/pingcap/tidb
              </a>
              ).
            </p>
            <p className="paragraph">
              TiDBの関連プロジェクトTiKVは、クラウドネイティブの分散型Key-Valueストアです。現在CNCFの卒業プロジェクトになります
            </p>
            <Button as={Link} to="/contact-us" className={'contact-us-btn'}>
              CONTACT US
            </Button>
          </div>
        </section>

        <section className="section timeline-section">
          <div className="container">
            <h1 className="title">History of Development</h1>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={mobileTimeLineSVG.publicURL}
              ></source>
              <img src={timeLineSVG.publicURL} alt="time line" />
            </picture>
          </div>
        </section>

        <section className="section company-culture-section">
          <div className="container">
            <div className="wrapper">
              <h2 className="title">企業文化</h2>
              <p className="paragraph">
                私たちの使命は、グローバルにスケーラビリティを備えたハイブリッドトランザクションおよび分析処理（HTAP）データベースを構築することです。
                これにより、企業はTiDBを単一の統合データベースソリューションとして信頼することが出来ます。
              </p>
              <p className="paragraph">
                オープンソース、オープンコラボレーション、オープンコミュニケーションは私たちが最も大切にしていることです。
              </p>
              <p className="paragraph">
                毎朝目を覚ますと、困難で大きなを課題を解決する為に立ち向かいたくなります。
                （それをたのしんでください！）
              </p>
              <p className="paragraph">
                自発的で好奇心旺盛な方、PingCAPや業界を盛り上げていきたい方、ぜひ私たちグローバルチームと一緒に仕事をしましょう！
              </p>
              <p className="last">私たちにあなたのことを聞かせてください！</p>
              <Button as={Link} to="/careers" className="button">
                参加する
                <AroundParticles />
              </Button>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutHeroSVG: file(relativePath: { eq: "about/about-hero.svg" }) {
      publicURL
    }
    timeLineSVG: file(relativePath: { eq: "about/timeline.svg" }) {
      publicURL
    }
    mobileTimeLineSVG: file(relativePath: { eq: "about/mobile-timeline.svg" }) {
      publicURL
    }
  }
`

export default About
