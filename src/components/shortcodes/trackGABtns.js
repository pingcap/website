import PropTypes from 'prop-types'
import React from 'react'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { Button } from '@seagreenio/react-bulma'
import Link from '../IntlLink'
import '../../styles/components/trackGABtns.scss'

const TrackGABtns = ({ btnHrefs, btnLabels, btnTypes, btnTexts }) => {
  const btnHrefsArr = btnHrefs.split(',')
  const btnLabelsArr = btnLabels.split(',')
  const btnTypesArr = btnTypes.split(',')
  const btnTextsArr = btnTexts.split(',')
  const trackViews = (btnLabel, btnType) => {
    trackCustomEvent({
      category: btnType,
      action: 'click',
      label: btnLabel,
    })
  }

  return (
    <div className="PingCAP-TrackGABtns">
      <div className="trackable-btns">
        {btnHrefsArr &&
          btnHrefsArr.map(
            (btn, idx) =>
              btn && (
                <Button
                  key={idx}
                  as={Link}
                  to={btnHrefsArr[idx]}
                  color="primary"
                  outlined
                  rounded
                  onClick={trackViews(
                    `${btnLabelsArr[idx]}`,
                    `${btnTypesArr[idx]}`
                  )}
                >
                  {btnTextsArr[idx]}
                </Button>
              )
          )}
      </div>
    </div>
  )
}

TrackGABtns.propTypes = {
  btnHrefs: PropTypes.node.isRequired,
  btnLabels: PropTypes.node.isRequired,
  btnTypes: PropTypes.node.isRequired,
  btnTexts: PropTypes.node.isRequired,
}

export default TrackGABtns
