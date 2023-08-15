import React from 'react'
import img1 from "..//bgimg2.jpg"

function Main() {
  return (
    <div className='w-full h-96 border border-gray-100 relative'>
    <img src={img1} alt='cover-bg' className='h-full w-full object-cover bg-no-repeat bg-bottom' />
    <div className='absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px]'>
      <h2 className='text-3xl font-bold mb-2 '>Hi Guys Welcome</h2>
      <h3 className='text-xl'>Look at this project!! Lets go</h3>
      <h3 className='text-xl'>The goal is to learn</h3>
    </div>
    </div>
  )
}

export default Main