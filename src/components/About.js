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
            <h3 className='absolute top-20 3xl:top-32 uppercase tracking-[15px] text-xl md:text-2xl'>ABOUT</h3>

            <div className='flex justify-center items-center -mb-[45px]'>
                <motion.img

                    initial={{ y: -30, x: -100, opacity: 0.4, scale: 0.7 }}
                    whileInView={{ y: 0, x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className='z-[5] w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full md:rounded-none mt-20 md:mt-0 '
                    src={image}

                />
                <motion.div
                    initial={{ y: 30, x: -100, opacity: 0, scale: 0.7 }}
                    whileInView={{ y: -10, x: -10, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full md:rounded-none bg-white absolute mt-20 md:mt-0'
                />
            </div>

            <motion.div

                initial={{ y: -200, opacity: 0, scale: 0.7 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-[400px] lg:w-[600px] p-8 -mt-10 sm:mt-0 md:text-xl'
            >
                <div className='space-y-3 text-[13px] sm:text-[19px] sm:space-y-8'>
                    <p className=''>
                        Throughout my life, I have always found great joy in problem-solving, being imaginative, and building. My passion for these activities was first ignited at the age of 7, when I received a Lego set named "The Knights Kingdom". The process of meticulously following the instructions and building the final product filled me with a sense of happiness. I relished the opportunity to diverge from the prescribed format and add my own creative touch to the design. This experience instilled in me a deep realization that I thrive in structured environments that also allow for ample room for creativity.
                    </p>

                    <p className=''>
                        As I look towards the future, I am eager to become part of a team that shares my passion for cutting-edge technology, has a clear vision of how to enhance the end-user experience, and values structured imagination. I believe that my skills and drive would be best utilized in an environment that allows me to leverage my strengths and contribute towards a common goal.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About
