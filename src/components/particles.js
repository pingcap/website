import React from 'react'
import '../styles/components/particles.scss'

const Particles = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => {
        return <div className={`el${index + 1}`} key={index}></div>
      })}
    </>
  )
}

export default Particles
