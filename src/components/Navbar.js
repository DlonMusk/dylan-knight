import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { GiHamburgerMenu } from 'react-icons/gi'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='sticky top-0 p-5 flex justify-between items-center max-w-4xl mx-auto'>
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
      <motion.div
        initial={{
          x: 300,
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
        className='flex-row space-x-4 hidden md:inline-flex'
      >
        <h1>Projects</h1>
        <h1>Experience</h1>
        <h1>Algo Expert</h1>

      </motion.div>


      <motion.div
        initial={{
          x: 300,
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
        className='flex-row space-x-4 sm:hidden'
      >
        {
          //  w-6 h-6 ${ isOpen ? 'text-[#43485480]' : 'text-[#434854]'}
        }
        <GiHamburgerMenu
          className={` w-6 h-6 text-[#434854] focus:opacity-100 active:opacity-50 transition-opacity duration-1000`}
          onClick={() => setIsOpen(!isOpen)}
        />

        {isOpen && (
          <motion.div
            className='fixed right-0 p-5'
            initial={{
              y: -50,
              opacity: 0.5,
              rotateX: -90
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotateX: 0
            }}
            transition={{
              duration: 0.5
            }}
          >
            <div className='w-50'>
              {
                // TODO: style this more appropriately
              }
              <ul className='border rounded-lg border-solid border-white p-3 text-center'>
                <li>Projects</li>
                <li>Experience</li>
                <li>Algo Expert</li>
              </ul>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Navbar
