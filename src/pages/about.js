import '../styles/pages/about.scss'

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const About = ({ data }) => {
  const { aboutHeroSVG, timeLineSVG } = data
  return (
    <Layout>
      <SEO title="Download TiDB Community" />
      <article className="PingCAP-About">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={aboutHeroSVG.publicURL} alt="Community Hero" />
            </div>
          </div>
        </section>

        <section className="section intro-section">
          <div className="container">
            <h1 className="title section-title">About PingCAP</h1>
            <p>
              PingCAP started in 2015 when three seasoned infrastructure
              engineers were sick and tired of the way databases were managed,
              scaled, and maintained while working at leading Internet
              companies. Seeing no good solution on the market, they decided to
              build one themselves--the open-source way.
            </p>
            <p>
              With the help of a first-class team and hundreds of contributors
              from around the globe, PingCAP is building an open source
              distributed NewSQL hybrid transactional and analytical processing
              (HTAP) database. Its flagship project, TiDB, is a cloud-native
              distributed SQL layer with MySQL compatibility, and one of the
              most popular open source database projects in the world (don’t
              take our word for it, check it out:
              https://github.com/pingcap/tidb). TiDB’s sister project, TiKV, is
              a cloud-native distributed Key-Value store. It is now a CNCF
              incubating project .
            </p>
            <button className="button is-primary is-rounded">Contact Us</button>
          </div>
        </section>

        <section className="section timeline-section">
          <div className="container">
            <img src={timeLineSVG.publicURL} alt="Timeline" />
          </div>
        </section>

        <section className="section company-culture-section">
          <div className="container">
            <h2 className="title section-title">Company Culture</h2>
            <p>
              Our mission is to build a hybrid transactional and analytical
              processing database with global scalability, so companies can
              count on TiDB as its single unified database solution.
            </p>
            <p>
              So, if you love the following: Open source, open collaboration,
              open communication; Waking up every morning motivated to solve
              big, hairy problems (and have fun doing it!); Working alongside a
              global team of self-starters, curious learners, builders, doers;
            </p>
            <p className="last">We want to hear from you!</p>
            <button className="button is-primary is-rounded">Join Us</button>
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
  }
`

export default About
