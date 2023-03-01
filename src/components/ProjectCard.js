import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

function ProjectCard({props}) {

    const { ref, inView } = useInView({threshold: 0.7})
    const animation = useAnimation()


    useEffect(() => {
        if(inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: 1.1
                }
            })
        }
        else {
            animation.start({
                opacity: 0.3,
                transition: {
                    duration: 1.1
                }
            })
        }
    }, [inView])

    const {id, title, description, tech, image, link} = props
    console.log(id, title, description, tech, image, link)

  return (
    <motion.div 
          initial={{opacity: 0.1}}
          whileInView={{opacity: 1, target: 500}}
          exit={{opacity: 0.1}}
          transition={{duration: 1.2}}
          className='cursor-pointer snap-center snap-always flex flex-col justify-center mt-10 items-center space-y-5 flex-shrink-0 bg-[#ffffff3e] h-[500px] w-[300px] sm:w-[650px] rounded-3xl' key={id}
          ref={ref}
          >
            <motion.img className='w-32 h-32 sm:w-[200px] sm:h-[200px] object-cover object-center rounded-lg' src={image} />
            <div className='text-center w-[250px]'>
              <h3 className='text-lg font-bold my-3 tracking-[10px] uppercase'>{title}</h3>
              <div className='flex justify-center space-x-3 text-center flex-wrap'>
                {tech.map(techName => (
                  <p className='font-thin'>{techName}</p>
                ))}
              </div>
              <p className='text-md font-mono mt-3'>{description}</p>
            </div>
          </motion.div>
  )
}

export default ProjectCard
