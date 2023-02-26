import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

function Hero() {

  const [text, count ] = useTypewriter({
    words: ['Hello, The Name is Dylan Knight', 'Guy who loves coffee', '<ButLovesToCodeMore />'],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='white'/>
      </h1>
    </div>
  )
}

export default Hero
