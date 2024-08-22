import React from 'react'
import myImg from "../assets/prfile.jpg"

const HomeCard = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36'>
        <div>
            <img src={myImg} className='rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto' alt="" />
        </div>
        <div className='flex flex-col gap-5 lg:w-[50%]'>
            <h1 className='text-5xl lg:text-7xl mb-10 gradient-text'>Hey!</h1>
            <p className='text-gray-300 text-xl lg:text-2xl'>My name is Sanket, and I am a 21-year-old MERN Stack Developer from India. With a year of experience in creating web applications and designing systems that drive business growth, I have developed various websites, conducted workshops, and collaborated on diverse projects.</p>
            <p className='text-gray-300 text-xl lg:text-2xl'>I'm committed to furthering my skills and seeking new opportunities for career growth. Let's connect and create something amazing together.</p>
        </div>

        
    </div>
  )
}

export default HomeCard
