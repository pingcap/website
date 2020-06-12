import '../../styles/pages/download/community.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import HubspotForm from 'react-hubspot-form'

import { graphql } from 'gatsby'
import Loading from '../../components/loading'

const Enterprise = ({ data }) => {
  const { tidbLogoPNG, rocketIconSVG } = data

  return (
    <Layout>
      <SEO title="Download TiDB Community" />
      <article className="PingCAP-Download-TiDB-Enterprise">
        <div className="container enterprise-wrapper">
          <div className="tidb-logo">
            <img src={tidbLogoPNG.publicURL} alt="rocket icon" />
          </div>
          <div className="card">
            <div className="header">
              <div className="rocket-icon">
                <img src={rocketIconSVG.publicURL} alt="rocket icon" />
              </div>
              <h1>Get Started with TiDB </h1>
            </div>
            <div className="form-wrapper">
              <HubspotForm
                portalId="4466002"
                formId="07447f75-ca95-4390-bbde-06c329164747"
                loading={<Loading />}
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    tidbLogoPNG: file(relativePath: { eq: "download/tidb-logo.png" }) {
      publicURL
    }
    rocketIconSVG: file(relativePath: { eq: "download/rocket-icon.svg" }) {
      publicURL
    }
  }
`

export default Enterprise
