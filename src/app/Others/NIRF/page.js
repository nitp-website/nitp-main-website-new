import React from 'react'

const page = () => {
  return (
    <div className='text-center text-black mt-14'>
        <h1 className='text-3xl font-extrabold text-red-900'>NIRF Data</h1>

        <h3 className='text-xl pt-8 text-red-800 font-bold' >Coordinator : Prof. Prakash Chandra </h3>
        <h4 className='text-lg text-neutral-700 pb-5'>email : <a href="https://mail.google.com/mail/?view=cm&to=prakash@nitp.ac.in" target="_blank">prakash@nitp.ac.in</a></h4>
        <a href="https://drive.google.com/file/d/1F85taARFc0uM-NX4Dg8CIbe8m9HwcRi1/view" target="_blank" >
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white  focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 ">
        NIRF 2024
        </span>
        </button>
        </a>
        
    </div>
  )
}

export default page