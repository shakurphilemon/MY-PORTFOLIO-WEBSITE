import React from 'react'
import workingImg from '../assets/Project2.png'
import projectWork from '../assets/Project.png'
import portfolioImage from '../assets/PortoflioImg.png'
import springBootProject from '../assets/springProject.png'
import AWS from '../assets/AWSPROJECT.png'
import MongoDBProject from '../assets/MongoDB.png'



const Work = () => {
  return (
    <div name="Work" className='w-full md:h-screen text-gray-300  bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-4'>Check Out some of my recent Work</p>
          </div>
          <div 
          className='grid sm:grid-cols-4 md:grid-cols-3 gap-6'>

            {/* {Grid Items} */}
            <div style={{backgroundImage: `url(${workingImg})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Saleforces Component
              
                  </span>
                  <div className='py-8 text-center'>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                  </div>
                  <div>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${portfolioImage})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    ReactJS Website 
              
                  </span>
                  <div className='py-8 text-center'>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                  </div>
                  <div>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                  </div>
                </div>
              </div>

              
              <div style={{backgroundImage: `url(${projectWork})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Saleforces Component
              
                  </span>
                  <div className='py-8 text-center'>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                  </div>
                  <div>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                  </div>

                </div>
              </div>
              
              <div style={{backgroundImage: `url(${springBootProject})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    Spring Boot Project
              
                  </span>
                  <div className='py-8 text-center'>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                  </div>
                  <div>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${AWS})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    AWS Project
              
                  </span>
                  <div className='py-8 text-center'>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                  </div>
                  <div>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                  </div>
                </div>
              </div>

              <div style={{backgroundImage: `url(${MongoDBProject})`}}
             className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <div className='opacity-0 group-hover:opacity-100'>
                  <span className='text-2xl font-bold text-white tracking-wider'>
                    MongoDB Project
              
                  </span>
                  <div className='py-8 text-center'>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button></a>
                  </div>
                  <div>
                    <a href='/'><button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button></a>
                  </div>
                </div>
              </div>
           </div>

        </div>
    </div>
  )
}

export default Work