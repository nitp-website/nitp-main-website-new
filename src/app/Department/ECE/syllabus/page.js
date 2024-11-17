"use client";

import { useState } from 'react';

export default function Page() {
    return (
        <div className="container mx-auto mt-3 bg-red-100  w-[70%] rounded-xl pt-4">
            <div className="container mx-auto px-4  bg-red-100 text-black w-full md:w-[50%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center">
                        <p className="text-sm sm:text-base ">B.Tech ECE :</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://drive.google.com/file/d/1rfCcCrPd9mlA8rXhDOWpxhsItBcgIC-G/view?usp=drive_link">
                            <button className="bg-red-700 hover:bg-red-600 text-white p-1 px-2 rounded text-xs sm:text-sm">
                                Course Structure & Syllabus
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4  bg-red-100 text-black w-full md:w-[50%]">
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center">
                        <p className="text-sm sm:text-base "> Dual Degree :</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://drive.google.com/file/d/1gHBt6g7V09MqE3Sm1xvYMkev53-reXIU/view?usp=drive_link">
                            <button className="bg-red-700 hover:bg-red-600 text-white p-1 px-2 rounded text-xs sm:text-sm">
                                Course Structure & Syllabus
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4  bg-red-100 text-black w-full md:w-[50%]">
               
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center">
                        <p className="font-medium text-sm sm:text-base ">Minor Courses :</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://drive.google.com/file/d/1hji7sUoM8GiUIpOfDxXs6xWWPr0N205R/view?usp=drive_link">
                            <button className="bg-red-700 hover:bg-red-600 text-white p-1 px-2 rounded text-xs sm:text-sm">
                                Course Structure 
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4  bg-red-100 text-black w-full md:w-[50%]">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center">
                        <p className="font-medium text-sm sm:text-base ">M.Tech Next Generation Wireless Technologies:</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://drive.google.com/file/d/1D_oZS86O6iwv73BI9qDXMDWvlqVWTbF0/view?usp=drive_link">
                            <button className="bg-red-700 hover:bg-red-600 text-white p-1 px-2 rounded text-xs sm:text-sm">
                                Course Structure & Syllabus
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-4  bg-red-100 text-black w-full md:w-[50%] py-2">
              
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center">
                        <p className="font-medium text-sm sm:text-base ">M.Tech Microelectronics & VLSI System Design:</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://drive.google.com/file/d/1pw8oCC_Z9IGOTFcrrwTdRG46O38Sl1xz/view?usp=drive_link">
                            <button className="bg-red-700 hover:bg-red-600 text-white p-1 px-2 rounded text-xs sm:text-sm">
                                Course Structure & Syllabus
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
