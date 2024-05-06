import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/curtain.png'

const Hero = () => {
  return (
    <div className='hero' >
      <div className="hero-left">
        <h2>For the first time ever</h2>
        <div>
            <div className="hero-hand-icon">
                <p>Design</p>
                <img src={hand_icon} alt="" />
            </div>
            <p>your own</p>
            <p>product</p>
        </div>
        <div className="hero-latest-btn">
            <div>Design now</div>
            <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
