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

    const divRadius = '200px'

    return (
        <div className='relative flex justify-center items-center'>
            <motion.div
                initial={{
                    scale: 2,
                    opacity: 0
                }}
                animate={{ rotate: 360, scale: 1, opacity: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                }}
                onAnimationComplete={handleFirstAnimationComplete}
                className={`fixed h-[${divRadius}] w-[${divRadius}] border-l border-l-white rounded-full`}
            />

            {isFirstAnimationComplete && (
                <motion.div
                    initial={{
                        scale: 2,
                        opacity: 0
                    }}
                    animate={{ rotate: 360, scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={handleSecondAnimationComplete}
                    className={`fixed h-[${divRadius}] w-[${divRadius}] border-t border-t-white rounded-full`}
                />
            )}

            {isSecondAnimationComplete && (
                <motion.div
                    initial={{
                        scale: 2,
                        opacity: 0
                    }}
                    animate={{ rotate: 360, scale: 1, opacity: 1 }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                    }}
                    onAnimationComplete={handleThirdAnimationComplete}
                    className={`fixed h-[${divRadius}] w-[${divRadius}] border-r border-r-white rounded-full`}
                />
            )}

            {isThirdAnimationComplete && (
                <motion.div
                initial={{opacity: 0}}
                animate={{ rotate: 360, opacity: 1}}
                transition={{ duration: 2}}
                onAnimationComplete={handleFourthAnimationComplete}
                className={`fixed h-[${divRadius}] w-[${divRadius}] border border-white border-b-black rounded-full`}
                />
            )}

            {isFourthAnimationComplete && (
                <div
                    className={`fixed h-[${divRadius}] w-[${divRadius}] border border-white border-b-black rounded-full animate-ping duration-500`}
                />
            )}

            

        </div>
    )
}

export default HeroAnimations
