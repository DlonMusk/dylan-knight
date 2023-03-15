import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import LocallyDesktop from '../assets/LocallyDesktop.png'
import ChatGPTDesktop from '../assets/ChatGPTDesktop.png'
import MovieVsTriviaDesktop from '../assets/MovieVsTriviaDesktop.png'
import TechBlogDesktop from '../assets/TechBlogDesktop.png'

function Projects() {
  const data = [
    {
      title: 'Locally',
      description: 'Buy and sell goods and services to locals at the click of a button',
      tech: ['React', 'MongoDB', 'TailWindCss', 'Express.js'],
      image: LocallyDesktop,
      link: 'https://dry-badlands-98649.herokuapp.com/'
    },
    {
      title: 'Movie Vs Trivia',
      description: 'A movie trivia game where the user guesses against movies based on categories',
      tech: ['React', 'FireBase', 'TailWindCss'],
      image: MovieVsTriviaDesktop,
      link: 'https://movie-trivia-ed581.web.app/'
    },
    {
      title: 'A Very Simple Tech Blog',
      description: 'Create an account, make a post or reply to other users posts',
      tech: ['Handlebars.js', 'Sequelize', 'Express'],
      image: TechBlogDesktop,
      link: 'https://warm-woodland-22974.herokuapp.com/'
    },
    {
      title: 'ChatGpt Clone',
      description: 'With all the hype around ChatGPT I decided to check out the API and build my own',
      tech: ['TypeScript', 'React Native', 'OpenAI API', 'TailWindCss', 'FireBase'],
      image: ChatGPTDesktop,
      link: 'https://chatgpt-clone-ex40y05m7-dlonmusk.vercel.app/'
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
      <h3 className='absolute 3xl:top-32 top-20 uppercase tracking-[15px] text-xl md:text-2xl'>Projects</h3>

      <div
        style={{
          paddingLeft: screenWidth / 2,
          paddingRight: screenWidth / 2
        }}
        className='w-full flex space-x-[100px] overflow-x-scroll scrollbar-thin scrollbar-none p-10 snap-x snap-mandatory'>

        <AnimatePresence>
          {data.map(project => (
            <ProjectCard key={Math.random()} props={project} />
          ))}
        </AnimatePresence>

      </div>
      <div className='absolute bottom-7 text-white font-mono hidden text-center sm:flex sm:flex-col 3xl:bottom-11'>
        <h1 className='text-[22px]'>HOLD SHIFT AND SCROLL TO BROWSE PROJECTS</h1>
        <p>{'(This works for any horizontal scrolling in the browser)'}</p>
      </div>
    </motion.div>
  )
}

export default Projects
