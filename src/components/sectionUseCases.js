import '../styles/components/sectionUseCases.scss'

import React from 'react'
import { Box } from '@seagreenio/react-bulma'
import { Link } from 'gatsby'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { navigate } from 'gatsby'

const SectionUseCase = (prop) => {
  const onCardClick = href => () => navigate(href)
  const hasLightBg = prop.hasLightBg
  return (
    <section className={`PingCAP-Use-Cases section section-use-cases${hasLightBg ? ' has-light-background' : ''}`}>
      <div className="container">
        <h2 className="title section-title">Use cases</h2>
        <div className="columns is-multiline oltp-and-htap">
          <div className="column is-full-mobile">
            <Box className="oltp" onClick={onCardClick('/')}>
              <div className="inner">
                <h3 className="title is-3 is-spaced">O L T P</h3>
                <h4 className="title is-4">
                  Scale-out MySQL for business growth
                </h4>
                <div className="strikethrough-white" />
                <div className="subtitle is-5">
                  Scalable online transactional processing
                </div>
                <ul>
                  <li>200+ TB production data within a single TiDB cluster</li>
                  <li>Trillions of Rows in a single distributed table</li>
                </ul>
                <Link className="link-with-arrow" to="/">
                  <ArrowForwardIcon />{' '}
                  <span>See how modern applications scale</span>
                </Link>
              </div>
            </Box>
          </div>
          <div className="column is-full-mobile">
            <Box className="htap" onClick={onCardClick('/')}>
              <div className="inner">
                <h3 className="title is-3 is-spaced">H T A P</h3>
                <h4 className="title is-4">Real-Time Analytics</h4>
                <div className="strikethrough-white" />
                <div className="subtitle is-5">
                  Hybrid transactional and analytical processing
                </div>
                <ul>
                  <li>Milliseconds response time over trillions of rows</li>
                  <li>
                    No wall between transactional data and analytical reporting
                  </li>
                </ul>
                <Link className="link-with-arrow" to="/">
                  <ArrowForwardIcon />{' '}
                  <span>See how modern business makes decisions</span>
                </Link>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionUseCase
