import '../../../styles/pages/products/tidbCloud.scss'

import { Box } from '@seagreenio/react-bulma'
import HubspotForm from 'react-hubspot-form'
import Layout from '../../../components/layout'
import Loading from '../../../components/loading'
import React from 'react'
import SEO from '../../../components/seo'
import { graphql } from 'gatsby'
import { servicesData } from '../../../data/products/tidb-cloud'

const TiDBCloudTrialPage = ({ data }) => {
  const { TiDBCloudLogoPNG, shuttleSVG } = data

  return (
    <Layout>
      <SEO title="TiDB Cloud Trial" />
      <main className="PingCAP-TiDBCloudTrial">
        <section className="section get-trial-section has-light-background">
          <div className="container">
            <h1>
              <img
                src={TiDBCloudLogoPNG.publicURL}
                className="logo"
                alt="TiDB Cloud"
              />
            </h1>
            <div className="columns">
              <div className="column">
                <Box>
                  <div className="header">
                    <div className="image-wrapper">
                      <img src={shuttleSVG.publicURL} alt="Shuttle" />
                    </div>
                    <h2 className="title is-4">Start your free trial now</h2>
                    <p className="hint">
                      with $4500 worth of credits and full power of TiDB Cloud
                    </p>
                  </div>
                  <HubspotForm
                    portalId="4466002"
                    formId="bf9451b5-8816-4a95-947c-1aae656830f5"
                    loading={
                      <div style={{ textAlign: 'center' }}>
                        <Loading />
                      </div>
                    }
                  />
                </Box>
              </div>

              <div className="column">
                <Box>
                  <div className="header">
                    <h2 className="title is-4">TiDB Cloud</h2>
                  </div>
                  <div className="services">
                    {servicesData.map(s => (
                      <div key={s.name} className="intro">
                        <h3 className="title is-5 is-spaced">{s.name}</h3>
                        <p className="is-7 desc">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    TiDBCloudLogoPNG: file(
      relativePath: { eq: "products/tidb-cloud/tidb-cloud-logo.png" }
    ) {
      publicURL
    }
    shuttleSVG: file(relativePath: { eq: "products/tidb-cloud/shuttle.svg" }) {
      publicURL
    }
  }
`

export default TiDBCloudTrialPage
