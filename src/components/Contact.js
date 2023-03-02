import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { GiPhone, GiEnvelope, GiPin } from 'react-icons/gi'
import { getFunctions, httpsCallable } from "firebase/functions";



function Contact() {

  const EmailAuth = process.env.REACT_APP_EMAIL_PASS
  // breaking
  const functions = getFunctions()
  const sendEmail = httpsCallable(functions, 'sendEmail')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    const { name, email, subject, message } = formData
    console.log(formData)
    //breaking
    sendEmail({name: name, email: email, subject: subject, message: message })
    .then(() => console.log("THANK YOU FOR REACHING OUT"))
    .catch(err => console.error(err))

  }

  const [nameEmpty, setNameEmpty] = useState(true)
  const [emailEmpty, setEmailEmpty] = useState(true)
  const [subjectEmpty, setSubjectEmpty] = useState(true)
  const [messageEmpty, setMessageEmpty] = useState(true)
  const [formComplete, setFormComplete] = useState(false)


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
      console.log(event.target.value.length)
      setEmailEmpty(false)
    }
    else {
      setEmailEmpty(true)
    }
  }

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
    if (!nameEmpty && !emailEmpty && !subjectEmpty && !messageEmpty) {
      setFormComplete(true)
    }
    else {
      setFormComplete(false)
    }
  }, [nameEmpty, emailEmpty, subjectEmpty, messageEmpty])



  


  return (
    <div className='relative h-screen flex flex-col justify-center items-center space-y-10'>
      <h3 className='absolute top-20 sm:top-40 uppercase tracking-[15px] text-xl md:text-2xl'>Contact</h3>


      <div className='flex flex-col items-center space-y-8 sm:space-y-10 mx-10'>
        {/* Message */}
        {/* TODO: Make this type out */}
        <h4 className='uppercase text-2xl text-center lg:text-4xl font-mono'>If you made it this far, lets chat!</h4>
        <div className='space-y-3 sm:space-y-8'>
          {/* Phone Number */}
          <div className='flex items center justify-center space-x-2'>
            <GiPhone className='h-7 w-7' />
            <p className='sm:text-2xl text-lg'>226 962 4207</p>
          </div>

          <div className='flex items center justify-center space-x-2'>
            {/* Email */}
            {/* TODO: Make clickable? */}
            <GiEnvelope className='h-7 w-7' />
            <p className='sm:text-2xl text-lg'>knight777@hotmail.ca</p>
          </div>

          <div className='flex items center justify-center space-x-2'>
            {/* Location */}
            <GiPin className='h-7 w-7' />
            <p className='sm:text-2xl text-lg'>London, Ontario, Canada</p>
          </div>
        </div>

      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-2 w-fit'>
        <div className='flex flex-col space-y-2  sm:space-y-0 sm:space-x-2 sm:flex-row'>
          {/* name */}
          {/* email */}
          <input {...register('name')} className={`contactInput ${nameEmpty ? '' : 'bg-[#ffffffe1]'}`} type="text" placeholder='Name' onChange={handleNameState} />
          <input {...register('email')} className={`contactInput ${emailEmpty ? '' : 'bg-[#ffffffe1]'}`} type="text" placeholder='Email' onChange={handleEmailState} />
        </div>

        {/* subject */}
        <input {...register('subject')} className={`contactInput ${subjectEmpty ? '' : 'bg-[#ffffffe1]'}`} type='text' placeholder='Subject' onChange={handleSubjectState}></input>

        {/* message */}
        <textarea {...register('message')} className={`contactInput sm:h-[200px] ${messageEmpty ? '' : 'bg-[#ffffffe1]'}`} placeholder='Message' onChange={handleMessageState}></textarea>

        <button className={`contactInput bg-[#ffffff69] ${formComplete ? 'bg-[#ffffffe1]' : ''} border-none transition-all hover:bg-[#ffffffce]`} type='submit'>SUBMIT</button>


        <h1 className='text-center mt-5 uppercase text-2xl '>THANKS FOR VISITING</h1>

      </form>
    </div>
  )
}

export default Contact
