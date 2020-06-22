import '../../../styles/pages/products/tidbCloud.scss'

import { Link, graphql } from 'gatsby'
import React, { useEffect, useMemo, useState } from 'react'
import {
  featuresData,
  logos,
  reasonsData
} from '../../../data/products/tidbcloud'

import { Button } from '@seagreenio/react-bulma'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import axios from 'axios'

const StartTrialButton = () => (
  <Button
    as={Link}
    color="primary"
    className="start-trial-button"
    rounded
    to="/products/tidbcloud/trial"
  >
    Start Your Free Trial Now
  </Button>
)

const cloudProviders = ['aws', 'googleCloud']

const precision = (num, precision = 12) => {
  if (num === null || num === undefined) return '-'
  return +parseFloat(num.toPrecision(precision))
}

const http = axios.create({
  baseURL: 'https://download.pingcap.com/data/tidbcloud'
})

const HourlyNodeUsageInfo = () => {
  const [cloud, setCould] = useState('aws')
  const [region, setRegion] = useState('')
  const [profiles, setProfiles] = useState({
    aws: null,
    googleCloud: null
  })

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const aws = (await http.get('/aws_profiles.json')).data
        const googleCloud = (await http.get('/gcp_profiles.json')).data
        setProfiles({ aws, googleCloud })
        setRegion(aws.regions && aws.regions[0] ? aws.regions[0].name : '')
      } catch (error) {
        console.log('Something wrong:' + error)
        return
      }
    }

    fetchProfiles()
  }, [])

  const handleCloudClick = cloud => () => {
    setCould(cloud)
    setRegion(
      profiles[cloud].regions && profiles[cloud].regions[0]
        ? profiles[cloud].regions[0].name
        : ''
    )
  }

  const handleRegionChange = event => {
    setRegion(event.target.value)
  }

  const profile = useMemo(() => profiles[cloud], [profiles, cloud])

  const ProfileTable = () => {
    const instances = profile.instances || []
    const availableProfiles = instances.filter(p =>
      p.available_regions.map(r => r.region_name).includes(region)
    )

    const value = v => (v !== null && v !== undefined ? v : '-')

    const TierTableRow = ({ tier, isStriped }) => {
      if (!tier) return null

      const { profile_name, available_regions, tidb, tikv } = tier
      const availablePrice = available_regions.filter(
        p => p.region_name === region
      )[0].price

      return (
        <>
          <tr className={`${isStriped ? 'has-light-background' : ''}`}>
            <td rowSpan="2" className="tier-td">
              {profile_name}
            </td>
            <td>TiKV</td>
            <td>{value(tikv.cpu)} vCPU</td>
            <td>{value(tikv.memory_gi)} GiB</td>
            <td>
              {value(tikv.disks[0].disk_gi)} GiB {tikv.disks[0].disk_type}
            </td>
            <td>$ {value(availablePrice.tikv)} /hr</td>
            <td>$ {precision(availablePrice.tikv * 24 * 30)} /month</td>
          </tr>
          <tr className={`${isStriped ? 'has-light-background' : ''}`}>
            <td>TiDB</td>
            <td>{tidb.cpu} vCPU</td>
            <td>{tidb.memory_gi} GiB</td>
            <td>-</td>
            <td>$ {value(availablePrice.tidb)} /hr</td>
            <td>$ {precision(availablePrice.tidb * 24 * 30)} /month</td>
          </tr>
        </>
      )
    }

    return (
      <div className="table-container">
        <table className="table is-bordered comparison-table is-fullwidth">
          <thead>
            <tr>
              <th>Tier</th>
              <th>Node</th>
              <th>CPU</th>
              <th>Memory</th>
              <th>Storage</th>
              <th>Hourly Usage Per Node</th>
              <th>Monthly Usage Per Node</th>
            </tr>
          </thead>
          <tbody>
            {availableProfiles.map((p, index) => (
              <TierTableRow
                key={p.profile_name}
                tier={p}
                isStriped={index % 2}
              />
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="tidb-cloud-hourly-usage">
      <div className="cloud-providers">
        {cloudProviders.map(c => (
          <Button
            key={c}
            className="cloud-provider-button"
            active={cloud === c}
            onClick={handleCloudClick(c)}
          >
            <img
              className="logo"
              src={logos[c]}
              alt={`${c.toUpperCase()} Logo`}
            />
          </Button>
        ))}
      </div>

      <div className="regions">
        <span className="label">Select Region</span>
        <div className="select">
          {profile && profile.regions && (
            <select value={region} onChange={handleRegionChange}>
              {profile.regions.map(r => (
                <option key={r.name} value={r.name}>
                  {r.display_name}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {profile && region && <ProfileTable />}
    </div>
  )
}

const TiDBCloudPage = ({ data }) => {
  const { TiDBCloudLogoPNG, BannerSVG } = data

  return (
    <Layout>
      <SEO title="TiDB Cloud " description="Fully Managed TiDB service. TiDB Cloud lets you focus on your applications, not the complexities of your database." />
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
                  Bring everything great about TiDB to the cloud. TiDB Cloud
                  lets you focus on your applications, not the complexities of
                  your database.
                </p>
                <StartTrialButton />
                <p className="paragraph">
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
                <img
                  src={BannerSVG.publicURL}
                  className="banner"
                  alt="TiDB Cloud"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-why-tidb-cloud has-light-background">
          <div className="container">
            <h2 className="title section-title">Why TiDB Cloud</h2>
            <div className="reasons">
              {reasonsData.map(d => (
                <div key={d.name} className="reason">
                  <div className="placeholder-wrapper">
                    <img
                      className="placeholder"
                      src={d.placeholder}
                      alt={d.name}
                    />
                  </div>
                  <div className="intro">
                    <h3 className="title column-title is-spaced">
                      {d.name}
                    </h3>
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
              {featuresData.map(d => (
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

        <section className="section section-pricing has-light-background">
          <div className="container">
            <h2 className="title section-title">Pricing</h2>
            <div className="field">
              <p className="paragraph">
                TiDB Cloud provides different cluster tiers. Detailed pricing
                for TiDB/TiKV instances in different tiers are as follows:
              </p>
              <HourlyNodeUsageInfo />
              <p className="paragraph">
                Data backup and data transfer need to be charged separately. See{' '}
                <a
                  className="link-with-underline"
                  href="https://docs.pingcap.com/tidbcloud/beta/tidb-cloud-billing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Billing
                </a>{' '}
                for more details.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-get-started">
          <div className="container">
            <h2 className="title is-4">Get Started with TiDB Cloud</h2>
            <StartTrialButton />
          </div>
        </section>
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
    BannerSVG: file(relativePath: { eq: "products/tidbcloud/banner.svg" }) {
      publicURL
    }
  }
`

export default TiDBCloudPage
