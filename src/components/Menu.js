import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiBarsArrowUp } from 'react-icons/hi2'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'


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
                    duration: 1
                }}
                className='sm:w-54 md:space-x-[30px] lg:space-x-[50px] flex-col mr-5 md:mr-0 md:flex-row  hidden sm:inline-flex font-mono tracking-[3px]'
            >
                <a href='#hero' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>Home</a>
                <a href='#about' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>About</a>
                <a href='#projects' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>Projects</a>
                <a href='#experience' className='hover:scale-125 hover:text-[#434854] transition-all duration-500'>Experience</a>
                
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
                    duration: 1.2
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
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className='menu absolute flex w-screen items-center h-auto left-0 right-0 top-0 bg-gradient-to-b from-[#ffffff7c] via-[#ffffff] to-[#ffffff7c] justify-center pb-6'
                            initial={{
                                opacity: 0.1,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 1
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.3
                                }
                            }}
                        >
                            <div className='flex flex-col uppercase text-[#434854] text-center tracking-[10px] text-[25px] font-mono items-center p-2 pb-5 space-y-3'>
                                <HiBarsArrowUp className='h-8 w-8 mt-3 text-[#434854]' onClick={() => setIsOpen(!isOpen)} />
                                <a className='border-b border-gray-200 shadow-lg p-1 w-screen bg-[#ffffffaf] transition-all focus:scale-110' href="#hero" onClick={() => setIsOpen(!isOpen)}><h1>Home</h1></a>
                                <a className='border-b border-gray-200 shadow-lg p-1 w-screen bg-[#ffffffaf] transition-all focus:scale-110' href="#about" onClick={() => setIsOpen(!isOpen)}><h1>About</h1></a>
                                <a className='border-b border-gray-200 shadow-lg p-1 w-screen bg-[#ffffffaf] transition-all focus:scale-110' href="#projects" onClick={() => setIsOpen(!isOpen)}><h1>Projects</h1></a>
                                <a className='border-b border-gray-200 shadow-lg p-1 w-screen bg-[#ffffffaf] transition-all focus:scale-110' href="#experience" onClick={() => setIsOpen(!isOpen)}><h1>Experience</h1></a>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>

            </motion.div>
        </div>
    )
}

export default Menu
