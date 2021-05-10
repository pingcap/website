import React from 'react'
import { graphql, Link } from 'gatsby'

import '../styles/pages/security-and-trust-center.scss'
import Hero from '../components/hero'
import SEO from '../components/seo'
import Layout from '../components/layout'
import GetStartedWithTiDBCloud from '../components/getStartedWithTiDBCloud'

import trustData from '../data/trust'

const Trust = React.memo(({ data }) => {
  const { BannerSVG, AICPA_SOC_PNG } = data
  const className = `SecurityAndTrustCenter`
  return (
    <Layout>
      <SEO
        title="Security and Compliance"
        description="TiDB is a distributed SQL database platform that features horizontal scalability, strong consistency, and high availability."
      />
      <article className="PingCAP-SecurityAndTrustCenter">
        <Hero backgroundImage={BannerSVG.publicURL}>
          Security and Trust Center
        </Hero>
        <div className={`${className} container`}>
          <div className="SecurityAndTrustCenterSummary">
            At PingCAP we value security and trust more than anything because we
            know our customers entrust us with their most important asset - the
            data itself. We take this responsibility seriously and are always
            dedicated to protecting the Security, Availability, and
            Confidentiality of our customers’ data. We have incorporated
            security into all aspects of our offering (TiDB Cloud) and
            operations.
          </div>
          <SecurityAndTrustCenterKeySecurityFeatures
            title={'Key Security Features'}
            list={trustData.featuresList}
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

const SecurityAndTrustCenterKeySecurityFeatures = React.memo(
  ({ title, children, list }) => {
    const className = `SecurityAndTrustCenterKeySecurityFeatures`
    return (
      <div className={className}>
        <div className={`${className}-title`}>{title}</div>
        <div className={`${className}-body`}>{children}</div>
        <div className={`${className}-list columns`}>
          {list.map((item, idx) => (
            <SecurityAndTrustCenterKeySecurityFeaturesItem
              key={idx}
              data={item}
            />
          ))}
        </div>
      </div>
    )
  }
)

const SecurityAndTrustCenterKeySecurityFeaturesItem = React.memo(({ data }) => {
  const { icon, title, list } = data

  const className = `SecurityAndTrustCenterKeySecurityFeaturesItem`
  return (
    <div className={`${className} column`}>
      <div className={`${className}-icon`}>
        <img src={icon} alt={title} />
      </div>
      <div className={`${className}-title`}>{title}</div>
      <div className={`${className}-line`} />
      <div className={`${className}-list`}>
        {Array.isArray(list) ? (
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
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
  const className = `SecurityAndTrustCenterCompliance`
  const classNameReport = `${className}-report`
  const classNameReportLeft = `${classNameReport}-left`
  const classNameReportRight = `${classNameReport}-right`
  const classNameReportRightHeader = `${classNameReportRight}-header`
  return (
    <div className={className}>
      <div className="container">
        <div className={`${className}-title`}>Compliance</div>
        <div className={`${className}-summary`}>
          We are committed to providing enterprise-grade security and privacy.
          This is not simply demonstrated in technology. We undergo third-party
          auditing to ensure our services and operations adhere to the
          compliance requirements of your organization. TiDB Cloud operates in
          accordance with the following compliance requirements:
        </div>
        <div className={classNameReport}>
          <div className={classNameReportLeft}>
            <img src={reportIcon.publicURL} alt="SOC 2 Type 1 Report" />
          </div>
          <div className={classNameReportRight}>
            <div className={classNameReportRightHeader}>
              <div className={`${classNameReportRightHeader}-title`}>
                SOC 2 Type 1 Report
              </div>
              <Link
                to={
                  '/blog/pingcap-successfully-completes-soc2-type2-examination-for-tidb-cloud'
                }
              >
                <div className={`${classNameReportRightHeader}-more`}>
                  → Learn More
                </div>
              </Link>
            </div>
            <div className={`${classNameReportRight}-description`}>
              The SOC 2 Type II audit is an independent, third party audit
              performed based on relevant guidelines developed by the American
              Institute of Certified Public Accountants (AICPA) for the
              appropriateness of controls related to the security, availability,
              and confidentiality of the TiDB Cloud service offering.{' '}
              <Link to="/blog/pingcap-successfully-completes-soc-2-type-1-examination-for-tidb-cloud">
                PingCAP completed the SOC 2 Type I examination in July, 2020,
                see more in the announcement
              </Link>
              .
            </div>
          </div>
        </div>
        <div className={`${className}-more`}>
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
    AICPA_SOC_PNG: file(
      relativePath: { eq: "security-and-trust-center/AICPA-SOC.gif" }
    ) {
      publicURL
    }
  }
`

export default Trust
