"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const PhdCandidate = ({ name, topic, image, supervisor }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <div
                className={`backdrop-blur-sm	 static flex flex-col overflow-hidden md:flex-row shadow-md border rounded p-4 m-5 transition-all duration-500 ${isHovered
                    
                        ? "h-[25rem] md:h-[17rem]"
                    : "h-[20rem] md:h-[10rem]"
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex justify-center items-center md:w-1/4">
                    <div
                        className={`relative ${isHovered ? "h-[150px] w-[150px]" : "h-[100px] w-[100px]"
                            } transition-all duration-300`}
                    >
                        <Image
                            className={`rounded-md object-cover ${isHovered ? "h-[150px] w-[150px]" : "h-[100px] w-[100px]"
                                }`}
                            src={"/faculty.jpeg"}
                            alt={name}
                            height={300}
                            width={300}
                        />
                    </div>
                </div>
                <div className="mt-12 md:ml-8 ml-4 md:w-3/4 md:mt-0 ">
                    <h5 className="m-0 text-red-800 font-bold">{name}</h5>
                    <span className="flex text-[12px] mt-1 md:text-xl">
                    <a href={`mailto:${supervisor}`}>supervisor :{supervisor}</a>
                    </span>
                    <span
                        className={`flex mt-1 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        Topic: {topic}
                    </span>
                </div>
            </div>
        </>
    );
}

export default PhdCandidate
