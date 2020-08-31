import copy from 'copy-to-clipboard'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../../styles/components/copyBtn.scss'
import EventEmitter from '../../lib/eventEmitter'
import { selectText } from '../../lib/dom'
const WithCopy = () => {
  const eventEmitter = EventEmitter.getInstance()
  const [copied, setCopied] = useState(false)
  const btnEl = useRef(null)
  const thisBtnID = useRef(0)
  const clickToCopy = useCallback(() => {
    const copiedNode = btnEl.current.nextElementSibling
    const txt = copiedNode.textContent
    copy(txt)
    eventEmitter.emit('hasCopied', thisBtnID.current)
    selectText(copiedNode)
  }, [])
  useEffect(() => {
    thisBtnID.current = eventEmitter.getListenerNumber('hasCopied')
    eventEmitter.on('hasCopied', (btnID) => {
      if (btnID === thisBtnID.current) {
        setCopied(true)
      } else {
        setCopied(false)
      }
    })
  }, [])
  return (
    <button ref={btnEl} onClick={clickToCopy} className="PingCAP-copyBtn">
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}
WithCopy.propTypes = {
  tag: PropTypes.string,
}

export default WithCopy
