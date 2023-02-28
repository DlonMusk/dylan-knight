import React from 'react'

function Projects() {
    const data = [
        {
            id: 0,
            name: 'Locally',
            description: 'Buy and Sell Goods and Services to Locals at the Click of a Button',
            tech: ['React.js', 'MongoDB', 'TailWindCss', 'Express.js'],
            image: 'IMAGEGOESHERE LOOK INTO FIRE STORAGE'
        },
        {
            id: 1,
            name: 'ChatGpt Clone',
            description: 'With all the Hype around ChatGPT I decided to Check Out the API and Build my Own',
            tech: ['TypeScript', 'OpenAI API', 'TailWindCss']
        },
        {
            id: 2,
            name: 'Locally',
            description: 'Buy and Sell Goods and Services to Locals at the Click of a Button',
            tech: ['React.js', 'MongoDB', 'TailWindCss', 'Express.js']
        },
        {
            id: 3,
            name: 'Locally',
            description: 'Buy and Sell Goods and Services to Locals at the Click of a Button',
            tech: ['React.js', 'MongoDB', 'TailWindCss', 'Express.js']
        },


    ]
  return (
    <div className='h-screen flex justify-center items-center'>
      {data.map(project => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  )
}

export default Projects
