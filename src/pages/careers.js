import '../styles/pages/careers.scss'

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Positions from '../components/positions'
import { graphql, Link } from 'gatsby'
import { workEnv } from '../data/career-work-env'

const Careers = ({ data }) => {
  const { careerHeroSVG } = data
  return (
    <Layout>
      <SEO title="Careers" />
      <article className="PingCAP-Careers">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={careerHeroSVG.publicURL} alt="Hyper Growth Hero" />
              <h1 className="title section-title">
                Join the team that is building the database of the future
              </h1>
              <h2 className="section-subtitle">
                Our mission is to build a database of the future, made by
                developers, for developers. It’s an ambitious mission, and we
                can’t do it without curious, self-driven, and capable
                people...like you!
              </h2>
              <Link to="/careers#see-more-positions">
                <button className="button is-primary is-rounded">
                  See Open Positions
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="section working-env-section">
          <div className="container">
            <h2 className="title section-title">Working at PingCAP</h2>
            <h2 className="section-subtitle">
              At PingCAP, you find yourself working with the most talented, and
              motivated people in the industry. Apart from inspirations and
              productivity, we do our best to provide you with a comfortable and
              free working environment.
            </h2>
          </div>
          <div className="columns is-multiline">
            {workEnv.map(w => (
              <div className="column is-4" key={w.desc}>
                <img src={w.icon} alt={w.desc} />
                <p>{w.desc}</p>
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
            <Positions />
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
