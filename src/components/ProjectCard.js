import React from 'react'
import { motion } from 'framer-motion'

function ProjectCard({ props }) {

    const screenWidth = window.screen.width.toFixed()



    const { title, description, tech, image, link } = props

    const margins = screenWidth < 2000 ? Math.floor((screenWidth / 3)) : Math.floor((screenWidth / 2))


    return (
        <motion.div
                key={Math.random()}
                initial={{ opacity: 0.3, scale: 0.9 }}
                viewport={{ margin: `0px -${margins}px 0px -${margins}px`}}
                whileInView={{ opacity: 1, scale: 1.05 }}
                exit={{ opacity: 0.3, scale: 0.9 }}
                transition={{ duration: 0.2, delay: 0.3 }}
                onClick={() => window.open(link)}
                className=' relative cursor-pointer snap-center snap-always flex flex-col justify-center mt-10 sm:mt-24 items-center space-y-5 flex-shrink-0 bg-[#ffffff3e] h-[500px] w-[300px] md:h-[700px] md:w-[400px] xl:h-[800px] xl:w-[650px] rounded-3xl duration-300'
            >
                <h3 className='absolute top-10 sm:top-[5rem] md:text-2xl text-lg font-bold my-3 mb-[30px] text-center tracking-[10px] uppercase'>{title}</h3>
                <motion.img className='w-40 h-30 lg:w-[300px] lg:h-[200px] xl:w-[500px] xl:h-[300px] object-center  flex-shrink-0 object-scale-down rounded-lg' src={image} />
                <div className='text-center w-[250px] lg:w-[300px]'>

                    <div className='flex justify-center space-x-3 text-center flex-wrap'>
                        {tech.map(techName => (
                            <p key={Math.random()} className='font-thin'>{techName}</p>
                        ))}
                    </div>
                    <p className='text-md sm:text-lg font-mono mt-3'>{description}</p>
                </div>
            </motion.div>
    )
}

export default ProjectCard
