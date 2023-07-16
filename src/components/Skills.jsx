import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import JavaImg from '../assets/Java.png';
import Github from '../assets/github.png';
import Mongo from '../assets/mongo.png';
import SQL from '../assets/logoAzureSql.png';
import Tailwind from '../assets/tailwind.png';
import Node from '../assets/node.png';
import AWS from '../assets/aws.png';
import SpringBoot from '../assets/spring-boot-logo.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-gray-800 text-gray-300' >
    {/* Container */ }
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
       <p className=' text-4xl font-bold inline border-b-4 border-pink-600 font-sans'>Experience</p>
       <p className='py-4'>These are the Technologies I have worked with</p>
      </div>
      <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={HTML} alt="Html icon"/>
          <p>HTML</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={CSS} alt="CSS icon"/>
          <p>CSS</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={Javascript} alt="Javascript icon"/>
          <p>JAVASCRIPT</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={ReactJs} alt="Html icon"/>
          <a href='/'><p>REACT</p></a>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={JavaImg} alt="Html icon"/>
          <p>JAVA</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={Github} alt="Html icon"/>
          <p>GITHUB</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={Mongo} alt="Html icon"/>
          <p>MONGODB</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={SQL} alt="Html icon"/>
          <p>SQL</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={Tailwind} alt="Html icon"/>
          <p>TAILWIND</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={Node} alt="Html icon"/>
          <p>NODEJS</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={AWS} alt="Html icon"/>
          <p>AWS</p>
        </div>
        <div  className='shadow-md shadow-gray-800 hover:scale-110 duration-500'>
          <img className=' w-20 mx-auto' src={SpringBoot} alt="Html icon"/>
          <p>SPRING BOOT</p>
        </div>
        
        
        
      </div>
    </div>
    </div>
  )
}

export default Skills