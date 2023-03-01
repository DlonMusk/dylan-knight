import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

function Projects() {
  const data = [
    {
      id: 0,
      title: 'Locally',
      description: 'Buy and Sell Goods and Services to Locals at the Click of a Button',
      tech: ['React.js', 'MongoDB', 'TailWindCss', 'Express.js'],
      image: 'https://www.webfx.com/archive/blog/images/assets/images.sixrevisions.com/2010/04/20-05_frontpage_new_full.png',
      link: 'https://www.google.com'
    },
    {
      id: 1,
      title: 'ChatGpt Clone',
      description: 'With all the Hype around ChatGPT I decided to Check Out the API and Build my Own',
      tech: ['TypeScript', 'OpenAI API', 'TailWindCss'],
      image: 'https://www.webfx.com/archive/blog/images/assets/images.sixrevisions.com/2010/04/20-05_frontpage_new_full.png',
      link: 'https://www.google.com'
    },
    {
      id: 2,
      title: 'CODEX',
      description: 'Productivity app built for IOS and Web',
      tech: ['ReactNative.js', 'FireBase', 'TailWindCss'],
      image: 'https://www.webfx.com/archive/blog/images/assets/images.sixrevisions.com/2010/04/20-05_frontpage_new_full.png',
      link: 'https://www.google.com'
    },
    {
      id: 3,
      title: 'ChatGpt Clone',
      description: 'With all the Hype around ChatGPT I decided to Check Out the API and Build my Own',
      tech: ['TypeScript', 'OpenAI API', 'TailWindCss'],
      image: 'https://www.webfx.com/archive/blog/images/assets/images.sixrevisions.com/2010/04/20-05_frontpage_new_full.png',
      link: 'https://www.google.com'
    },
    {
      id: 4,
      title: 'CODEX',
      description: 'Productivity app built for IOS and Web',
      tech: ['ReactNative.js', 'FireBase', 'TailWindCss'],
      image: 'https://www.webfx.com/archive/blog/images/assets/images.sixrevisions.com/2010/04/20-05_frontpage_new_full.png',
      link: 'https://www.google.com'
    },


  ]

const screenWidth = window.screen.width.toFixed()

  return (
    <div className='h-screen relative flex justify-evenly items-center text-left overflow-hidden max-w-full flex-col sm:flex-row mx-auto px-10'>
      <h3 className='absolute top-20 uppercase tracking-[15px] text-xl'>Projects</h3>

      <div style={{
     paddingLeft: screenWidth / 2,
     paddingRight: screenWidth / 2
    }} className='w-full flex space-x-[100px] overflow-x-scroll p-10 snap-x snap-mandatory'>
  
        {data.map(project => (
          <ProjectCard props={project}/>
        ))}
      </div>




    </div>
  )
}

export default Projects
