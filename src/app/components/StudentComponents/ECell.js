"use client"
import { useState } from "react"

import React from 'react'

const ECell = () => {
    const [state, setstate] = useState("Home");
  const tags = ["Home","People"]
  return (
    <div>
      <div className="block md:hidden ">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-center items-center ">
            {
              tags.map((item, i) => {
                return <span key={i} className={`m-2 p-2  cursor-pointer rounded-lg ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
              })
            }
          </div>
          <div className=" flex flex-col">
            {
              state === "Home" ?
                
                  <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold text-black">
                  Entrepreneurship Cell, NIT Patna is a non-profit college club run by students of NIT Patna, founded in 2013 with the objective of increasing the spirit of Entrepreneurship among students of National Institute of Technology Patna. Entrepreneurship Cell NIT Patna helps the aspiring entrepreneurs to start and grow their businesses by creating a pathway of various opportunities like interactive sessions with professionals and founders, business competitions, business quizzes and financial awareness programs. This helps foster entrepreneurial thinking, promote business knowledge and increase confidence in students. Our vision is to help students who have an idea, product and burning desire by providing convincing skills, market exposure and investors for their start-up. This cell helps students to understand the business world by actually working in a start-up.
                  </div>
                
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold flex justify-center items-center text-black">
                        <div className="border shadow-2xl p-5">
                        <span className="text-lg font-semibold">Prof.-In-Charge</span>
                        <span className="text-2xl font-bold">Dr. Om Ji Shukla</span>
                         
                        </div>
                  </div>
                </>
                :
                <></>
            }
            

          </div>

        </div>
</div>
      
      <div className="md:block hidden">
        <div className="w-full flex">
          <div className="flex flex-col justify-center w-[20%] ">
            {
              tags.map((item, i) => {
                return <span key={i} className={`m-2 p-2 w-[150px] cursor-pointer text-sm font-bold border-2px shadow-md ${state === item ? "bg-red-300 text-black" : "bg-red-700 text-white"}`} onClick={() => setstate(item)}>{item}</span>
              })
            }
          </div>
          <div className="ml-8 flex flex-col w-[70%]">
            {
              state === "Home" ?
                <>
                  <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
                  Entrepreneurship Cell, NIT Patna is a non-profit college club run by students of NIT Patna, founded in 2013 with the objective of increasing the spirit of Entrepreneurship among students of National Institute of Technology Patna. Entrepreneurship Cell NIT Patna helps the aspiring entrepreneurs to start and grow their businesses by creating a pathway of various opportunities like interactive sessions with professionals and founders, business competitions, business quizzes and financial awareness programs. This helps foster entrepreneurial thinking, promote business knowledge and increase confidence in students. Our vision is to help students who have an idea, product and burning desire by providing convincing skills, market exposure and investors for their start-up. This cell helps students to understand the business world by actually working in a start-up.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
                  <div className="border shadow-2xl p-5 text-black flex flex-col">
                        <span className="text-lg font-semibold">Prof.-In-Charge</span>
                        <span className="text-2xl font-bold text-red-800">Dr. Om Ji Shukla</span>
                         
                        </div>
                  </div>
                </>
                :
                <></>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default ECell
