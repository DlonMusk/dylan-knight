import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { GiPhone, GiEnvelope, GiShakingHands } from 'react-icons/gi'
import { ImLocation } from 'react-icons/im'
import { httpsCallable } from "firebase/functions";
import { functions } from '../firebase';
import { motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'




function Contact() {

  const sendEmail = httpsCallable(functions, 'sendEmail')

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (formData) => {
    const { name, email, subject, message } = formData

    if (formComplete) {
      sendEmail({ name: name, email: email, subject: subject, message: message })
        .then(() => setEmailSent(true))
        .catch(err => alert("Something went wrong"))
    }
  }

  const [nameEmpty, setNameEmpty] = useState(true)
  const [emailEmpty, setEmailEmpty] = useState(true)
  const [subjectEmpty, setSubjectEmpty] = useState(true)
  const [messageEmpty, setMessageEmpty] = useState(true)
  const [formComplete, setFormComplete] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [emailValid, setEmailValid] = useState(true)
  const [userEmail, setUserEmail] = useState('')

  


  const handleNameState = (event) => {
    if (event.target.value.length !== 0) {
      setNameEmpty(false)
    }
    else {
      setNameEmpty(true)
    }
  }

  const handleEmailState = (event) => {
    if (event.target.value.length !== 0) {
      setEmailEmpty(false)
    }
    else {
      setEmailEmpty(true)
    }

    if ((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(event.target.value) || event.target.value.length < 1) {
      setEmailValid(true)
    }
    else setEmailValid(false)
  }

  const handleEmailStateDebounced = useDebouncedCallback(handleEmailState, 700)


  const handleSubjectState = (event) => {
    if (event.target.value.length !== 0) {
      setSubjectEmpty(false)
    }
    else {
      setSubjectEmpty(true)
    }
  }

  const handleMessageState = (event) => {
    if (event.target.value.length !== 0) {
      setMessageEmpty(false)
    }
    else {
      setMessageEmpty(true)
    }
  }

  useEffect(() => {
    if (!nameEmpty && !emailEmpty && !messageEmpty && emailValid) {
      setFormComplete(true)
    }
    else setFormComplete(false)

  }, [emailValid, nameEmpty, emailEmpty, messageEmpty])


  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className='relative h-screen flex flex-col sm:justify-center justify-end items-center space-y-8 sm:pb-0 pb-20'>
      <h3 className='absolute top-20 sm:top-40 uppercase tracking-[15px] text-xl md:text-2xl'>Contact</h3>


      <div className=' flex flex-col items-center space-y-2 sm:space-y-10 mx-10 top-40'>
        {/* Message */}
        {/* TODO: Make this type out */}
        <h4 className='uppercase text-2xl text-center lg:text-4xl font-mono'>If you made it this far, lets chat!</h4>
        <div className='space-y-3 sm:space-y-8 text-left'>
          {/* Phone Number */}
          <div className='flex pr-5 sm:pr-7 items-center justify-center sm:tracking-[3px] space-x-2'>
            <GiPhone className='h-5 w-5 sm:h-7 sm:w-7' />
            <p className='sm:text-2xl text-lg'>226 962 4207</p>
          </div>

          <div className='flex pr-5 sm:pr-7 items-center justify-center sm:tracking-[3px] space-x-2'>
            {/* Email */}
            {/* TODO: Make clickable? */}
            <GiEnvelope className='h-5 w-5 sm:h-7 sm:w-7' />
            <p className='sm:text-2xl text-lg'>knight777@hotmail.ca</p>
          </div>

          <div className='flex pr-5 sm:pr-7 items-center justify-center sm:tracking-[3px] space-x-2'>
            {/* Location */}
            <ImLocation className='h-5 w-5 sm:h-7 sm:w-7' />
            <p className='sm:text-2xl text-lg'>London, Ontario, Canada</p>
          </div>
        </div>

      </div>

      {emailSent ? (
        <div className='flex flex-col space-y-2 w-fit'>
          <motion.div className='top-[35%] h-[400px] w-80 md:top-[38%] sm:h-[28rem] bg-[#98cdff] rounded-3xl flex flex-col justify-center items-center space-y-5'>
            <GiShakingHands className='h-28 w-28' />
            <p className='text-[#434854] text-4xl font-mono font-bold tracking-[3px]'>Thank you!</p>
            <p className='text-3xl text-center font-mono'> I will be in contact shortly!</p>
          </motion.div>
        </div>

      ) :

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-2 w-fit'>
          <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-2 sm:flex-row'>
            {/* name */}
            {/* email */}
            <input {...register('name')} className={`contactInput ${nameEmpty ? '' : 'bg-[#ffffffe1]'}`} type="text" placeholder='Name' onChange={handleNameState} />
            <input {...register('email')} className={`contactInput ${emailEmpty ? '' : 'bg-[#ffffffe1]'} ${emailValid ? '' : 'outline-1 focus:outline-[#ff4949d7] outline-[#ff4949d7]'}`} type="email" placeholder='Email' onChange={handleEmailStateDebounced} />
          </div>

          {/* subject */}
          <input {...register('subject')} className={`contactInput ${subjectEmpty ? '' : 'bg-[#ffffffe1]'}`} type='text' placeholder='Subject' onChange={handleSubjectState}></input>

          {/* message */}
          <textarea {...register('message')} className={`contactInput h-[150px] sm:h-[200px] ${messageEmpty ? '' : 'bg-[#ffffffe1]'} resize-none`} placeholder='Message' onChange={handleMessageState}></textarea>

          <button disabled={!formComplete} className={`contactInput bg-[#ffffff69] ${formComplete ? 'bg-[#ffffffe1]' : 'hover:outline-none'} border-none transition-all`} type='submit'>SUBMIT</button>


          <h1 className='text-center lg:p-10 uppercase text-2xl '>THANKS FOR VISITING</h1>

        </form>}



    </motion.div>
  )
}

export default Contact
