"use client"
import React from 'react'
import Image from 'next/image'

import { CgProfile } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglescholar } from "react-icons/si";
import Link from 'next/link';
const FacultyHeader = ({name,image,research,designation,email}) => {
  return (
    <div className='h-fit md:h-4/6 w-full bg-[#c23422]  backdrop-blur-xl p-2 mt-4 md:flex rounded-lg'>
        <div className='w-full flex justify-center items-center md:w-fit'>{image?<Image alt='blank' src={image} className='rounded-full h-32 w-32 md:h-44 md:w-52 md:mx-8' width={250} height={250} loading='lazy'/>:<CgProfile className='rounded-full h-32 w-32 md:h-44 md:w-52 md:mx-8'></CgProfile>}</div>
        <div className='w-full flex flex-col  mt-5 border border-black rounded-md p-2 md:mt-2 md:mx-4' style={{boxShadow:"2px 2px 2px 1px black"}}>
          <div className='flex text-white text-sm lg:text-lg  md:flex-row'><span className='flex font-bold mt-2'><CgProfile className='text-white mx-2 my-1 text-sm md:text-lg'/> Name :</span><span className='mx-3 mt-2 md:ml-20'>{name}</span></div>
          <div className='flex text-white text-sm lg:text-lg  md:flex-row'><span className='flex font-bold mt-2'><CgProfile className='text-white mx-2 my-1 text-sm md:text-lg'/>Designation :</span><span className='mx-3 mt-2'>{designation}</span></div>
          <div className='flex text-white text-sm lg:text-lg  md:flex-row'><span className='flex font-bold mt-2'><MdOutlineMail className='text-white mx-2 my-1 text-sm md:text-lg'/>Email :</span><span className='mx-3 mt-2 md:ml-20'><Link href={`mailto:${email?email:""}`} >{email}</Link></span></div>
          <div className='flex text-white text-sm lg:text-lg flex-col md:flex-row'><span className='flex font-bold mt-2 w-fit'><SiGooglescholar className='text-white mx-2 my-1 text-sm md:text-lg'/> Research Interest :</span><span className='mx-3 mt-2 md:ml-16 md:text-md'>{research}</span></div>
        </div>
    </div>
  )
}

export default FacultyHeader