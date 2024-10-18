"use client"
import React from 'react'
import { useState } from 'react'
const Nss = () => {
    const [state,setstate]=useState("Home")
  const tags=["Home","People"]
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
                  The National Service Scheme (NSS) was launched in 1969 and is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community linkage. The NSS chapter at NIT Patna follows the cardinal principle of the NSS programme which is aimed at organising events by the students themselves such that both students and teachers get a sense of involvement in the tasks of nation building through their combined participation in community service. The programme aims to inculcate social welfare in students, and to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard of living and lead a life of dignity.
                  </div>
                
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  
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
                  The National Service Scheme (NSS) was launched in 1969 and is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of the Government of India aimed at developing student's personality through community service, NSS is a voluntary association of young people in Colleges, Universities and at +2 level working for a campus-community linkage. The NSS chapter at NIT Patna follows the cardinal principle of the NSS programme which is aimed at organising events by the students themselves such that both students and teachers get a sense of involvement in the tasks of nation building through their combined participation in community service. The programme aims to inculcate social welfare in students, and to provide service to society without bias. NSS volunteers work to ensure that everyone who is needy gets help to enhance their standard of living and lead a life of dignity.
                  </div>
                </>
                :
                <></>
            }
            {
              state === "People" ?
                <>
                  
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

export default Nss
