import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div className=' w-full h-screen bg-slate-600'>

      {/* Container */ }
      <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className=' text-pink-200'>Hi, My name is</p>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6] font-sans'>Philemon Anaman</h1>
        <h2 className=' text-4xl sm:text-7xl font-bold text-[#8892b0] font-sans'>I'm a Software Engineer</h2>
        <p className=' text-[#8892b0] py-4 max-w-[700px] font-sans'>
         I'm software engineer specialized in building APIs Web compoent
          and a lot more. Currently am focus on developing and building standalone apps
          using Java programming language, building components using JS and also working with
          database using spring boot.
        </p>
        <div>
         <button className=' text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-zinc-400 hover:border-zinc-400'>
             Check Out Work
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3' />
            </span>
           </button>
           
        </div>
      </div>
      
    </div>
  )
}

export default Home