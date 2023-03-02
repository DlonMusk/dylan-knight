import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import LocallyDesktop from '../assets/LocallyDesktop.png'

function Projects() {
  const data = [
    {
      id: 0,
      title: 'Locally',
      description: 'Buy and Sell Goods and Services to Locals at the Click of a Button',
      tech: ['React.js', 'MongoDB', 'TailWindCss', 'Express.js'],
      image: LocallyDesktop,
      link: ''
    },
    {
      id: 1,
      title: 'ChatGpt Clone',
      description: 'With all the Hype around ChatGPT I decided to Check Out the API and Build my Own',
      tech: ['TypeScript', 'OpenAI API', 'TailWindCss'],
      image: LocallyDesktop,
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'CODEX',
      description: 'Productivity app built for IOS and Web',
      tech: ['ReactNative.js', 'FireBase', 'TailWindCss'],
      image: LocallyDesktop,
      link: 'https://www.google.com'
    },
    {
      id: 3,
      title: 'ChatGpt Clone',
      description: 'With all the Hype around ChatGPT I decided to Check Out the API and Build my Own',
      tech: ['TypeScript', 'OpenAI API', 'TailWindCss'],
      image: LocallyDesktop,
      link: 'https://www.google.com'
    },
    {
      id: 4,
      title: 'CODEX',
      description: 'Productivity app built for IOS and Web',
      tech: ['ReactNative.js', 'FireBase', 'TailWindCss'],
      image: LocallyDesktop,
      link: 'https://www.google.com'
    },


  ]

const screenWidth = window.screen.width.toFixed()

  return (
    <div className='h-screen relative flex justify-evenly items-center text-left overflow-hidden max-w-full flex-col sm:flex-row mx-auto px-10'>
      <h3 className='absolute sm:top-40 top-20 uppercase tracking-[15px] text-xl md:text-2xl'>Projects</h3>

      <div style={{
     paddingLeft: screenWidth / 2,
     paddingRight: screenWidth / 2
    }} className='w-full flex space-x-[100px] overflow-x-scroll scrollbar-thin scrollbar-none  p-10 snap-x snap-mandatory'>
  
        {data.map(project => (
          <ProjectCard props={project}/>
        ))}
      </div>




    </div>
  )
}

export default Projects
