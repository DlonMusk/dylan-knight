import React, { useState } from 'react'
import { motion } from 'framer-motion'
import image from '../assets/DylanPhoto.png'

function HeroAnimations() {

    const [isFirstAnimationComplete, setIsFirstAnimationComplete] = useState(false);
    const [isSecondAnimationComplete, setIsSecondAnimationComplete] = useState(false);
    const [isThirdAnimationComplete, setIsThirdAnimationComplete] = useState(false);
    const [isFourthAnimationComplete, setIsFourthAnimationComplete] = useState(false);

    const handleFirstAnimationComplete = () => {
        setIsFirstAnimationComplete(true);
    };
    const handleSecondAnimationComplete = () => {
        setIsSecondAnimationComplete(true);
    };
    const handleThirdAnimationComplete = () => {
        setIsThirdAnimationComplete(true);
    };
    const handleFourthAnimationComplete = () => {
        setIsFourthAnimationComplete(true);
    };

    const screenWidth = window.screen.width.valueOf()

    return (
        <div className='relative flex justify-center items-center max-w-7xl'>
            <motion.div
                initial={{
                    scale: 2,
                    opacity: 0,
                }}
                animate={{ rotate: 360, scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                onAnimationComplete={handleFirstAnimationComplete}
                className={`absolute  border-l-[3px] border-l-white rounded-full`}
                style={{
                    width: (screenWidth > 700 ? '310px': '210px'),
                    height: (screenWidth > 700 ? '310px': '210px')
    
                }}
            />

            {isFirstAnimationComplete && (
                <motion.div
                    initial={{
                        scale: 2,
                        opacity: 0,
                    }}
                    animate={{ rotate: 360, scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={handleSecondAnimationComplete}
                    className={`absolute border-t-[3px] border-t-white rounded-full`}
                    style={{
                        width: (screenWidth > 700 ? '310px': '210px'),
                        height: (screenWidth > 700 ? '310px': '210px')
        
                    }}
                />
            )}

            {isSecondAnimationComplete && (
                <motion.div
                    initial={{
                        scale: 2,
                        opacity: 0,
                    }}
                    animate={{ rotate: 360, scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={handleThirdAnimationComplete}
                    className={`absolute border-r-[3px] border-r-white rounded-full`}
                    style={{
                        width: (screenWidth > 700 ? '310px': '210px'),
                        height: (screenWidth > 700 ? '310px': '210px')
        
                    }}
                />
            )}

            {isThirdAnimationComplete && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ rotate: 360, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    onAnimationComplete={handleFourthAnimationComplete}
                    className={`absolute  z-[4] border-[10px] border-white border-b-black rounded-full`}
                    style={{
                        width: (screenWidth > 700 ? '310px': '210px'),
                        height: (screenWidth > 700 ? '310px': '210px')
        
                    }}
                />
            )}

            {isFourthAnimationComplete && (
                <>
                    <motion.div
                        initial={{x: -screenWidth, skewX: 30}}
                        animate={{ x: 0, y: 20 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className={`absolute z-[3] h-[20px] w-[90vw] border bg-black max-w-7xl`}
                    />
                    <motion.div
                        initial={{x: -50, y: -60, opacity: 0}}
                        animate={{ x: -5, y: 0, opacity: [0, 0.3, 0.5, 1] }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className={`absolute h-[20px] w-[90vw] border bg-white max-w-7xl`}
                    />
                    <motion.div
                        initial={{x: screenWidth, skewX: -30}}
                        animate={{ x: 0, y: -20}}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className={`absolute z-[3] h-[20px] w-[90vw] border bg-gray-700 max-w-7xl`}
                    />
                    <motion.div
                    initial={{ opacity: (screenWidth > 700 ? 0 : 1 ), scale: (screenWidth > 700 ? 1 : 0.8 ) }}
                    animate={{ opacity: (screenWidth > 700 ? 1 : 0 ), scale: (screenWidth > 700 ? 2.8 : 1.8 )}}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeIn', repeatType: 'reverse'}}
                    className={`absolute h-[200px] w-[200px] border border-white ${(screenWidth > 700 ? '' : 'border-b-black' )} rounded-full z-[0]`}
                    />
                    
                </>
            )}

            <img 
            className=' z-[5] rounded-full'
                style={{
                    width: (screenWidth > 700 ? '300px': '200px'),
                    height: (screenWidth > 700 ? '300px': '200px')

                }}
                src={image} alt='Profile'/>


        </div>
    )
}

export default HeroAnimations
