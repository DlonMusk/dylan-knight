import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import HeroAnimations from './HeroAnimations'

function Hero() {

  const [text, count] = useTypewriter({
    words: ['Hello, The Name is Dylan Knight', 'guy-who-loves-coffee.tsx', '<ButLovesToCodeMore />'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <HeroAnimations />

      <div className='z-[5]'>
        <h2 className='text-sm uppercase sm:tracking-[15px] tracking-[10px] '>
          Software Engineer
        </h2>
        <h1 className='sm:text-[3rem] mt-5 text-xl text-[#434854b9] font-mono'>
          <span >{text}</span>
          <Cursor cursorColor='white' />
        </h1>
      </div>

    </div>
  )
}

export default Hero
