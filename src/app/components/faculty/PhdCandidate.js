"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const PhdCandidate = ({ name, topic, image, supervisor }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div
                className={`backdrop-blur-sm	 static flex flex-col overflow-hidden md:flex-row shadow-md border rounded p-4 m-5 transition-all duration-500  h-[20rem] md:h-[10rem]
                    `}
                
            >
               
                <div className="mt-12 md:ml-8 ml-4 md:w-3/4 md:mt-0 ">
                    <h5 className="m-0 text-red-800 font-bold text-lg">{name}</h5>
                    <span className="flex text-[12px] mt-1 md:text-xl">
                    <p className='text-neutral-700 pl-2 pr-2 '>supervisor: </p><p> {supervisor}</p>
                    </span>
                    <span
                        className={`flex mt-1 transition-opacity duration-300 pl-2 text-neutral-700 text-sm`}
                    >
                        Topic: {topic}
                    </span>
                </div>
            </div>
        </>
    );
}

export default PhdCandidate
