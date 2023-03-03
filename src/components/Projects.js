import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import LocallyDesktop from '../assets/LocallyDesktop.png'
import ChatGPTDesktop from '../assets/ChatGPTDesktop.png'

function Projects() {
  const data = [
    {
      title: 'Locally',
      description: 'Buy and Sell Goods and Services to Locals at the Click of a Button',
      tech: ['React.js', 'MongoDB', 'TailWindCss', 'Express.js'],
      image: LocallyDesktop,
      link: 'https://dry-badlands-98649.herokuapp.com/'
    },
    {
      title: 'ChatGpt Clone',
      description: 'With all the Hype around ChatGPT I decided to Check Out the API and Build my Own',
      tech: ['TypeScript', 'OpenAI API', 'TailWindCss'],
      image: ChatGPTDesktop,
      link: 'https://chatgpt-clone-ex40y05m7-dlonmusk.vercel.app/'
    },
    {
      title: 'CODEX',
      description: 'Productivity app built for IOS and Web',
      tech: ['ReactNative.js', 'FireBase', 'TailWindCss'],
      image: LocallyDesktop,
      link: 'https://www.google.com'
    },
    {
      title: 'ChatGpt Clone',
      description: 'With all the Hype around ChatGPT I decided to Check Out the API and Build my Own',
      tech: ['TypeScript', 'OpenAI API', 'TailWindCss'],
      image: LocallyDesktop,
      link: 'https://www.google.com'
    },
    {
      title: 'CODEX',
      description: 'Productivity app built for IOS and Web',
      tech: ['ReactNative.js', 'FireBase', 'TailWindCss'],
      image: LocallyDesktop,
      link: 'https://www.google.com'
    },


  ]

  const screenWidth = window.screen.width.toFixed()

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className='h-screen relative flex justify-evenly items-center text-left overflow-hidden max-w-full flex-col sm:flex-row mx-auto px-10'>
      <h3 className='absolute sm:top-40 top-24 uppercase tracking-[15px] text-xl md:text-2xl'>Projects</h3>

      <div style={{
        paddingLeft: screenWidth / 2,
        paddingRight: screenWidth / 2
      }} className='w-full flex space-x-[100px] overflow-x-scroll scrollbar-thin scrollbar-none p-10 snap-x snap-mandatory'>

        <AnimatePresence>
          {data.map(project => (
            <ProjectCard key={Math.random()} props={project} />
          ))}
        </AnimatePresence>

      </div>
    </motion.div>
  )
}

export default Projects
