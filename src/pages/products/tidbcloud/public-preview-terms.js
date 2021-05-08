/* eslint-disable jsx-a11y/no-onchange */

import '../../../styles/pages/products/public-preview.scss'

import React from 'react'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import StartYourFreeTrialNowButton from '../../../components/startYourFreeTrialNowButton'

const PublicPreview = () => {
  return (
    <Layout NavbarProps={{ showBanner: true }}>
      <SEO
        title="TiDB Cloud "
        description="Fully Managed TiDB service. TiDB Cloud lets you focus on your applications, not the complexities of your database."
      />
      <main className="Public-Preview-Terms">
        <div className="container">
          <section className="terms-conditions content">
            <h1>Public Preview Terms and Conditions</h1>
            <p>
              Welcome to the TiDB Cloud Public Preview. Thank you for checking
              us out while we continuously work to improve our managed service.
              You’ll get all the benefits of TiDB, so feel free to deploy it in
              your applications, backend services or database workloads.
            </p>
            <p>
              During the public preview, certain special terms and conditions
              apply:
            </p>
            <ul>
              <li>
                We reserve the right to change, evolve and discontinue any
                features or functions of TiDB Cloud
              </li>
              <li>
                Our SLA guarantee does not apply to Free or POC trial clusters
              </li>
              <li>
                TiDB Cloud on-demand clusters are guaranteed a monthly uptime
                percentage guarantee of at least 99% during any monthly billing
                cycle as defined in the SLA
              </li>
            </ul>
            <div className="start-trial-button">
              <StartYourFreeTrialNowButton />
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default PublicPreview
