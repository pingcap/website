/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable jsx-a11y/label-has-associated-control */

import '../../../styles/pages/products/tidbCloud.scss'

import { graphql } from 'gatsby'
import Link from '../../../components/IntlLink'
import LinkWithArrow from '../../../components/linkWithArrow'
import React, { useState } from 'react'
import {
  featuresData,
  reasonsData,
  faqData,
} from '../../../data/products/tidbcloud'

import Button from '../../../components/button'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import GetStartedWithTiDBCloud from '../../../components/getStartedWithTiDBCloud'
import StartYourFreeTrialNowButton from '../../../components/startYourFreeTrialNowButton'

const TiDBCloudPage = ({ data }) => {
  const { TiDBCloudLogoPNG } = data
  const [activeItem, setActiveItem] = useState(-1)

  const btnClick = (idx) => {
    if (idx === activeItem) {
      setActiveItem(-1)
    } else {
      setActiveItem(idx)
    }
  }

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
                  <StartYourFreeTrialNowButton />
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

        <section className="section section-dev-tier">
          <div className="container">
            <h2 className="title section-title">
              Introducing the TiDB Cloud Developer Tier
            </h2>
            <div className="dev-tier">
              <p>
                The Developer Tier offers a one-year free subscription to TiDB
                Cloud. Build and test applications without having to worry about
                any of the behind-the-scenes database management!
              </p>
              <ul className="items">
                <li>
                  <i className="dot"></i>
                  <span>1 year free trial</span>
                </li>
                <li>
                  <i className="dot"></i>
                  <span>10 GB of OLTP storage</span>
                </li>
                <li>
                  <i className="dot"></i>
                  <span>10 GB of OLAP storage</span>
                </li>
                <li>
                  <i className="dot"></i>
                  <span>Unlimited number of users</span>
                </li>
              </ul>
              <div className="learn-more">
                <Button
                  as={Link}
                  to="https://en.pingcap.com/blog/tidb-cloud-introduces-developer-tier"
                  className="primary"
                >
                  Learn More
                </Button>
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
                Get started with options that fit your needs.
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

        <section className="section section-faq">
          <div className="container">
            <h2 className="title section-title">FAQ</h2>
            <div className="faq-list content">
              {faqData.map((item, idx) => (
                <div className="faq" key={idx}>
                  {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                  <div
                    className={`question ${
                      idx === activeItem ? 'checked' : ''
                    }`}
                    onClick={() => btnClick(idx)}
                    onKeyDown={() => btnClick(idx)}
                  >
                    {item.q}
                    <span></span>
                  </div>
                  <div
                    className={`answer ${
                      idx === activeItem ? 'show-answer' : ''
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: item.a,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="has-text-centered">
              <LinkWithArrow
                to="/products/tidbcloud/faqs"
                linkText="VIEW MORE"
                outboundLink={false}
              />
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
