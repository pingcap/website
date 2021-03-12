/* eslint-disable jsx-a11y/no-onchange */

import '../../../styles/pages/products/tidbCloud.scss'

import { graphql } from 'gatsby'
import Link from '../../../components/IntlLink'
import LinkWithArrow from '../../../components/linkWithArrow'
import React from 'react'
import { featuresData, reasonsData } from '../../../data/products/tidbcloud'

import Button from '../../../components/button'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import GetStartedWithTiDBCloud from '../../../components/getStartedWithTiDBCloud'
import StartYourFreeTrialNowButton from '../../../components/startYourFreeTrialNowButton'

const TiDBCloudPage = ({ data }) => {
  const { TiDBCloudLogoPNG } = data

  return (
    <Layout NavbarProps={{ showBanner: true }}>
      <SEO
        title="TiDB Cloud "
        description="Fully Managed TiDB service. TiDB Cloud lets you focus on your applications, not the complexities of your database."
      />
      <main className="PingCAP-TiDBCloud">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="titles-and-entry">
                <h1>
                  <img
                    src={TiDBCloudLogoPNG.publicURL}
                    className="logo"
                    alt="TiDB Cloud"
                  />
                </h1>
                <h2 className="title is-4">Fully-managed TiDB Service</h2>
                <p className="paragraph">
                  Get the massive scale and resiliency of TiDB databases in a
                  fully managed service. TiDB Cloud is now in Public Preview and
                  open to all developers.{' '}
                  <Link to="/products/tidbcloud/public-preview-terms">
                    Special terms and conditions will apply
                  </Link>
                  .
                </p>
                <div className="start-trial-button">
                  <StartYourFreeTrialNowButton btnText="START FOR FREE" />
                </div>
                <p className="paragraph sign-in">
                  Already have an account?{' '}
                  <a
                    className="link-with-underline"
                    href="https://tidbcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign in
                  </a>
                </p>
              </div>
              <div className="image-wrapper">
                <iframe
                  id="video"
                  title="TiDB Cloud in 3-min"
                  src="https://www.youtube.com/embed/x9YQ-9APYC0"
                  frameBorder="0"
                  allowFullScreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-why-tidb-cloud has-light-background">
          <div className="container">
            <h2 className="title section-title">Why TiDB Cloud</h2>
            <div className="reasons">
              {reasonsData.map((d) => (
                <div key={d.name} className="reason">
                  <div className="placeholder-wrapper">
                    <img
                      className="placeholder"
                      src={d.placeholder}
                      alt={d.name}
                    />
                  </div>
                  <div className="intro">
                    <h3 className="title column-title is-spaced">{d.name}</h3>
                    <p className="paragraph">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-features">
          <div className="container">
            <h2 className="title section-title">Key Features</h2>
            <div className="features">
              {featuresData.map((d) => (
                <div
                  key={d.name}
                  className={`feature${d.reverse ? ' reverse' : ''}`}
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
                    <h3 className="title column-title has-text-left is-spaced">
                      {d.name}
                    </h3>
                    <p className="paragraph">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-pricing">
          <div className="container">
            <h2 className="title section-title">Pricing</h2>
            <div className="field">
              <p className="paragraph">
                TiDB Cloud provides different clusters d grow your business and
                stop worrying about database infrastructure.
              </p>
              <Button
                as={Link}
                to="/products/tidbcloud/pricing/"
                className="primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* <section className="section section-faq has-light-background">
          <div className="container">
            <h2 className="title section-title">FAQ</h2>
            <div className="faqs">
              <input type="radio" name="accordion" id="q1" />
              <section className="faq">
                <label className="question" htmlFor="q1">
                  1. What is TiDB Cloud? <span></span>
                </label>
                <label className="answer-close" htmlFor="acc-close"></label>
                <div className="answer">
                  <p>
                    TiDB Cloud makes deploying, managing and maintaining your
                    TiDB clusters even simpler with a fully managed cloud
                    instance that you control through an intuitive dashboard.
                    You’ll be able to easily deploy on Amazon Web Services or
                    Google Cloud to quickly build mission critical applications.
                  </p>
                  <p>
                    TiDB Cloud allows developers and DBAs with little or no
                    training to handle once-complex tasks such as infrastructure
                    management and cluster deployment. And by scaling TiDB
                    clusters in or out with a simple click of a button, you’ll
                    no longer waste costly resources because you’ll be able to
                    provision your databases for exactly how much and how long
                    you need them.
                  </p>
                </div>
              </section>
              <input type="radio" name="accordion" id="q2" />
              <section className="faq">
                <label className="question" htmlFor="q2">
                  2. How is TiDB different from other relational databases like
                  MySQL? <span></span>
                </label>
                <label className="answer-close" htmlFor="acc-close"></label>
                <div className="answer content">
                  <p>
                    TiDB is a next-generation, distributed relational database.
                    TiDB can scale both processing and storage capacity simply
                    by adding new nodes. This makes infrastructure capacity
                    scaling easier and more flexible compared to traditional
                    relational databases that only scale vertically.
                  </p>
                  <div>TiDB’s advantages over MySQL:</div>
                  <ul>
                    <li>
                      TiDB has a distributed architecture with flexible and
                      elastic scalability. It automatically takes care of
                      dynamic distribution, allowing you to easily scale your
                      TiDB cluster horizontally with just a few clicks.
                    </li>
                    <li>
                      TiDB supports high availability with automatic failover,
                      ensuring business continuity with auto-backups regardless
                      of disk or machine failures.
                    </li>
                    <li>
                      TiDB is a Hybrid Transactional/Analytical Processing
                      (HTAP) database that handles both OLTP and OLAP workloads
                      within one database.
                    </li>
                  </ul>
                  <p>
                    TiDB supports MySQL protocol and dialect. You can replace
                    MySQL with TiDB to power your applications{' '}
                    <span className="underline">without changing any code</span>
                    .
                  </p>
                </div>
              </section>
              <input type="radio" name="accordion" id="q3" />
              <section className="faq">
                <label className="question" htmlFor="q3">
                  3. What is the relationship between TiDB and TiDB Cloud?{' '}
                  <span></span>
                </label>
                <label className="answer-close" htmlFor="acc-close"></label>
                <div className="answer">
                  TiDB Cloud is a fully managed cloud service
                  (database-as-a-service) of TiDB. It has an easy-to-use
                  web-based management portal to let you manage TiDB clusters
                  for mission-critical production environments.
                </div>
              </section>

              <input type="radio" name="accordion" id="acc-close" />
            </div>
            <p className="view-more">
              <LinkWithArrow
                to="/products/tidbcloud/faq"
                linkText="View More"
                outboundLink={false}
              />
            </p>
          </div>
        </section> */}

        <section className="section section-faq has-light-background">
          <div className="container">
            <div className="faqs">
              <div className="tab">
                <input type="checkbox" id="chck1" />
                <label className="tab-label" for="chck1">
                  1. What is TiDB Cloud? <span></span>
                </label>
                <div className="tab-content">
                  <p>
                    TiDB Cloud makes deploying, managing and maintaining your
                    TiDB clusters even simpler with a fully managed cloud
                    instance that you control through an intuitive dashboard.
                    You’ll be able to easily deploy on Amazon Web Services or
                    Google Cloud to quickly build mission critical applications.
                  </p>
                  <p>
                    TiDB Cloud allows developers and DBAs with little or no
                    training to handle once-complex tasks such as infrastructure
                    management and cluster deployment. And by scaling TiDB
                    clusters in or out with a simple click of a button, you’ll
                    no longer waste costly resources because you’ll be able to
                    provision your databases for exactly how much and how long
                    you need them.
                  </p>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck2" />
                <label className="tab-label" for="chck2">
                  2. How is TiDB different from other relational databases like
                  MySQL?<span></span>
                </label>
                <div className="tab-content content">
                  <p>
                    TiDB is a next-generation, distributed relational database.
                    TiDB can scale both processing and storage capacity simply
                    by adding new nodes. This makes infrastructure capacity
                    scaling easier and more flexible compared to traditional
                    relational databases that only scale vertically.
                  </p>
                  <div>TiDB’s advantages over MySQL:</div>
                  <ul>
                    <li>
                      TiDB has a distributed architecture with flexible and
                      elastic scalability. It automatically takes care of
                      dynamic distribution, allowing you to easily scale your
                      TiDB cluster horizontally with just a few clicks.
                    </li>
                    <li>
                      TiDB supports high availability with automatic failover,
                      ensuring business continuity with auto-backups regardless
                      of disk or machine failures.
                    </li>
                    <li>
                      TiDB is a Hybrid Transactional/Analytical Processing
                      (HTAP) database that handles both OLTP and OLAP workloads
                      within one database.
                    </li>
                  </ul>
                  <p>
                    TiDB supports MySQL protocol and dialect. You can replace
                    MySQL with TiDB to power your applications{' '}
                    <span className="underline">without changing any code</span>
                    .
                  </p>
                </div>
              </div>
              <div className="tab">
                <input type="checkbox" id="chck3" />
                <label className="tab-label" for="chck3">
                  3. What is the relationship between TiDB and TiDB Cloud?
                  <span></span>
                </label>
                <div className="tab-content">
                  <p>
                    TiDB Cloud is a fully managed cloud service
                    (database-as-a-service) of TiDB. It has an easy-to-use
                    web-based management portal to let you manage TiDB clusters
                    for mission-critical production environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GetStartedWithTiDBCloud />
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    TiDBCloudLogoPNG: file(
      relativePath: { eq: "products/tidbcloud/tidb-cloud-logo.png" }
    ) {
      publicURL
    }
  }
`

export default TiDBCloudPage
