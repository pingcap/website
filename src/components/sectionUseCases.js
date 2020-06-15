import '../styles/components/sectionUseCases.scss'

import React from 'react'
import { Box } from '@seagreenio/react-bulma'

import { navigate } from 'gatsby'
// import LinkWithArrow from '../components/linkWithArrow'

const SectionUseCase = prop => {
  const hasLightBg = prop.hasLightBg
  
  return (
    <section
      className={`PingCAP-Use-Cases section section-use-cases${
        hasLightBg ? ' has-light-background' : ''
      }`}
    >
      <div className="container">
        <h2 className="title section-title mb-4">Use Cases</h2>
        <div className="columns is-multiline oltp-and-htap">
          <div className="column is-full-mobile">
            <Box className="oltp">
              <div className="inner">
                <h3 className="title is-3 is-spaced">O L T P</h3>
                <h4 className="title is-4">Horizontally-scalable MySQL</h4>
                <div className="strikethrough-white" />
                <div className="subtitle is-5">
                  Scalable online transactional processing
                </div>
                <ul>
                  <li>200+ TB of production data in a single TiDB cluster</li>
                  <li>Trillions of rows in a single distributed table</li>
                </ul>
                {/* <LinkWithArrow
                  to="/"
                  linkText="See how modern applications scale"
                  outboundLink={false}
                /> */}
              </div>
            </Box>
          </div>
          <div className="column is-full-mobile">
            <Box className="htap">
              <div className="inner">
                <h3 className="title is-3 is-spaced">H T A P</h3>
                <h4 className="title is-4">Real-time Analytics</h4>
                <div className="strikethrough-white" />
                <div className="subtitle is-5">
                  Hybrid Transactional and Analytical Processing
                </div>
                <ul>
                  <li>Millisecond response times over trillions of rows</li>
                  <li>
                    No wall between transactional data and analytical reporting
                  </li>
                </ul>
                {/* <LinkWithArrow
                  to="/"
                  linkText="See how modern business makes decisions"
                  outboundLink={false}
                /> */}
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionUseCase
