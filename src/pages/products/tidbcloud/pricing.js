/* eslint-disable jsx-a11y/no-onchange */
import '../../../styles/pages/products/pricing.scss'

import React, { useEffect, useMemo, useState } from 'react'
import { logos } from '../../../data/products/tidbcloud'

import { Button } from '@seagreenio/react-bulma'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import axios from 'axios'
import StartYourFreeTrialNowButton from '../../../components/startYourFreeTrialNowButton'

const cloudProviders = ['aws', 'googleCloud']

const precision = (num, precision = 12) => {
  if (num === null || num === undefined) return '-'
  return +parseFloat(num.toPrecision(precision))
}

const http = axios.create({
  baseURL:
    'https://us-west-2.louis.shared.aws.tidbcloud.com/external-api/v1/cluster_profiles',
})

const HourlyNodeUsageInfo = () => {
  const [cloud, setCould] = useState('aws')
  const [region, setRegion] = useState('')
  const [profiles, setProfiles] = useState({
    aws: null,
    googleCloud: null,
  })

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const aws = (await http.get('/aws/profiles')).data
        const googleCloud = (await http.get('/gcp/profiles')).data
        setProfiles({ aws, googleCloud })
        setRegion(aws.regions && aws.regions[0] ? aws.regions[0].name : '')
      } catch (error) {
        console.log('Something wrong:' + error)
        return
      }
    }

    fetchProfiles()
  }, [])

  const handleCloudClick = (cloud) => () => {
    setCould(cloud)
    setRegion(
      profiles[cloud].regions && profiles[cloud].regions[0]
        ? profiles[cloud].regions[0].name
        : ''
    )
  }

  const handleRegionChange = (event) => {
    setRegion(event.target.value)
  }

  const profile = useMemo(() => profiles[cloud], [profiles, cloud])

  const ProfileTable = () => {
    const instances = profile.instances || []
    const availableProfiles = instances.filter((p) =>
      p.available_regions.map((r) => r.region_name).includes(region)
    )
    console.log('availableProfiles', availableProfiles)

    const value = (v) => (v !== null && v !== undefined ? v : '-')

    const TierTableRow = ({ tier, isStriped }) => {
      if (!tier) return null

      const { profile_name, available_regions, tidb, tikv, tiflash } = tier
      const availablePrice = available_regions.filter(
        (p) => p.region_name === region
      )[0].price
      const names = {
        tidb: 'TiDB',
        tikv: 'TiKV',
        tiflash: 'TiFlash',
      }

      const TierCells = ({ name, instance }) => (
        <>
          <td>{names[name]}</td>
          <td>{value(instance.cpu)} vCPU</td>
          <td>
            {name === 'tidb' ? '-' : `${value(instance.disks[0].disk_gi)} GiB`}
          </td>
          <td>$ {value(availablePrice[name])} /hr</td>
          <td>$ {precision(availablePrice[name] * 24 * 30)} /month</td>
        </>
      )

      return (
        <>
          <tr className={`${isStriped ? 'has-light-background' : ''}`}>
            <td rowSpan={`${tiflash ? '3' : '2'}`} className="tier-td">
              {profile_name}
            </td>
            <TierCells name="tikv" instance={tikv} />
          </tr>
          <tr className={`${isStriped ? 'has-light-background' : ''}`}>
            <TierCells name="tidb" instance={tidb} />
          </tr>
          {tiflash && (
            <tr className={`${isStriped ? 'has-light-background' : ''}`}>
              <TierCells name="tiflash" instance={tiflash} />
            </tr>
          )}
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
      <div className="columns">
        <div className="column is-6">
          <div className="card">
            <p>1. Choose Your Provider</p>
            <div className="cloud-providers">
              {cloudProviders.map((c) => (
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
          </div>
        </div>

        <div className="regions column is-6">
          <div className="card">
            <p>2. Select Region</p>
            <div className="select">
              {profile && profile.regions && (
                <select value={region} onChange={handleRegionChange}>
                  {profile.regions.map((r) => (
                    <option key={r.name} value={r.name}>
                      {r.display_name}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
      </div>

      {profile && region && <ProfileTable />}
    </div>
  )
}

const Pricing = () => {
  return (
    <Layout NavbarProps={{ showBanner: true }}>
      <SEO title="TiDB Cloud Pricing" description="" />
      <main className="PingCAP-TiDBCloud-Pricing">
        <section className="section section-pricing has-light-background">
          <div className="container">
            <h2 className="title section-title">Public Preview Pricing</h2>
            <div className="field">
              <p className="paragraph">
                Choose from the special public preview options
              </p>
              <HourlyNodeUsageInfo />
              <div className="start-trial-button">
                <StartYourFreeTrialNowButton btnText="START FOR FREE" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Pricing
