"use client"
import React from 'react'

const Title = ({title}) => {
  return (
    <div className='w-full flex justify-center items-center'>
        <span className='text-sm font-bold md:text-xl text-[#941B0C] mb-1 italic'>{title}</span>
    </div>
  )
}

export default Title