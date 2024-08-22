"use client"
import BackDepartment from "../../../../components/department/BackDepartment"
import FacultyInfo from '../../../../components/facultycomponents/FacultyInfo'
import React from 'react'
const page = () => {
  
  return(
    <div className="flex flex-col p-10 max-sm:p-4">
      <div className="flex flex-col  mb-4">
        <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
                FACULTY
            </p>
        </div>
        <div className="mt-2">
            <p className="text-gray-500 text-sm lg:text-base font-semibold">
                CHEMISTRY
            </p>
        </div>
        <div>
          <BackDepartment navigate={'/Department/Chem/faculty'}/>
        </div>
      </div>  
      <FacultyInfo/>
    </div>
  )
}

export default page