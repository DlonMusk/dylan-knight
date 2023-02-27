import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import HeroAnimations from './HeroAnimations'

function Hero() {

  const [text, count ] = useTypewriter({
    words: ['Hello, The Name is Dylan Knight', 'Guy who loves coffee', '<ButLovesToCodeMore />'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-screen">
      <h1>
        <HeroAnimations />
        <span>{text}</span>
        <Cursor cursorColor='white'/>
      </h1>
    </div>
  )
}

export default Hero
