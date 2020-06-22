import '../styles/pages/contactUs.scss'

import React from 'react'
import Layout from '../components/layout'
import HubspotForm from 'react-hubspot-form'
import SEO from '../components/seo'
import Loading from '../components/loading'
import { Button } from '@seagreenio/react-bulma'

const ContactUs = () => {
  return (
    <Layout>
      <SEO title="Contact " description="An open-source, cloud-native, distributed SQL database for elastic scale and real-time analytics" />
      <article className="PingCAP-Contact-Us">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">Contact PingCAP</h1>
              <div className="subtitle-under-main-title">
                Thanks for your interest in TiDB. Please take a minute to fill
                out the form below and we will get back to you shortly.
              </div>
              <Button
                as="a"
                href="https://support.pingcap.com/"
                target="_blank"
                className="is-primary"
                rounded
              >
                ENTERPRISE SUPPORT
              </Button>
            </div>
          </div>
        </section>

        <section className="section form-section">
          <div className="container">
            <HubspotForm
              portalId="4466002"
              formId="125bf70d-1eba-4cf8-bb1d-2e4a422a875d"
              loading={<Loading />}
            />
          </div>
        </section>

        <section className="section map-section">
          <div className="container">
            <div className="columns">
              <div className="column is-3 address-col">
                <div className="address">
                  <div className="addr-title">Office Address</div>
                  <p className="addr-detail">2955 Campus Drive #110,</p>
                  <p className="addr-detail">San Mateo, CA 94403</p>
                </div>
                <div className="address">
                  <div className="addr-title">Phone</div>
                  <p className="addr-detail">650 - 733 - 3859</p>
                </div>
              </div>
              <div className="column is-8">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="NA office map"
                      width="100%"
                      height="400px"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=2955%20Campus%20Drive%20%23110%2C%20San%20Mateo%2C%20CA%2094403&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      scrolling="no"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default ContactUs
