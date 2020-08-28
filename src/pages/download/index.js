import '../../styles/pages/download/index.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql, Link } from 'gatsby'
import { downloadTiDB } from '../../data/download-tidb'
import { Button } from '@seagreenio/react-bulma'

const Download = ({ data }) => {
  const { deployTiDBinCloudSVG } = data
  return (
    <Layout>
      <SEO title="Download TiDB" description="" />
      <article className="PingCAP-Download-TiDB">
        <section className="section download-section">
          <div className="container">
            <div className="card deploy-in-cloud">
              <h2 className="title section-title">Fully Managed TiDB Cloud</h2>
              <img
                className="cloud-icon"
                src={deployTiDBinCloudSVG.publicURL}
                alt="Deploy TiDB in Cloud"
              />
              <p>
                Fully managed TiDB service that lets you deploy and operate TiDB
                in a few clicks. Available on AWS and GCP. Other platforms
                coming soon!
              </p>
              <Button
                as={Link}
                to="/products/tidbcloud/trial"
                className="is-primary"
              >
                APPLY FOR A FREE TRIAL
              </Button>
            </div>
            <div className="deploy-on-premise">
              <h2 className="title section-title">Self-hosted TiDB</h2>
              <div className="columns is-variable is-8">
                {downloadTiDB.map((item) => (
                  <div className="column" key={item.title}>
                    <div className="card">
                      <img src={item.icon} alt={item.title} />
                      <h2 className="column-title">{item.title}</h2>
                      <p>{item.desc}</p>
                      <ul>
                        {item.detailList.map((list, idx) => (
                          <li key={idx}>{list}</li>
                        ))}
                      </ul>
                      <Button
                        as={Link}
                        to={item.buttonLink}
                        className="is-primary"
                      >
                        {item.buttonText}
                      </Button>
                    </div>
                  </div>
                ))}
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
    deployTiDBinCloudSVG: file(
      relativePath: { eq: "download/deploy-tidb-in-cloud.svg" }
    ) {
      publicURL
    }
  }
`

export default Download
