import '../styles/components/scrollTopButton.scss'

import React, { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

function useScrollTopButton() {
  const [show, switchShow] = useState(false)
  useEffect(() => {
    const listener = throttle(() => {
      const shouldShow = window.scrollY >= 200
      if (shouldShow !== show) {
        switchShow(shouldShow)
      }
    }, 200)
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [show])
  return show
}

const ScrollTopButton = () => {
  const show = useScrollTopButton()
  const hiddenStyle = {
    opacity: 0,
  }
  const showStyle = {
    opacity: 1,
  }
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <button
      className="scroll-top-button"
      type="button"
      style={show ? showStyle : hiddenStyle}
      onClick={scrollTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 284.929 284.929"
      >
        <path
          d="M282.082 195.285L149.028 62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 195.285C.95 197.191 0 199.378 0 201.853c0 2.474.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-.951 6.567-2.854l112.204-112.202 112.208 112.209c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566.001-2.476-.944-4.666-2.846-6.569z"
          fill="#FFF"
        ></path>
      </svg>
    </button>
  )
}

export default ScrollTopButton
