"use client"
import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';
const Sidebar = ({setstate,resume,books,article,conference,memebership,education,publications,subjects,pg_ug_projects,phd_students,work,professional,curr_admin,past_admin}) => {
    const [active,setactive]=useState(false);
    const onClick=()=>{
        setactive(!active)
    }

    
  return (
    <div>
        {/* phone view bg-[rgb(255,249,239)]*/}
        <div className='block md:hidden'>
           <div >{!active?<RxHamburgerMenu className='m-2 text-xl border text-black' onClick={onClick}/>:<RxCross2 className='m-2 text-xl border text-black' onClick={onClick}/>}</div>
           <div className={`absolute ${active?"visible":"hidden"} bg-[#941B0C]  rounded-xl mx-3 p-3 text-sm text-[rgb(255,249,239)] z-2`}>
            <ul className='flex flex-col gap-2 border-2 p-2 hover:border-[#941B0C]'>
                {resume?<li className='flex cursor-pointer ' onClick={()=>{setstate(1);setactive(!active);}}><Image src={"/resume.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Resume</span></li>:<></>}
                {education?<li className='flex cursor-pointer' onClick={()=>{setstate(2);setactive(!active);}}><Image src={"/qual.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Educational Qualifications</span></li>:<></>}
                {work?<li className='flex cursor-pointer' onClick={()=>{setstate(3);setactive(!active);}}><Image src={"/expeience.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Teaching Experience</span></li>:<></>}
                {subjects?<li className='flex cursor-pointer' onClick={()=>{setstate(10);setactive(!active);}}><Image src={"/sub.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Subjects Teaching</span></li>:<></>}
                {professional?<li className='flex cursor-pointer' onClick={()=>{setstate(4);setactive(!active);}}><Image src={"/pro.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Professional Services</span></li>:<></>}
                {past_admin||curr_admin?<li className='flex cursor-pointer' onClick={()=>{setstate(5);setactive(!active);}}><Image src={"/ad.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Administrative Responsibilities</span></li>:<></>}
                {publications?publications[0]?.pub_pdf?.length?<li className='flex cursor-pointer' onClick={()=>{setstate(6);setactive(!active);}}><Image src={"/jou.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Journal Publications</span></li>:<></>:<></>}
                {phd_students?<li className='flex cursor-pointer' onClick={()=>{setstate(8);setactive(!active);}}><Image src={"/phd.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>PhD Candidates</span></li>:<></>}
                {memebership?<li className='flex cursor-pointer' onClick={()=>{setstate(12);setactive(!active);}}><Image src={"/mem.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Memberships</span></li>:<></>}
                {pg_ug_projects?<li className='flex cursor-pointer' onClick={()=>{setstate(9);setactive(!active);}}><Image src={"/project.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>PG/UG Projects</span></li>:<></>}
                {conference.length!==0?<li className='flex cursor-pointer' onClick={()=>{setstate(7);setactive(!active);}}><Image src={"/conference.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Conferences</span></li>:<></>}
                {books.length!==0?<li className='flex cursor-pointer' onClick={()=>{setstate(11);setactive(!active);}}><Image src={"/book.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Books/Chapters Written</span></li>:<></>}
                {article.length!==0?<li className='flex cursor-pointer' onClick={()=>{setstate(13);setactive(!active);}}><Image src={"/article.jpg"} alt='blank' width={50} height={50} className='mt-1 mx-1 mr-2 w-[25px] h-[25px] brightness-110  object-cover'/><span className='mt-1'>Articles</span></li>:<></>}
            </ul>
           </div>
        </div>
        {/* laptop view */}
        <div className='hidden md:block'>
           <div className='w-[280px] flex flex-col mt-6 ' >
           {resume?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(1)}}><Image src={"/resume.png"} alt='blank' width={50} height={50} className='mt-1 mx-1 w-[25px] h-[25px] brightness-110  object-cover'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer'   >Resume</span></div></div>:<></>}
           {education?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(2)}}><Image src={"/qual.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer text-sm' >Educational Qualifications</span></div></div>:<></>}
           {work?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(3)}}><Image src={"/expeience.png"} alt='blank' width={25} height={25}  className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >Teaching Experience</span></div></div>:<></>}
           {subjects?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(10)}}><Image src={"/sub.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >Subjects Teaching</span></div></div>:<></>}
           {professional? <div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(5)}}><Image src={"/pro.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer text-[14px]' >Administersative Responsibilities</span></div></div>:<></>}
           {past_admin||curr_admin? <div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(4)}}><Image src={"/ad.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer text-xs'  >Professional Services</span></div></div>:<></>}
           {publications?publications[0]?.pub_pdf?.length?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(6)}}><Image src={"/jou.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >Journal Publications</span></div></div>:<></>:<></>}
           {phd_students?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(8)}}><Image src={"/phd.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >Phd Candidates</span></div></div>:<></>}
           {memebership?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(12)}}><Image src={"/mem.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >Memberships</span></div></div>:<></>}
           {pg_ug_projects?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(9)}}><Image src={"/project.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >PG/UG Projects</span></div></div>:<></>}
           {conference.length!==0?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(7)}}><Image src={"/conference.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >Confernces</span></div></div>:<></>}
           {books.length!==0?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(11)}}><Image src={"/book.png"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer text-[14px]' >Books/Chapters Written</span></div></div>:<></>}
           {article.length!==0?<div className='flex mt-2 cursor-pointer' onClick={()=>{setstate(13)}}><Image src={"/article.jpg"} alt='blank' width={25} height={25} className='mt-1 mx-1 w-[25px] h-[25px]'/><div className='bg-[#941B0C] hover:bg-red-500 h-6  p-2 flex justify-center items-center rounded-md text-white w-[280px]'><span className='cursor-pointer' >Articles</span></div></div>:<></>}
           </div>
        </div>
    </div>
  )
}

export default Sidebar