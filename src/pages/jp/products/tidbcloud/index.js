/* eslint-disable jsx-a11y/no-onchange */

import '../../../../styles/pages/products/tidbCloud.scss'

import { graphql } from 'gatsby'
import React from 'react'
import {
  featuresDataJP,
  reasonsDataJP,
} from '../../../../data/products/tidbcloud'

import Layout from '../../../../components/layout'
import SEO from '../../../../components/seo'
import GetStartedWithTiDBCloud from '../../../../components/getStartedWithTiDBCloud'
import StartYourFreeTrialNowButton from '../../../../components/startYourFreeTrialNowButton'
import { PricingSection } from '../../../../components/pricing'

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
                <h2 className="title is-4">フルマネージドTiDBサービス</h2>
                <p className="paragraph">
                  TiDBの優れた機能をすべてクラウド上で使用することができます。お客様はデータベースの複雑さを気にすることなく、アプリケーションに集中することが出来ます。
                </p>
                <div className="start-trial-button">
                  <StartYourFreeTrialNowButton />
                </div>
                <p className="paragraph">
                  すでにアカウントをお持ちですか？{' '}
                  <a
                    className="link-with-underline"
                    href="https://tidbcloud.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ログイン
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
            <h2 className="title section-title">TiDB Cloudが選ばれる理由</h2>
            <div className="reasons">
              {reasonsDataJP.map((d) => (
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
            <h2 className="title section-title">主な機能</h2>
            <div className="features">
              {featuresDataJP.map((d) => (
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

        <PricingSection />

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
