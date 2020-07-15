import React, { useState, useEffect } from 'react'

const ColumnsForDebugging = ({ width }) => {
  const [display, setDisplay] = useState('none')
  useEffect(() => {
    const root = document.getElementsByTagName('html')[0]
    root.style.position = 'relative'
    window.showColumns = () => setDisplay('flex')
    window.hiddenColumns = () => setDisplay('none')
  }, [])
  const wrapperStyle = {
    position: 'absolute',
    display,
    width,
    left: '50%',
    top: 0,
    bottom: 0,
    transform: 'translateX(-50%)',
    // zIndex: 999
  }
  const colomnStyle = {
    flex: 1,
    borderLeft: '2px dotted #e4e4e4',
    alignSelf: 'stretch',
  }
  const lastColumnStyle = {
    ...colomnStyle,
    border: '2px dotted #e4e4e4',
  }
  return (
    <div style={wrapperStyle}>
      {Array.from({ length: 12 }).map((column, index) =>
        index !== 11 ? (
          <div style={colomnStyle} key={index}></div>
        ) : (
          <div style={lastColumnStyle} key={index}></div>
        )
      )}
    </div>
  )
}

export default ColumnsForDebugging
