import React from 'react'
import { motion } from 'framer-motion'
import TactysLogo from '../assets/TactycsLogo.png'


function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='relative h-screen flex flex-col text-center md:text-left md:flex-row justify-center lg:justify-evenly items-center max-w-7xl mx-auto space-y-6'>
            <h3 className='absolute top-20 3xl:top-32 uppercase tracking-[15px] text-xl md:text-2xl'>Experience</h3>

            <motion.div

                initial={{ y: 200, opacity: 0, scale: 0.7 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-[400px] lg:w-[600px] p-8 pb-4 md:text-xl space-y-2 sm:space-y-6 '
            >
                <h1 className='text-3xl uppercase tracking-[5px] font-mono'>Tactycs</h1>
                <div className='space-y-3 text-[13px] sm:text-[19px] sm:space-y-8'>
                    <p>As a Web Developer at Tactycs Marketing Software Company, I was responsible for developing and maintaining our suite of web-based software products. My key responsibilities included: Developing completely new fullstack products, maintaining and improving upon existing products and working closely with my team to colaberate on new features.
                    </p>
                    <p>
                        In this role, I gained valuable experience and developed a deeper understanding of the software industry. My ability to write clean, maintainable code and collaborate effectively with cross-functional teams helped to ensure the success of our products and the satisfaction of our clients.
                    </p>
                </div>

                <ul className='flex justify-center md:justify-start text-center space-x-3 font-thin'>
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Kotlin</li>
                    <li>TailWindCss</li>

                </ul>
            </motion.div>

            <div className='flex justify-center items-center'>

                <motion.img

                    initial={{ y: 30, x: 100, opacity: 0.4, scale: 0.7 }}
                    whileInView={{ y: 0, x: 0, opacity: 0.8, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className='z-[5] w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full md:rounded-none  flex-shrink-0'
                    src={TactysLogo}

                />
                <motion.div
                    initial={{ y: 30, x: 130, opacity: 0, scale: 0.7 }}
                    whileInView={{ y: -15, x: -15, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className='w-[180px] h-[180px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full bg-white absolute '
                />
            </div>


        </motion.div>
    )
}

export default Experience
