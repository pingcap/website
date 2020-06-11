import '../../styles/pages/products/tidb.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SectionUseCases from '../../components/sectionUseCases'
import { graphql } from 'gatsby'
import { industryIcons } from '../../data/product-tidb'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'


const TiDB = ({ data }) => {
  const { hyperGrowthHeroSVG, htapArchPNG } = data
  return (
    <Layout>
      <SEO title="Product TiDB" />
      <article className="PingCAP-Product-TiDB">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">
                TiDB, the database for your hyper-growth in the cloud era
              </h1>
              <h2 className="section-subtitle">
                With TiDB, you won’t have to worry that your business outgrows
                your database.
              </h2>
              <img src={hyperGrowthHeroSVG.publicURL} alt="Hyper Growth Hero" />
              <h2 className="section-subtitle">
                The TiDB platform is a distributed SQL database platform that
                features horizontal scalability, strong consistency, and high
                availability. The goal of TiDB is to serve as a one-stop
                solution for all online transactions and analysis so you can
                build your applications just as simply as in the good old days.
              </h2>
            </div>
          </div>
        </section>

        <section className="section HTAP-section">
          <div className="container">
            <h2 className="section-title">HTAP</h2>
            <img src={htapArchPNG.publicURL} alt="HATP Architecture" />
          </div>
        </section>

        <SectionUseCases hasLightBg={true} />

        <section className="section industry-section">
          <div className="container">
            <h2 className="section-title industry-title">
              <div>As an industry-agnostic database solution,</div>
              <div>TiDB has been widely adopted by the following segments:</div>
            </h2>
            <div className="columns">
              {industryIcons.map(i => (
                <div className="column" key={i.desc}>
                  <img src={i.icon} alt={i.desc} />
                  <p>{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section comparison-table-section">
          <div className="container">
            <h2 className="section-title">Comparison</h2>
            <h2 className="section-subtitle">
              Comparisons between TiDB and other SQL distributed databases
            </h2>
            <div className="table-container">
              <table className="table is-bordered comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Amazon/Aurora</th>
                    <th>Google Cloud Spanner</th>
                    <th>YugaByte DB</th>
                    <th>CockroachDB</th>
                    <th>TiDB</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Elastic scalability (Both read and write)</td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Automated failover and high availability</td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>Distributed ACID transactions</td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                  <tr>
                    <td>SQL compatibility and protocol</td>
                    <td>MySQL and PostgreSQL</td>
                    <td>Proprietary</td>
                    <td>PostgreSQL</td>
                    <td>PostgreSQL</td>
                    <td>MySQL</td>
                  </tr>
                  <tr>
                    <td>Open Source License</td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>Apache 2.0</td>
                    <td>BSL and CCL</td>
                    <td>Apache 2.0</td>
                  </tr>
                  <tr>
                    <td>HTAP</td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CloseIcon className="close-icon" />
                    </td>
                    <td>
                      <CheckIcon className="check-icon" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section benefit-table-section">
          <div className="container">
            <h2 className="section-title">Benefits</h2>
            <div className="table-container">
              <table className="table is-bordered benefit-table">
                <thead>
                  <tr>
                    <th>O1.Open Source</th>
                    <th>O2.SQL</th>
                    <th>O3.Scale</th>
                    <th>O4.Speed</th>
                    <th>O5.Simple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        <li>Thriving community</li>
                        <li>No vendor lock-in</li>
                        <li>Transparency and reliability</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Familiar MySQL ecosystem</li>
                        <li>Strong consistency</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Scale-out MySQL for massive growth</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Real-time data to insight</li>
                        <li>Accelerated time to market</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li> Hight availability and auto-failover</li>
                        <li>No more manual sharing</li>
                        <li>
                          Minimize data movement and simplify software stack
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    hyperGrowthHeroSVG: file(
      relativePath: { eq: "products/tidb/hyper-growth-hero.svg" }
    ) {
      publicURL
    }
    htapArchPNG: file(
      relativePath: { eq: "products/tidb/htap-architecture.png" }
    ) {
      publicURL
    }
  }
`

export default TiDB
