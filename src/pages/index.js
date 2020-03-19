import '../styles/pages/index.scss'

import { Link, graphql } from 'gatsby'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Button } from '@seagreenio/react-bulma'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'

const caseLogos = [
  'paypay',
  'shopee',
  'bookmyshow',
  'bank-of-beijing',
  'hulu',
  'qiy',
  'netease-games',
  'jd-cloud',
  'mi',
  'webank',
]

const IndexPage = ({ data }) => {
  const { tidbSQLAtScaleSVG, tidbFeatures } = data

  return (
    <Layout>
      <SEO title="Home" />
      <article className="PingCAP-Home">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="titles-and-entry">
                <h1>
                  <img
                    src={tidbSQLAtScaleSVG.publicURL}
                    alt="TiDB | SQL At Scale"
                  />
                </h1>
                <h2 className="subtitle is-5">
                  Open-source distributed SQL database for elastic scale and
                  real-time data analytics
                </h2>
                <div className="buttons">
                  <Button as="a" color="primary" rounded>
                    Get Started
                  </Button>
                  <Button as="a" color="primary" rounded outlined>
                    Ask an Expert
                  </Button>
                </div>
              </div>
              <div className="img-wrapper">
                <img src={tidbFeatures.publicURL} alt="TiDB features" />
              </div>
            </div>
          </div>
        </section>
        <section className="section section-case-studies has-light-background">
          <div className="container">
            <h2 className="title home-title">
              Trusted and verified by web-scale application leaders
            </h2>
            <div className="logos">
              {caseLogos.map(logo => (
                <div key={logo} className={`${logo}-logo`} />
              ))}
            </div>
            <div className="has-text-centered">
              <Link className="link-with-arrow" to="/case-studies">
                <ArrowForwardIcon /> More Case Studies
              </Link>
            </div>
          </div>
        </section>
        <section className="section section-celebrate-your-growth">
          <div className="container">
            <h2 className="title home-title">Celebrate your growth</h2>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    tidbSQLAtScaleSVG: file(
      relativePath: { eq: "home/tidb-sql-at-scale.svg" }
    ) {
      publicURL
    }
    tidbFeatures: file(relativePath: { eq: "home/tidb-features.svg" }) {
      publicURL
    }
  }
`

export default IndexPage
