"use client"
import React,{useState} from 'react'
import { FaArrowDown } from 'react-icons/fa';
import Image from 'next/image';

function FacilitiesComp({text,url}) {
    const [isOpen,setIsOpen]=useState(false);
    const toggleDropDown=()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div className='text-neutral-800 lg:w-2/3'>
        <div onClick={toggleDropDown} className={`cursor-pointer pr-2 pl-3 py-3 rounded-md flex flex-row justify-between border ${isOpen?'border-2 border-red-800 bg-red-100':'' }`}>
            <p className='font-semibold my-auto'>
                {text}
            </p>
            <FaArrowDown className='mr-2 md:mr-3 my-auto' />
        </div>
        <div className={`transition-all duration-300 ease-in-out transform ${isOpen?'max-h-[800px] opacity-100':'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="mt-2 lg:w-full p-4 border border-gray-300 rounded-lg bg-gray-100 flex flex-col">
                    <Image src={url}
                    width={800} height={600} alt="sorry! no image" className='rounded-lg shadow-md bg-red-200'/>
            </div>
        </div>
    </div>
  )
}

export default FacilitiesComp