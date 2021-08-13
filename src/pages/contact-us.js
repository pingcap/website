import '../styles/pages/contactUs.scss'

import React from 'react'
import Layout from '../components/layout'
import HubspotForm from 'react-hubspot-form'
import SEO from '../components/seo'
import Loading from '../components/loading'
import Button from '../components/button'
import CNLogo from '../../images/contact-us/cn.svg'
import SGLogo from '../../images/contact-us/sg.svg'
import USLogo from '../../images/contact-us/us.svg'
import JPLogo from '../../images/contact-us/jp.svg'

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
            <div className="container">
              <h1 className="title section-title section-title-en">
                Contact PingCAP
              </h1>
              <div className="subtitle-under-main-title-en">
                Thanks for your interest in TiDB. Please take a minute to fill
                out the form below and
                <br /> we will get back to you shortly.
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
              formId="125bf70d-1eba-4cf8-bb1d-2e4a422a875d"
              loading={<Loading />}
            />
          </div>
        </section>

        <section className="section address-section has-light-background">
          <div className="container">
            <h2 className="title section-title">Office Locations</h2>
            <div className="columns is-desktop">
              <div className="column details is-6">
                <img src={CNLogo} alt="country logo" />
                <div className="addr">
                  <p className="location">Beijing, China</p>
                  <p>
                    北京市海淀区西小口路 66 号东升科技园 C-1 楼
                    <br /> +86-010-53326356
                  </p>
                </div>
              </div>
              <div className="column details is-6">
                <img src={USLogo} alt="country logo" />
                <div className="addr">
                  <p className="location">California, USA</p>
                  <p>
                    2955 Campus Drive #110,
                    <br /> San Mateo, CA 94403
                    <br /> Office: +1(650) - 382 - 9973（Mon - Fri）
                  </p>
                </div>
              </div>
              <div className="column details is-6">
                <img src={SGLogo} alt="country logo" />
                <div className="addr">
                  <p className="location">Singapore</p>
                  <p>
                    80 Raffles Place, #25-01 UOB Plaza 1,
                    <br /> Singapore, 048624
                    <br /> +65 3129 2258
                  </p>
                </div>
              </div>
              <div className="column details is-6">
                <img src={JPLogo} alt="country logo" />
                <div className="addr">
                  <p className="location">Tokyo, Japan</p>
                  <p>
                    100-0005 東京都千代田区丸の内
                    <br /> 1-6-5 丸の内北口ビルディング 9F
                  </p>
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
