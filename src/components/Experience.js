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
            <h3 className='absolute top-24 sm:top-40 uppercase tracking-[15px] text-xl md:text-2xl'>Experience</h3>

            <motion.div
                
                initial={{ y: 200, opacity: 0, scale: 0.7 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-[400px] lg:w-[500px] p-8 md:text-xl space-y-2 sm:space-y-6 '
            >
                <h1 className='text-3xl uppercase tracking-[5px] font-mono'>Tactycs</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis risus arcu, et convallis massa auctor a. Mauris malesuada felis quis ipsum porta, euismod finibus metus sagittis. Aenean feugiat massa nec justo lobortis, vitae egestas ex venenatis. Mauris rutrum lacus nec felis commodo mattis. Mauris hendrerit velit ut congue varius. Nunc convallis auctor augue et faucibus. Etiam odio est, condimentum pellentesque imperdiet sed, dapibus eget nibh. Nullam dolor velit, fringilla ut mattis vel, posuere vitae ex.</p>
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
                    className='z-[5] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full md:rounded-none  flex-shrink-0'
                    src={TactysLogo}

                />
                <motion.div
                    initial={{ y: 30, x: 130, opacity: 0, scale: 0.7 }}
                    whileInView={{ y: -15, x: -15, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] rounded-full bg-white absolute '
                />
            </div>

           
        </motion.div>
  )
}

export default Experience
