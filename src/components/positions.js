import '../styles/components/positions.scss'

import React, { useState, useEffect } from 'react'
import Loading from '../components/loading'
import Link from './IntlLink'
import axios from 'axios'

const Positions = ({ locale }) => {
  const [positions, setPositions] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchPositions() {
    try {
      const positionRes = (
        await axios.get('https://api.lever.co/v0/postings/pingcap?mode=json')
      ).data

      let _position = []

      // sort position by location
      if (locale === 'jp') {
        let _TokyoPosition = []
        let _NonTokyoPosition = []

        positionRes.forEach((p) => {
          console.log('p.categories.location', p.categories.location)
          if (p.categories.location === 'Tokyo') {
            _TokyoPosition.push(p)
          } else {
            _NonTokyoPosition.push(p)
          }
        })

        _position = _TokyoPosition.concat(_NonTokyoPosition)
      } else {
        _position = positionRes
      }

      setPositions(_position)
      setLoading(false)
    } catch (e) {
      console.log('Failed to fetch positions')
      return
    }
  }

  useEffect(() => {
    fetchPositions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="PingCAP-Positions columns is-multiline">
      {loading && <Loading />}
      {positions &&
        positions.map((p) => (
          <Link
            to={p.hostedUrl}
            key={p.hostedUrl}
            className="position column is-4"
            type="outBoundLink"
          >
            <div className="position-wrapper">
              <div className="position-title">{p.text}</div>
              <div className="location">
                {p.categories.location}/{p.categories.commitment}
              </div>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Positions
