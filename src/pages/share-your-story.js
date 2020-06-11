import '../styles/pages/shareYourStory.scss'

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HubspotForm from 'react-hubspot-form'
import { graphql } from 'gatsby'

const ShareYourStory = ({ data }) => {
  const { shareStories } = data

  return (
    <Layout>
      <SEO title="Download TiDB Community" />
      <article className="PingCAP-Share-Story">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">Share and connect</h1>
              <h2 className="section-subtitle">
                Share your TiDB story to connect more with our community.
              </h2>
              <h2 className="section-subtitle">
                As a thank you, we’ll ship you an awesome TIDB SWAG.
              </h2>
              <img src={shareStories.publicURL} alt="Share Story Hero" />
            </div>
          </div>
        </section>

        <section className="section form-section">
          <div className="container">
            <HubspotForm
              portalId="4466002"
              formId="cb5c56c5-a562-4f07-b1ce-1acc0b06ae62"
            />
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    shareStories: file(relativePath: { eq: "community/share-stories.svg" }) {
      publicURL
    }
  }
`

export default ShareYourStory
