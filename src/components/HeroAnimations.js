import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
        <div className='relative flex justify-center items-center'>
            <motion.div
                initial={{
                    scale: 2,
                    opacity: 0,
                }}
                animate={{ rotate: 360, scale: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                onAnimationComplete={handleFirstAnimationComplete}
                className={`absolute h-[210px] w-[210px] border-l-[3px] border-l-white rounded-full`}
            />

            {isFirstAnimationComplete && (
                <motion.div
                    initial={{
                        scale: 2,
                        opacity: 0,
                    }}
                    animate={{ rotate: 360, scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={handleSecondAnimationComplete}
                    className={`absolute h-[210px] w-[210px] border-t-[3px] border-t-white rounded-full`}
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
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={handleThirdAnimationComplete}
                    className={`absolute h-[210px] w-[210px] border-r-[3px] border-r-white rounded-full`}
                />
            )}

            {isThirdAnimationComplete && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ rotate: 360, opacity: 1 }}
                    transition={{ duration: 2 }}
                    onAnimationComplete={handleFourthAnimationComplete}
                    className={`absolute h-[210px] w-[210px] z-[4] border-[10px] border-white border-b-black rounded-full`}
                />
            )}

            {isFourthAnimationComplete && (
                <>
                    <motion.div
                        initial={{x: -screenWidth, skewX: 30}}
                        animate={{ x: 0, y: 20 }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className={`absolute z-[3] h-[20px] w-[90vw] border bg-black`}
                    />
                    <motion.div
                        initial={{x: -50, y: -60, opacity: 0}}
                        animate={{ x: -5, y: 0, opacity: [0, 0.3, 0.5, 1] }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className={`absolute h-[20px] w-[90vw] border bg-white`}
                    />
                    <motion.div
                        initial={{x: screenWidth, skewX: -30}}
                        animate={{ x: 0, y: -20}}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className={`absolute z-[3] h-[20px] w-[90vw] border bg-gray-700`}
                    />
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 2 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', repeatType: 'reverse'}}
                    className={`absolute h-[200px] w-[200px] border border-white rounded-full`}
                />
                    
                </>
            )}

            <img 
            className=' z-[5] w-[200px] h-[200px] rounded-full'
            src='https://media.wired.com/photos/592676467034dc5f91beb80e/master/w_2560%2Cc_limit/MarkZuckerberg.jpg'/>



        </div>
    )
}

export default HeroAnimations
