import React from 'react'
import { graphql, Link } from 'gatsby'

import '../styles/pages/security-and-trust-center.sass'
import Banner from '../components/banner'
import SEO from '../components/seo'
import Layout from '../components/layout'
import GetStartedWithTiDBCloud from '../components/get-started-with-TiDB-cloud'

const Trust = React.memo(({ data }) => {
  const {
    BannerSVG,
    DataAccessControlsSVG,
    DataEncryptionSVG,
    AuthenticationSVG,
    WorkloadIsolationSVG,
    AICPA_SOC_PNG,
  } = data
  console.log(data)
  const className = `SecurityAndTrustCenter`
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
                list: ['● VPC peering connection', '● IP allowlist'],
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
                  'Dedicated VPC for your TiDB clusters to guarantee data confidentiality and integrity.',
              },
            ]}
          >
            TiDB Cloud is designed with strict security measures in all aspects
            that are aligned with the market, so that you can focus on your
            data, not protecting it.
          </SecurityAndTrustCenterKeySecurityFeatures>
        </div>
        <SecurityAndTrustCenterCompliance reportIcon={AICPA_SOC_PNG} />
        <GetStartedWithTiDBCloud />
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
        <div className={`${classNameList} columns`}>
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
    <div className={`${className} column`}>
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

const SecurityAndTrustCenterCompliance = React.memo(({ reportIcon }) => {
  // const { icon, title, list } = data
  const className = `SecurityAndTrustCenterCompliance`
  const classNameTitle = `${className}-title`
  const classNameSummary = `${className}-summary`
  const classNameReport = `${className}-report`
  const classNameReportLeft = `${classNameReport}-left`
  const classNameReportRight = `${classNameReport}-right`
  const classNameReportRightHeader = `${classNameReportRight}-header`
  const classNameReportRightHeaderTitle = `${classNameReportRightHeader}-title`
  const classNameReportRightHeaderMore = `${classNameReportRightHeader}-more`
  const classNameReportRightDescription = `${classNameReportRight}-description`
  const classNameMore = `${className}-more`
  return (
    <div className={className}>
      <div className="container">
        <div className={classNameTitle}>Compliance</div>
        <div className={classNameSummary}>
          We are committed to providing enterprise-grade security and privacy.
          This is not simply demonstrated in technology. We undergo third-party
          auditing to ensure our services and operations adhere to the
          compliance requirements of your organization. TiDB Cloud operates in
          accordance with the following compliance requirements:
        </div>
        <Link
          to={
            '/blog/pingcap-successfully-completes-soc-2-type-1-examination-for-tidb-cloud'
          }
        >
          <div className={classNameReport}>
            <div className={classNameReportLeft}>
              <img src={reportIcon.publicURL} alt="SOC 2 Type 1 Report" />
            </div>
            <div className={classNameReportRight}>
              <div className={classNameReportRightHeader}>
                <div className={classNameReportRightHeaderTitle}>
                  SOC 2 Type 1 Report
                </div>
                <div className={classNameReportRightHeaderMore}>
                  <Link
                    to={
                      '/blog/pingcap-successfully-completes-soc-2-type-1-examination-for-tidb-cloud'
                    }
                  >
                    → Learn More
                  </Link>
                </div>
              </div>
              <div className={classNameReportRightDescription}>
                The SOC 2 Type I audit is an independent audit designed and
                conducted by Schellman & Company, LLC based on the security &
                privacy related control and operations of the TiDB Cloud service
                offering and the standards formulated by the American Institute
                of Certified Public Accountants (AICPA).
              </div>
            </div>
          </div>
        </Link>
        <div className={classNameMore}>
          More compliance audits are in progress...
        </div>
      </div>
    </div>
  )
})

export const query = graphql`
  query {
    BannerSVG: file(
      relativePath: { eq: "security-and-trust-center/banner.jpg" }
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
    AICPA_SOC_PNG: file(
      relativePath: { eq: "security-and-trust-center/AICPA-SOC.gif" }
    ) {
      publicURL
    }
  }
`

export default Trust
