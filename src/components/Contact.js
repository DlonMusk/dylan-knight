import React from 'react'
import { GiPhone, GiEnvelope, GiPin } from 'react-icons/gi'

function Contact() {
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
      <form className='flex flex-col space-y-2 w-fit'>
        <div className='flex flex-col space-y-2  sm:space-y-0 sm:space-x-2 sm:flex-row'>
          {/* name */}
          {/* email */}
          <input className='contactInput' type="text" placeholder='Name' />
          <input className='contactInput' type="text" placeholder='Email' />
        </div>

        {/* subject */}
        <input className='contactInput' type='text' placeholder='Subject'></input>

        {/* message */}
        <textarea className='contactInput sm:h-[200px]' placeholder='Message'></textarea>

        <button>SUBMIT</button>


        <h1 className='text-center mt-5 uppercase text-2xl '>THANKS FOR VISITING</h1>

      </form>
    </div>
  )
}

export default Contact
