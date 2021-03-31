/* eslint-disable jsx-a11y/no-onchange */

import '../../../../styles/pages/products/tidbCloud.scss'

import { graphql } from 'gatsby'
import React, { useEffect, useMemo, useState } from 'react'
import {
  featuresDataJP,
  logos,
  reasonsDataJP,
} from '../../../../data/products/tidbcloud'

import { Button } from '@seagreenio/react-bulma'
import Layout from '../../../../components/layout'
import SEO from '../../../../components/seo'
import axios from 'axios'
import GetStartedWithTiDBCloud from '../../../../components/getStartedWithTiDBCloud'
import StartYourFreeTrialNowButton from '../../../../components/startYourFreeTrialNowButton'

const cloudProviders = ['aws', 'googleCloud']

const precision = (num, precision = 12) => {
  if (num === null || num === undefined) return '-'
  return +parseFloat(num.toPrecision(precision))
}

const http = axios.create({
  baseURL: 'https://download.pingcap.com/data/tidbcloud',
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
          {/* <td>{value(instance.memory_gi)} GiB</td> */}
          <td>
            {name === 'tidb' ? '-' : `${value(instance.disks[0].disk_gi)} GiB`}
          </td>
          <td>$ {value(availablePrice[name])} /時間あたり</td>
          <td>$ {precision(availablePrice[name] * 24 * 30)} /カ月あたり</td>
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
              {/* <th>Memory</th> */}
              <th>Storage</th>
              <th>時間単価/1ノード</th>
              <th>月単価/1ノード</th>
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

      <div className="regions">
        <span className="label">Select Region</span>
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

      {profile && region && <ProfileTable />}
    </div>
  )
}

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

        <section className="section section-pricing has-light-background">
          <div className="container">
            <h2 className="title section-title">価格設定</h2>
            <div className="field">
              <p className="paragraph">
                TiDB Cloudは、さまざまなクラスター層を提供します。 TiDB / TiKV /
                TiFlashインスタンスの詳細な価格は次のとおりです。
              </p>
              <HourlyNodeUsageInfo />
              <p className="paragraph">
                データのバックアップと転送は別
                <a
                  className="link-with-underline"
                  href="https://docs.pingcap.com/tidbcloud/beta/tidb-cloud-billing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  課金
                </a>
                する必要があります。 詳細については、請求を 参照 してください。
              </p>
            </div>
          </div>
        </section>

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
