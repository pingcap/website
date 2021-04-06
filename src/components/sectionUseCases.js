import '../styles/components/sectionUseCases.scss'

import React from 'react'
import { Box } from '@seagreenio/react-bulma'
import { FormattedMessage } from 'react-intl'

const SectionUseCase = (prop) => {
  const hasLightBg = prop.hasLightBg

  return (
    <section
      className={`PingCAP-Use-Cases section section-use-cases${
        hasLightBg ? ' has-light-background' : ''
      }`}
    >
      <div className="container">
        <h2 className="title section-title mb-4">
          <FormattedMessage id="components.useCases.title" />
        </h2>
        <div className="columns is-multiline oltp-and-htap">
          <div className="column is-full-mobile">
            <Box className="oltp">
              <div className="inner">
                <h3 className="title is-3 is-spaced">
                  <FormattedMessage id="components.useCases.oltp.title" />
                </h3>
                <h4 className="title is-4">
                  <FormattedMessage id="components.useCases.oltp.subTitle" />
                </h4>
                <div className="strikethrough-white" />
                <div className="subtitle is-5">
                  <FormattedMessage id="components.useCases.oltp.detail.desc" />
                </div>
                <ul>
                  <li>
                    <FormattedMessage id="components.useCases.oltp.detail.list1" />
                  </li>
                  <li>
                    <FormattedMessage id="components.useCases.oltp.detail.list2" />
                  </li>
                </ul>
              </div>
            </Box>
          </div>
          <div className="column is-full-mobile">
            <Box className="htap">
              <div className="inner">
                <h3 className="title is-3 is-spaced">
                  <FormattedMessage id="components.useCases.htap.title" />
                </h3>
                <h4 className="title is-4">
                  <FormattedMessage id="components.useCases.htap.subTitle" />
                </h4>
                <div className="strikethrough-white" />
                <div className="subtitle is-5">
                  <FormattedMessage id="components.useCases.htap.detail.desc" />
                </div>
                <ul>
                  <li>
                    <FormattedMessage id="components.useCases.htap.detail.list1" />
                  </li>
                  <li>
                    <FormattedMessage id="components.useCases.htap.detail.list2" />
                  </li>
                </ul>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionUseCase
