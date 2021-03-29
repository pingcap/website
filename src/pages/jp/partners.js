import '../../styles/pages/community/index.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql } from 'gatsby'
import Button from '../../components/button'

const Community = ({ data }) => {
  const { communityHeroSVG } = data

  return (
    <Layout>
      <SEO
        title="Community "
        description="Join our community to learn, contribute, grow, and connect with TiDB contributors and users all around the world!"
      />
      <article className="PingCAP-TiDB-Community">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">パートナーシップ</h1>
              <div className="subtitle-under-main-title">
                パートナー企業様を募集しております、お気軽に下記までお問合せください
              </div>
              <img src={communityHeroSVG.publicURL} alt="Community Hero" />
              <div className="buttons">
                <Button
                  as="a"
                  href="https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap"
                  target="_blank"
                  className="join-slack"
                >
                  お問い合わせ
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    communityHeroSVG: file(relativePath: { eq: "partner/partner-hero.svg" }) {
      publicURL
    }
  }
`

export default Community
