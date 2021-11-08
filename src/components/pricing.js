/* eslint-disable jsx-a11y/no-onchange */
import '../styles/pages/products/pricing.scss'

import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { Button } from '@seagreenio/react-bulma'
import { FormattedMessage, useIntl, FormattedNumber } from 'react-intl'
import { Link } from 'gatsby'

import Layout from './layout'
import SEO from './seo'
import IntlLink from './IntlLink'
import CButton from './button'
import StartYourFreeTrialNowButton from './startYourFreeTrialNowButton'
import { logos } from '../data/products/tidbcloud'

const cloudProviders = ['aws', 'googleCloud']

const precision = (num, precision = 12) => {
  if (num === null || num === undefined) return '-'
  return +parseFloat(num.toPrecision(precision))
}

const http = axios.create({
  baseURL:
    'https://us-west-2.prod.aws.tidbcloud.com/external-api/v1/cluster_profiles',
})

const HourlyNodeUsageInfo = () => {
  const [cloud, setCould] = useState('aws')
  const [region, setRegion] = useState('')
  const [profiles, setProfiles] = useState({
    aws: null,
    googleCloud: null,
  })

  const intl = useIntl()

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

  const ProfileIntl = ({ id }) => (
    <FormattedMessage id={`components.Pricing.ProfileTable.${id}`} />
  )

  const isFreeTrial = (name) => {
    return name === 's1.dev'
  }

  const formatPrice = (price, name) => {
    if (isFreeTrial(name)) {
      return 'Free'
    }
    if (typeof price === 'number') {
      // eslint-disable-next-line react/style-prop-object
      return <FormattedNumber value={price} style="currency" currency="USD" />
    }
    return price
  }

  const ProfileTable = () => {
    const instances = profile.instances || []
    const discount = profile.global_discount || 0.7
    let freeTier = null
    const availableProfiles = instances
      .filter((p) =>
        p.available_regions.map((r) => r.region_name).includes(region)
      )
      .filter((p) => {
        if (isFreeTrial(p.profile_name)) {
          freeTier = p
          return false
        }
        return true
      })

    if (freeTier) {
      availableProfiles.unshfit(freeTier)
    }

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
          <td>
            {name === 'tidb' ? '-' : `${value(instance.disks[0].disk_gi)} GB`}
          </td>
          <td>{formatPrice(value(availablePrice[name]))}</td>
          <td>{formatPrice(precision(availablePrice[name] * 24 * 30))}</td>
          <td>{formatPrice(precision(availablePrice[name] * 0.7))}</td>
          <td>
            {formatPrice(precision(availablePrice[name] * 24 * 30 * discount))}
          </td>
          <td>
            {`${value(instance.cpu)} ${
              isFreeTrial(profile_name) ? 'vCPU shared' : 'vCPU'
            }`}
          </td>
        </>
      )

      return (
        <>
          <tr className={`${isStriped ? 'has-light-background' : ''}`}>
            <td rowSpan={`${tiflash ? '3' : '2'}`} className="tier-td">
              {isFreeTrial(profile_name) ? 'Developer Tier' : profile_name}
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
              <th>
                <ProfileIntl id="tier" />
              </th>
              <th>
                <ProfileIntl id="node" />
              </th>
              <th>
                <ProfileIntl id="storage" />
              </th>
              <th>
                <ProfileIntl id="hourlyUsagePerNode" />
              </th>
              <th>
                <ProfileIntl id="monthlyUsagePerNode" />
              </th>
              <th>
                <ProfileIntl id="discountedUsagePerNode" />
              </th>
              <th>
                <ProfileIntl id="discountedMonthlyUsagePerNode" />
              </th>
              <th>
                <ProfileIntl id="cpu" />
              </th>
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
        <p className="paragraph">
          <FormattedMessage
            id="components.Pricing.ProfileTable.billing"
            values={{
              billing: (
                <a
                  className="link-with-underline"
                  href="https://docs.pingcap.com/tidbcloud/beta/tidb-cloud-billing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ProfileIntl id="billingLink" />
                </a>
              ),
            }}
          />
        </p>
      </div>
    )
  }

  return (
    <div className="tidb-cloud-hourly-usage">
      <div className="columns">
        <div className="column is-6">
          <div className="card">
            <p>
              <ProfileIntl id="chooseProvider" />
            </p>
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
            <p>
              <ProfileIntl id="selectRegion" />
            </p>
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
            <p className="desc">
              <FormattedMessage
                id="components.Pricing.ProfileTable.desc"
                values={{
                  contact: (
                    <IntlLink
                      to={`${
                        intl.locale === 'en' ? '' : '/' + intl.locale
                      }/contact-us`}
                    >
                      <ProfileIntl id="contactUs" />
                    </IntlLink>
                  ),
                }}
              />
            </p>
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
            <h2 className="title section-title">
              <FormattedMessage id="components.Pricing.title" />
            </h2>
            <div className="field">
              <p className="paragraph">
                <FormattedMessage id="components.Pricing.choose" />
              </p>
              <HourlyNodeUsageInfo />
              <div className="start-trial-button">
                <StartYourFreeTrialNowButton />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const PricingSection = () => {
  const intl = useIntl()
  return (
    <section className="section section-pricing">
      <div className="container">
        <h2 className="title section-title">
          <FormattedMessage id="components.PricingSection.title" />
        </h2>
        <div className="field">
          <p className="paragraph">
            <FormattedMessage id="components.PricingSection.needs" />
          </p>
          <CButton
            as={Link}
            to={`/${intl.locale}/products/tidbcloud/pricing/`}
            className="primary"
          >
            <FormattedMessage id="components.PricingSection.learnMore" />
          </CButton>
        </div>
      </div>
    </section>
  )
}

export default Pricing
