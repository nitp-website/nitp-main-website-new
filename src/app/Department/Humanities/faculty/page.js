"use client"
import BackDepartment from "../../../components/department/BackDepartment"
import FacultyList from '../../../../components/facultycomponents/FacultyList';
import React, { useEffect, useState } from 'react'
import DeptStaffcard from "../../../components/faculty/DeptStaff"
import axios from "axios";
import PhdCandidate from "../../../components/faculty/PhdCandidate"
// import pdf from '../../../../components/pdf.pdf
const Home = () => {
  const [faculty, setfaculty] = useState(true);
  const [staff, setstaff] = useState(false);
  const [phd, setphd] = useState(false);
  const [phd_candidate,setphd_candidate]=useState([]);
  const [phd_render,setphd_render]=useState([])
  
  const fetchphd=async ()=>{
    const api=`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty/hss`
    const {data}=await axios(api); 
    setphd_candidate(data)
    const phd_info=[];
    for(let i=0;i<phd_candidate.length;i++){
      const phddata=await axios(`https://admin.nitp.ac.in/api/faculty/${phd_candidate[i].email}`);
      const info=phddata.data
      for(let j=0;j<info.phd_candidates.length;j++){
        phd_info.push(info.phd_candidates[j]);
      }
    }
    console.log(phd_info)
    setphd_render(phd_info)
  }
  useEffect(()=>{
    fetchphd()
  },[phd])
  return (
    <>
      <div className="flex flex-col px-3 py-10  max-sm:p-4 text-black">
        <div className="flex flex-col  mb-4">

          <div className="mt-2 w-full justify-center flex">
            <p className="text-gray-500 text-sm lg:text-xl font-semibold">
              Humanities & Social Sciences
            </p>
          </div>
          <div>
            <BackDepartment navigate={'/Department/Humanities'} />
          </div>
        </div>
        <div className="mt-2 mb-10 flex space-x-1 w-full justify-center">
          <button onClick={() => {
            setfaculty(true);
            setphd(false);
            setstaff(false);
          }} className={`border border-black rounded ${(faculty) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Faculties</button>
          <button onClick={() => {
            setfaculty(false);
            setphd(true);
            setstaff(false);
            // fetchphd()
          }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Phd Candidates</button>
          <button onClick={() => {
            setfaculty(false);
            setphd(false);
            setstaff(true);
          }} className={`border border-black rounded ${(staff) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Staffs</button>
        </div>
        {faculty &&
          <div className="flex flex-col">
            <div>
              <p className="text-red-900 text-xl lg:text-2xl font-bold">
                FACULTY
              </p>
            </div>
            <FacultyList url={"/Department/Humanities/faculty"} branch={"hss"} />
          </div>}
        {staff &&
        <div className="flex flex-col">
            <div>
              <p className="text-red-900 text-xl lg:text-2xl font-bold">
               Staffs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <DeptStaffcard image={"/hssstaff1.png"} name={"Shailendra Kumar Singh"} designation={"Peon"}/>
            </div>
        </div>
        }
        {
          phd&&<div className="grid grid-cols-1 md:grid-cols-2">
            {
              phd_render?.map((item)=>{
                return <PhdCandidate key={item.id} image={""} name={item.phd_student_name} supervisor={item.email} topic={item.thesis_topic} />
              })
            }
          </div>
        }
      </div>
    </>
  )
}
export default Home;