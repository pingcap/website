import React, { useState, useEffect } from 'react'

const ColumnsForDebugging = () => {
  const gap = 32
  const desktop = 960 + gap * 2 + 'px'
  const widescreen = 1152 + gap * 2 + 'px'
  const fullhd = 1334 + gap * 2 + 'px'
  const desktopWidth = '960px'
  const widescreenWidth = '1152px'
  const fullhdWidth = '1334px'

  const getWidth = () => {
    if (window.matchMedia(`(min-width: ${fullhd})`).matches) {
      return fullhdWidth
    } else if (window.matchMedia(`(min-width: ${widescreen})`).matches) {
      return widescreenWidth
    } else {
      return desktopWidth
    }
  }

  const [display, setDisplay] = useState('none')
  const [width, setWidth] = useState(fullhdWidth)

  useEffect(() => {
    setWidth(getWidth())
    const listener = () => {
      setWidth(getWidth())
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [])

  useEffect(() => {
    const root = document.getElementsByTagName('html')[0]
    root.style.position = 'relative'
    window.showColumns = () => setDisplay('flex')
    window.hiddenColumns = () => setDisplay('none')
    return () => {
      delete window.showColumns
      delete window.hiddenColumns
    }
  }, [])
  const wrapperStyle = {
    position: 'absolute',
    display,
    width,
    left: '50%',
    top: 0,
    bottom: 0,
    transform: 'translateX(-50%)',
    zIndex: 999,
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
