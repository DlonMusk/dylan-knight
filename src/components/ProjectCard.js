import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'

function ProjectCard({ props }) {

    const screenWidth = window.screen.width.toFixed()
    console.log(screenWidth)

    const ref = useRef()
    const inView = useInView(ref, { margin: `0px -${(screenWidth / 3)}px 0px -${(screenWidth / 3)}px` })
    const animation = useAnimation()


    useEffect(() => {
        console.log(inView)
        if (inView) {
            animation.start({
                opacity: 1,
                // scale: 1,
                transition: {
                    duration: 1.2
                }
            })
        }
        else {
            animation.start({
                opacity: 0.3,
                // scale: 0.8,
                transition: {
                    duration: 0.8
                }
            })
        }
    }, [inView])

    const { id, title, description, tech, image, link } = props




    return (

        <motion.div
            initial={{ opacity: 0.3}}
            viewport={{ margin: `0px -${(screenWidth / 3)}px 0px -${(screenWidth / 3)}px` }}
            whileInView={{ opacity: 1,}}
            exit={{ opacity: 0.3}}
            transition={{ duration: 1.2 }}
            onClick={() => window.open(link)}
            
            //animate={animation}

            className='cursor-pointer snap-center snap-always flex flex-col justify-center mt-10 sm:mt-24 items-center space-y-5 flex-shrink-0 bg-[#ffffff3e] h-[500px] w-[300px] sm:w-[650px] rounded-3xl' key={id}

            //ref={ref}
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
