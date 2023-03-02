import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Menu from './Menu'

function Navbar() {



  return (
    <div className='sticky z-[10] top-0 p-5 flex justify-between items-center max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-[90rem] mx-auto'>
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.8
        }}
        className='flex flex-row items-center space-x-2'
      >
        <SocialIcon
          style={{
            width: '4rem',
            height: '4rem'
          }}
          url='https://github.com/DlonMusk'
          fgColor='#434854'
          bgColor='transparent'
          label='GitHub'
          className='transition-all duration-500 hover:opacity-50'
        />
        <div className='flex items-center transition-all duration-500 hover:opacity-50'>
          <SocialIcon
            style={{
              width: '4rem',
              height: '4rem'
            }}
            network='email'
            fgColor='#434854'
            bgColor='transparent'
            onClick={() => window.location.href = '#contact'}
            className='cursor-pointer'
          />
          <a href='#contact' className='text-[#434854] font-mono hidden sm:inline-flex md:text-xl'>Get In Touch</a>
        </div>
      </motion.div>
      <Menu />
    </div>
  )
}

export default Navbar
