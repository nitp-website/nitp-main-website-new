import BackDepartment from "../../../components/department/BackDepartment"
import FacultyList from '../../../../components/facultycomponents/FacultyList';
import React from 'react'

// import pdf from '../../../../components/pdf.pdf
const Home=() =>{
  return (
   <>
    <div className="flex flex-col p-10 max-sm:p-4">
      <div className="flex flex-col  mb-4">
        <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
                FACULTY
            </p>
        </div>
        <div className="mt-2">
            <p className="text-gray-500 text-sm lg:text-base font-semibold">
            Humanities & Social Sciences
            </p>
        </div>
        <div>
          <BackDepartment navigate={'/Department/Humanities'}/>
        </div>
      </div>  
      <FacultyList url={"/Department/Humanities/faculty"} branch={"hss"}/>
    </div>
   </>
  )
}
export default Home;