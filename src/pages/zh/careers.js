import '../../styles/pages/careers.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import AroundParticles from '../../components/particles'
import { graphql, Link } from 'gatsby'
import companyCulture from '../../data/zh/career-company-culture'
import { Button } from '@seagreenio/react-bulma'
import pingcaperData from '../../data/zh/pingcaper'

const Careers = ({ data }) => {
  const { careerHeroSVG } = data
  return (
    <Layout>
      <SEO
        title="Careers"
        description="Join us in building a database of the future, made by developers, for developers."
      />
      <article className="PingCAP-Careers  PingCAP-Careers-ZH">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={careerHeroSVG.publicURL} alt="Hyper Growth Hero" />
              <h1 className="title">加入我们</h1>
              <div className="subtitle-under-main-title">
                我们认为优秀的人或多或少有以下共同特质：Quick Learner, Earnest
                Curiosity, Faith in Open Source, Self-driven, Get Things Done.
                如果你符合以上特质，点击下方获取新的工作机会吧！
              </div>
              <Button
                as={Link}
                to="/careers#see-more-positions"
                className="button is-primary is-rounded"
              >
                查看职位
              </Button>
            </div>
          </div>
        </section>

        <section className="section working-env-section">
          <div className="container">
            <h2 className="title">体验纯正的工程师文化</h2>
            <div className="subtitle-under-main-title">
              与行业中最有才华、最积极的人一起工作，除了灵感和生产力，还有最纯正的工程师文化！
            </div>
            <div className="work-env-container">
              {companyCulture.map((w) => (
                <div className="env-item" key={w.title}>
                  <img src={w.icon} alt={w.desc} />
                  <p className="env-title">{w.title}</p>
                  {/* mock data */}
                  <p className="env-desc">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section comments-list-section">
          <div className="container">
            <h2 className="title">听听他们怎么说</h2>
            {pingcaperData.map((pingcaper) => (
              <div className="comment" key={pingcaper.github}>
                <div className={`avatar ${pingcaper.github}-avatar`}></div>
                <div className="comment-text">
                  <p className="comment-title">
                    {pingcaper.position +
                      (pingcaper.location ? ` | ${pingcaper.location}` : '')}
                  </p>
                  <p>{pingcaper.statement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="join-us-section">
          <h2 className="title">赶紧加入我们吧</h2>
          <Button
            as={Link}
            to="/careers"
            className="button is-primary is-rounded"
          >
            立刻申请
            <AroundParticles />
          </Button>
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
