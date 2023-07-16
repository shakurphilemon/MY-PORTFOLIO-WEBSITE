import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-800 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4'>
            <div className=' sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Phil, nice to meet you please feel free to look around.</p>
            </div>
            <div>
              <p>Dedicated and detail-oriented software programmer with experience in Java, JavaScript, MongoDB, Spring Frames, SQL and have strong background when it comes to other programming languages. I'm always eager  to learn and work with new technologies. I'm also a team player who is dedicated in delivering high-quality software on time and within budget and  longing to apply any proven skill when it comes to software. I'm resilient when it comes to working under pressure and always on the front of helping either a team or myself to achieve a special task. I dedicated one year of my time to work as a volunteer IT specialist at Munechner-Tafel a company that was established to help people in Munich that couldn't afford to buy food get food daily and i will say throughout my stay in the company  i had a lot of excellent work in which i help the company to develop a component in salesforce that was used to track vehicles in the company thats how much passion and dedication i have when it comes to anything designing and developing in the programming and coding world.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About