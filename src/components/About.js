import React from 'react'
import { motion } from 'framer-motion'
import image from '../assets/DylanPhoto.png'


function About() {


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='relative h-screen flex flex-col text-center md:text-left md:flex-row justify-evenly items-center max-w-7xl mx-auto'>
            <h3 className='absolute top-20 uppercase tracking-[15px] text-xl'>ABOUT</h3>

            <div className='flex justify-center items-center -mb-[45px]'>
                <motion.img
                    
                    initial={{ y: -30, x: -100, opacity: 0.4, scale: 0.7 }}
                    whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className='z-[5] w-[200px] h-[200px] rounded-full md:w-[400px] md:h-[400px] md:rounded-none mt-20 md:mt-0 '
                    src={image}

                />
                <motion.div
                    initial={{ y: 30, x: -100, opacity: 0, scale: 0.7 }}
                    whileInView={{ y: -10, x: -10, opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                    className='w-[200px] h-[200px] rounded-full md:w-[400px] md:h-[400px] md:rounded-none bg-white absolute mt-20 md:mt-0'
                />
            </div>

            <motion.div
                
                initial={{ y: -200, opacity: 0, scale: 0.7 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.6 }}
                viewport={{ once: true }}
                className='w-[400px] p-8'
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis risus arcu, et convallis massa auctor a. Mauris malesuada felis quis ipsum porta, euismod finibus metus sagittis. Aenean feugiat massa nec justo lobortis, vitae egestas ex venenatis. Mauris rutrum lacus nec felis commodo mattis. Mauris hendrerit velit ut congue varius. Nunc convallis auctor augue et faucibus. Etiam odio est, condimentum pellentesque imperdiet sed, dapibus eget nibh. Nullam dolor velit, fringilla ut mattis vel, posuere vitae ex.</p>
            </motion.div>
        </motion.div>
    )
}

export default About
