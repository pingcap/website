import '../../styles/pages/careers.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Positions from '../../components/positions'
import Particles from '../../components/particles'
import { graphql, Link } from 'gatsby'
import { workEnv } from '../../data/career-work-env'
import { Button } from '@seagreenio/react-bulma'
import pingcaperData from '../../data/zh/pingcaper'

const Careers = ({ data }) => {
  const { careerHeroSVG, rightArrowSVG } = data
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
              <h1 className="title section-title">
                Join the team that is building the database of the future
              </h1>
              <div className="subtitle-under-main-title">
                Our mission is to build a database of the future, made by
                developers, for developers. It’s an ambitious mission, and we
                can’t do it without curious, self-driven, and capable
                people...like you!
              </div>
              <Button
                as={Link}
                to="/careers#see-more-positions"
                className="button is-primary is-rounded"
              >
                See Open Positions
              </Button>
            </div>
          </div>
        </section>

        <section className="section working-env-section">
          <div className="container">
            <h2 className="title section-title">Working at PingCAP</h2>
            <div className="subtitle-under-main-title">
              At PingCAP, you find yourself working with the most talented, and
              motivated people in the industry. Apart from inspirations and
              productivity, we do our best to provide you with a comfortable and
              free working environment.
            </div>
            <div className="grid-container">
              {workEnv.map((w) => (
                <div className="grid-item" key={w.desc}>
                  <img src={w.icon} alt={w.desc} />
                  <p className="env-title">{w.desc}</p>
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
                  <p>{`${pingcaper.position} | ${pingcaper.location}`}</p>
                  <p>{pingcaper.statement}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="join-us-section">
          <Particles />
          <h2 className="title">赶紧加入我们吧</h2>
          <Button
            as={Link}
            to="/careers"
            className="button is-primary is-rounded"
          >
            立刻申请
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
