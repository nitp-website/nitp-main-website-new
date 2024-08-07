"use client"
import React from 'react'
import { CgProfile } from "react-icons/cg";
// import li from 'next/li';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
const Sidebar = ({setstate}) => {
    const router=useParams();
    const [active,setactive]=useState(false);

    const onClick=()=>{
        setactive(!active)
    }
  return (
    <div>
        {/* phone view */}
        <div className='block md:hidden'>
           <div >{!active?<RxHamburgerMenu className='m-2 text-xl border' onClick={onClick}/>:<RxCross2 className='m-2 text-xl border' onClick={onClick}/>}</div>
           <div className={`absolute ${active?"visible":"hidden"} bg-[rgb(255,249,239)] rounded-xl mx-3 p-3 text-sm text-[#941B0C] z-2`}>
            <ul className='border p-1 hover:border-[#941B0C]'>
                <li className='cursor-pointer' onClick={()=>{setstate(1)}}>Resume</li>
                <li className='cursor-pointer' onClick={()=>{setstate(2)}}>Educational Qualifications</li>
                <li className='cursor-pointer' onClick={()=>{setstate(3)}}>Teaching Experience</li>
                <li className='cursor-pointer' onClick={()=>{setstate(10)}}>Subjects Teaching</li>
                <li className='cursor-pointer' onClick={()=>{setstate(4)}}>Professional Services</li>
                <li className='cursor-pointer' onClick={()=>{setstate(5)}}>Administersative Responsibilities</li>
                <li className='cursor-pointer' onClick={()=>{setstate(6)}}>Journal Publications</li>
                <li className='cursor-pointer' onClick={()=>{setstate(8)}}>Phd Candidates</li>
                <li className='cursor-pointer' onClick={()=>{setstate(12)}}>Memberships</li>
                <li className='cursor-pointer' onClick={()=>{setstate(9)}}>PG/UG Projects</li>
                <li className='cursor-pointer' onClick={()=>{setstate(7)}}>Confernces</li>
                <li className='cursor-pointer' onClick={()=>{setstate(11)}}>Books/Chapters Written</li>
            </ul>
           </div>
        </div>
        {/* laptop view */}
        <div className='hidden md:block'>
           <div className='w-[280px] flex flex-col mt-6 ' >
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer'  onClick={()=>{setstate(1)}} >Resume</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer text-sm' onClick={()=>{setstate(2)}}>Educational Qualifications</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(3)}}>Teaching Experience</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(10)}}>Subjects Teaching</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(5)}}>Professional Services</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer text-xs' onClick={()=>{setstate(4)}} >Administersative Responsibilities</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(6)}}>Journal Publications</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(8)}}>Phd Candidates</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(12)}}>Memberships</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(9)}}>PG/UG Projects</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(7)}}>Confernces</span></div></div>
                <div className='flex mt-2'><CgProfile className='mt-1 mx-1'/><div className='bg-[#941B0C] h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' onClick={()=>{setstate(11)}}>Books/Chapters Written</span></div></div>
           </div>
        </div>
    </div>
  )
}

export default Sidebar