import '../styles/pages/index.scss'

import { Link, graphql } from 'gatsby'
import React, { useEffect } from 'react'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Button } from '@seagreenio/react-bulma'
import Layout from '../components/layout'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import SEO from '../components/seo'
import Swiper from 'swiper'
import { celebrateYourGrowthData, benefitsData } from '../data'

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

  useEffect(() => {
    new Swiper('.swiper-container', {
      // autoplay: {
      //   delay: 6000,
      // },
      loop: true,
      pagination: {
        el: '.swiper-custom-pagination',
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
        renderBullet: () => `<span class="bullet"></span>`,
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    })
  }, [])

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
                    alt="PingCAP Home: TiDB | SQL At Scale"
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
            <div className="swiper-container">
              <div className="top">
                <NavigateBeforeIcon className="swiper-prev" />
                <div className="swiper-custom-pagination" />
                <NavigateNextIcon className="swiper-next" />
              </div>
              <div className="swiper-wrapper">
                {celebrateYourGrowthData.map((d, i) => (
                  <div key={d.name} className="swiper-slide">
                    <div className="placeholder-wrapper">
                      <img
                        className="placeholder"
                        src={d.placeholder}
                        alt={d.name}
                      />
                    </div>
                    <div className="divider" />
                    <div className="intro">
                      <div className="title is-7 has-pingcap-style-underline">
                        <span className="underline" /> 0 {i + 1}
                      </div>
                      <div className="title is-6 is-spaced">{d.name}</div>
                      <div className="subtitle is-7">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-benefits">
          <div className="container">
            <h2 className="title home-title">
              The benefits of Distributed SQL
            </h2>
            <div className="benefits">
              {benefitsData.map(d => (
                <div
                  key={d.name}
                  className={`benefit${d.reverse ? ' reverse' : ''}`}
                >
                  <div className="placeholder-wrapper">
                    <img
                      className="placeholder"
                      src={d.placeholder}
                      alt={d.name}
                    />
                  </div>
                  <div className="divider" />
                  <div className="intro">
                    <div className="title is-6 is-spaced has-pingcap-style-underline">
                      <span className="underline" /> {d.name}
                    </div>
                    <div className="subtitle is-7">{d.desc}</div>
                    <Link className="link-with-arrow" to={d.href}>
                      <ArrowForwardIcon /> {d.link}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
