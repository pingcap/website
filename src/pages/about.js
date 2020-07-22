import '../styles/pages/about.scss'

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import { Button } from '@seagreenio/react-bulma'

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
            <h1 className="title">About PingCAP</h1>
            <p className="paragraph">
              PingCAP started in 2015 when three seasoned infrastructure
              engineers were sick and tired of the way databases were managed,
              scaled, and maintained while working at leading Internet
              companies. Seeing no good solution on the market, they decided to
              build one themselves--the open-source way.
            </p>
            <p className="paragraph">
              With the help of a first-class team and hundreds of contributors
              from around the globe, PingCAP is building an open source
              distributed NewSQL hybrid transactional and analytical processing
              (HTAP) database. Its flagship project, TiDB, is a cloud-native
              distributed SQL layer with MySQL compatibility, and one of the
              most popular open source database projects in the world (don’t
              take our word for it, check it out:
              <a href="https://github.com/pingcap/tidb" target="_blank">
                https://github.com/pingcap/tidb
              </a>
              ). TiDB’s sister project, TiKV, is a cloud-native distributed
              Key-Value store. It is now a CNCF incubating project .
            </p>
            <Button
              as={Link}
              to="/contact-us"
              className="button is-primary is-rounded"
            >
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
                srcset={mobileTimeLineSVG.publicURL}
              ></source>
              <img src={timeLineSVG.publicURL} alt="time line" />
            </picture>
          </div>
        </section>

        <section className="section company-culture-section">
          <div className="container">
            <div className="wrapper">
              <h2 className="title">Company Culture</h2>
              <p className="paragraph">
                Our mission is to build a hybrid transactional and analytical
                processing database with global scalability, so companies can
                count on TiDB as its single unified database solution.
              </p>
              <p className="paragraph">
                So, if you love the following: Open source, open collaboration,
                open communication; Waking up every morning motivated to solve
                big, hairy problems (and have fun doing it!); Working alongside
                a global team of self-starters, curious learners, builders,
                doers;
              </p>
              <p className="last">We want to hear from you!</p>
              <Button
                as={Link}
                to="/careers"
                className="button is-primary is-rounded"
              >
                Join Us
              </Button>
            </div>
            {Array.from({ length: 8 }).map((_, index) => {
              return <div className={`el${index + 1}`} key={index}></div>
            })}
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
