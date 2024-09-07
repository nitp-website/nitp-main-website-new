"use client"
import BackDepartment from "../../../../components/department/BackDepartment"
import FacultyInfo from '../../../../../components/facultycomponents/FacultyInfo'
import React from 'react'
const page = () => {
  
  return(
    <div className="flex flex-col px-3 py-10  max-sm:p-4 text-black">
      <div className="flex flex-col  mb-4">
        <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
                FACULTY
            </p>
        </div>
        <div className="mt-2">
            <p className="text-gray-500 text-sm lg:text-base font-semibold">
            CHEMICAL ENGINEERING
            </p>
        </div>
        <div>
          <BackDepartment navigate={'/Department/Chemical/faculty'}/>
        </div>
      </div>  
      <FacultyInfo/>
    </div>
  )
}

export default page