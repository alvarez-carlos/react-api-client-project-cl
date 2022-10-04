import React from 'react'
import Overlay from './Overlay'

import './Hero.css'


const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-left'></div>
      <div className='hero-right'></div>
      <Overlay />
    </div>
  )
}

export default Hero
