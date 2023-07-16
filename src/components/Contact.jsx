import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-slate-300 flex justify-center items-center p-4'>
      <form  method="POST" action="https://getform.io/f/46b192b3-8f67-4be3-b2c2-51b4a0f74ca2" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600  text-gray-700'>Contact</p>
          <p className='text-gray-700 py-4'>You can reach out to me by sending an email</p>
        </div>
        <input className='p-1' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2' type="email" placeholder='Email' name='email'/>
        <textarea name="message" rows="10" placeholder='Message' className='p-2'></textarea>
        <button className='text-white border-2 hover:bg-cyan-900 hover:border-cyan-900 px-4 py-3 my-8 mx-auto flex items-center'>Click here to Send</button>
      </form>
     


      

    </div>
  )
}

export default Contact