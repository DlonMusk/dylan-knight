import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Menu from './Menu'

function Navbar() {

  

  return (
    <div className='sticky z-[10] top-0 p-5 flex justify-between items-center max-w-6xl mx-auto'>
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
        className='flex flex-row space-x-2'
      >
        <SocialIcon
          url='https://github.com/DlonMusk'
          fgColor='#434854'
          bgColor='transparent'
          label='GitHub'
        />
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='#434854'
          bgColor='transparent'
        />
      </motion.div>
      <Menu />
    </div>
  )
}

export default Navbar
