import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import HeroAnimations from './HeroAnimations'

function Hero() {

  const [text, count ] = useTypewriter({
    words: ['Hello, The Name is Dylan Knight', 'guy-who-loves-coffee.tsx', '<ButLovesToCodeMore />'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <HeroAnimations />
      
      <h1 className=''>
        <span>{text}</span>
        <Cursor cursorColor='white'/>
      </h1>
    </div>
  )
}

export default Hero
