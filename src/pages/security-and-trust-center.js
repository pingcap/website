import React from 'react'
import { graphql } from 'gatsby'

import '../styles/pages/security-and-trust-center.sass'
import Banner from '../components/banner'
import SEO from '../components/seo'
import Layout from '../components/Layout'

const SecurityAndTrustCenter = React.memo(({ data }) => {
  const {
    BannerSVG,
    DataAccessControlsSVG,
    DataEncryptionSVG,
    AuthenticationSVG,
    WorkloadIsolationSVG,
  } = data
  const className = `SecurityAndTrustCenter`
  // const className = `SecurityAndTrustCenter`
  return (
    <Layout>
      <SEO
        title="About PingCAP"
        description="Story about PingCAP, the team behind TiDB"
      />
      <article className="PingCAP-SecurityAndTrustCenter">
        <Banner backgroundImage={BannerSVG.publicURL}>
          Security and Trust Center
        </Banner>
        <div className={`${className} container`}>
          <SecurityAndTrustCenterSummary>
            At PingCAP we value security and trust more than anything because we
            know our customers entrust us with their most important asset - the
            data itself. We take this responsibility seriously and are always
            dedicated to protecting the Security, Availability, and
            Confidentiality of our customers’ data. We have incorporated
            security into all aspects of our offering (TiDB Cloud) and
            operations.
          </SecurityAndTrustCenterSummary>
          {/* be careful: use ● instead of the list-style: disc */}
          <SecurityAndTrustCenterKeySecurityFeatures
            title={'Key Security Features'}
            list={[
              {
                icon: DataAccessControlsSVG,
                title: 'Data access controls ',
                list: ['● VPC peering connection', '● IP whitelist'],
              },
              {
                icon: DataEncryptionSVG,
                title: 'Data Encryption',
                list: [
                  '● In-transit encryption (TLS/SSL)',
                  '● Encryption at rest (AES256) for TiKV, TiFlash, and backup data.',
                ],
              },
              {
                icon: AuthenticationSVG,
                title: 'Authentication',
                list: [
                  '● Inter-node identity authentication (mTLS)',
                  '● Client identity authentication',
                ],
              },
              {
                icon: WorkloadIsolationSVG,
                title: 'Workload Isolation',
                list:
                  'Dedicated VPC for each TiDB cluster to guarantee confidentiality and integrity of your data.',
              },
            ]}
          >
            TiDB Cloud is designed with strict security measures in all aspects
            that are aligned with the market, so that you can focus on your
            data, not protecting it.
          </SecurityAndTrustCenterKeySecurityFeatures>
        </div>
      </article>
    </Layout>
  )
})

const SecurityAndTrustCenterSummary = React.memo(({ children }) => {
  const className = `SecurityAndTrustCenterSummary`
  return <div className={className}>{children}</div>
})

const SecurityAndTrustCenterKeySecurityFeatures = React.memo(
  ({ title, children, list }) => {
    const className = `SecurityAndTrustCenterKeySecurityFeatures`
    const classNameTitle = `${className}-title`
    const classNameBody = `${className}-body`
    const classNameList = `${className}-list`
    return (
      <div className={className}>
        <div className={classNameTitle}>{title}</div>
        <div className={classNameBody}>{children}</div>
        <div className={classNameList}>
          {list.map((item) => (
            <SecurityAndTrustCenterKeySecurityFeaturesItem data={item} />
          ))}
        </div>
      </div>
    )
  }
)

const SecurityAndTrustCenterKeySecurityFeaturesItem = React.memo(({ data }) => {
  const { icon, title, list } = data

  const className = `SecurityAndTrustCenterKeySecurityFeaturesItem`
  const classNameIcon = `${className}-icon`
  const classNameTitle = `${className}-title`
  const classNameLine = `${className}-line`
  const classNameList = `${className}-list`
  return (
    <div className={className}>
      <div className={classNameIcon}>
        <img src={icon.publicURL} alt={classNameTitle} />
      </div>
      <div className={classNameTitle}>{title}</div>
      <div className={classNameLine} />
      <div className={classNameList}>
        {Array.isArray(list) ? (
          <ul>
            {list.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        ) : (
          list
        )}
      </div>
    </div>
  )
})

export const query = graphql`
  query {
    BannerSVG: file(
      relativePath: { eq: "security-and-trust-center/banner.svg" }
    ) {
      publicURL
    }
    DataAccessControlsSVG: file(
      relativePath: { eq: "security-and-trust-center/data-access-controls.svg" }
    ) {
      publicURL
    }
    DataEncryptionSVG: file(
      relativePath: { eq: "security-and-trust-center/data-encryption.svg" }
    ) {
      publicURL
    }
    AuthenticationSVG: file(
      relativePath: { eq: "security-and-trust-center/authentication.svg" }
    ) {
      publicURL
    }
    WorkloadIsolationSVG: file(
      relativePath: { eq: "security-and-trust-center/workload-isolation.svg" }
    ) {
      publicURL
    }
  }
`

export default SecurityAndTrustCenter
