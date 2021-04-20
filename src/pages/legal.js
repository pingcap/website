import '../styles/pages/legal.scss'

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import { LegalDocs } from '../data/legal-docs'
import LinkWithArrow from '../components/linkWithArrow'

const Legal = ({ data }) => {
  const { communityHeroSVG } = data

  return (
    <Layout>
      <SEO title="Legal Notice" description="" />
      <article className="PingCAP-TiDB-Legal-Notices">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={communityHeroSVG.publicURL} alt="Legal Notice Hero" />
              <h1 className="title section-title">Legal Documents</h1>
            </div>
          </div>
        </section>

        <section className="legal-list">
          <div className="container">
            <div className="columns">
              {LegalDocs.map((legal) => (
                <div className="column is-10" key={legal.title}>
                  <div className="card">
                    <div className="legal-title">
                      <div className="lt">
                        <Link to={legal.link}>{legal.title}</Link>
                      </div>
                      <div className="read-more pc">
                        <LinkWithArrow
                          to={legal.link}
                          linkText="Read More"
                          outboundLink={false}
                        />
                      </div>
                    </div>
                    <div className="legal-desc">{legal.desc}</div>
                    <div className="read-more mobile">
                      <LinkWithArrow
                        to={legal.link}
                        linkText="Read More"
                        outboundLink={false}
                      />
                    </div>
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
    communityHeroSVG: file(relativePath: { eq: "legal/legal-hero.svg" }) {
      publicURL
    }
  }
`

export default Legal
