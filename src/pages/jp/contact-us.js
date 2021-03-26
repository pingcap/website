import '../../styles/pages/contactUs.scss'

import React from 'react'
import Layout from '../../components/layout'
import HubspotForm from 'react-hubspot-form'
import SEO from '../../components/seo'
import Loading from '../../components/loading'
import Button from '../../components/button'

const ContactUs = () => {
  return (
    <Layout>
      <SEO
        title="Contact"
        description="An open-source, cloud-native, distributed SQL database for elastic scale and real-time analytics"
      />
      <article className="PingCAP-Contact-Us">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">Contact PingCAP</h1>
              <div className="subtitle-under-main-title">
                TiDBに関心をお寄せいただきありがとうございます。
                <br />
                以下のフォームにご記入ください。折り返しご連絡いたします。
              </div>
              <Button
                as="a"
                href="https://support.pingcap.com/"
                target="_blank"
                type="primary"
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
              formId="d2c0dd94-cd3a-4fff-a02b-ff2333a8cfb1"
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
                  <p className="addr-detail">100-0005 東京都千代田区丸の内</p>
                  <p className="addr-detail">1-6-5 丸の内北口ビルディング 9F</p>
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
                      allowfullscreen=""
                      loading="lazy"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.7181117447876!2d139.76469651573527!3d35.68394233742961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf9274299a5%3A0x17f7c12f51ed7ce!2z44CSMTAwLTAwMDUgVG9reW8sIENoaXlvZGEgQ2l0eSwgTWFydW5vdWNoaSwgMS1jaMWNbWXiiJI24oiSNSDkuLjjga7lhoXljJflj6Pjg5Pjg6vjg4fjgqPjg7PjgrAgOUY!5e0!3m2!1szh-CN!2sjp!4v1616752208881!5m2!1szh-CN!2sjp"
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
