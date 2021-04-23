import '../../styles/pages/careers.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Positions from '../../components/positions'
import { graphql, Link } from 'gatsby'
import { workEnv } from '../../data/career-work-env'
import Button from '../../components/button'

const Careers = ({ data }) => {
  const { careerHeroSVG } = data
  return (
    <Layout>
      <SEO
        title="Careers"
        description="Join us in building a database of the future, made by developers, for developers."
      />
      <article className="PingCAP-Careers">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={careerHeroSVG.publicURL} alt="Hyper Growth Hero" />
              <h1 className="title section-title">
                次世代データベースとそのコミュニティを構築しているチームに参加しませんか？
              </h1>
              <div className="subtitle-under-main-title">
                <p>
                  私達のミッションは開発者が開発者の為に次世代データベースを作り続ける事です。
                  それを実現させるには、好奇心が強く、使命感があり、アクティブで有能な人々を必要としております。
                </p>
                <p>今このウェブサイトを見ているあなたのように！</p>
              </div>
              <Button
                as={Link}
                href="/jp/careers#see-more-positions"
                className="see-open-positions-btn"
              >
                オープンポジションを見る
              </Button>
            </div>
          </div>
        </section>

        <section className="section working-env-section">
          <div className="container">
            <h2 className="title section-title">PingCAPで働く</h2>
            <div className="subtitle-under-main-title">
              PingCAPでは、好奇心が強く、使命感があり、アクティブで有能な人々と働くことが出来ます。インスピレーションと生産性の向上のみならず、私たちは快適で自由な職場環境を提供するために最善を尽くしています。
            </div>
          </div>
          <div className="columns is-multiline">
            {workEnv.map((w) => (
              <div className="column is-4" key={w.desc}>
                <img src={w.icon} alt={w.desc} />
                <p className="card-title">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section open-positions-section"
          id="see-more-positions"
        >
          <div className="container">
            <h2 className="title section-title">Open Positions</h2>
            <Positions locale="jp" />
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    careerHeroSVG: file(relativePath: { eq: "careers/career-hero.svg" }) {
      publicURL
    }
    htapArchPNG: file(
      relativePath: { eq: "products/tidb/htap-architecture.png" }
    ) {
      publicURL
    }
  }
`

export default Careers
