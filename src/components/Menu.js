import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiBarsArrowUp } from 'react-icons/hi2'
import { motion } from 'framer-motion'


function Menu() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='flex'>
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
                className='sm:w-54 md:space-x-[30px] lg:space-x-[50px] flex-col mr-5 md:mr-0 md:flex-row  hidden sm:inline-flex font-mono tracking-[3px]'
            >
                <a href='#about' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>About</a>
                <a href='#projects' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>Projects</a>
                <a href='#experience' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>Experience</a>
                <a href='#algo-expert' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>Algo Expert</a>
                {/* ADD SLIDING UNDERLINE */}

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
                className='flex-col sm:hidden'
            >
                {
                    //  
                }
                <GiHamburgerMenu
                    className={` w-6 h-6 z-10 transition-all ${isOpen ? 'text-[#43485400]' : 'text-[#434854]'} duration-700 `}
                    onClick={() => setIsOpen(!isOpen)}
                />


                <motion.div
                    className='menu absolute flex w-screen items-center h-auto left-0 right-0 top-0 bg-[#ffffff73] justify-center'
                    initial={{

                        opacity: 0,
                    }}
                    animate={{
                        y: (isOpen ? 0 : -280),
                        opacity: 0.5,
                    }}
                    transition={{
                        duration: 1
                    }}
                >
                    <div className='flex flex-col text-black text-center tracking-[8px] text-[25px] font-tilt-prism items-center p-2 pb-5 space-y-2'>
                        <HiBarsArrowUp className='h-8 w-8 mt-3' onClick={() => setIsOpen(!isOpen)} />
                        <a className='border-b border-gray-50' href="hero"><h1>Projects</h1></a>
                        <a className='border-b border-gray-50' href="about"><h1>Experience</h1></a>
                        <a className='border-b border-gray-50' href="projects"><h1>Algo Expert</h1></a>
                        <a className='border-b border-gray-50' href="experience"><h1>Contact Me</h1></a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Menu
