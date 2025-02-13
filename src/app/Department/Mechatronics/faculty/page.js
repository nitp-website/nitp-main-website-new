"use client"
import BackDepartment from "../../../components/department/BackDepartment"
import FacultyList from '../../../../components/facultycomponents/FacultyList';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import staffData from "../../staffMach";
import DeptStaffcard from "../../../components/faculty/DeptStaff"
import PhdCandidate from "../../../components/faculty/PhdCandidate"
import StaffcardDept from "../../../components/faculty/StaffcardDept"

const Home=() =>{
  const [faculty, setfaculty] = useState(true);
  const [staff, setstaff] = useState(false);
  const [phd, setphd] = useState(false);
  const [phd_candidate,setphd_candidate]=useState([]);
  const [phd_render,setphd_render]=useState([])
  const [loading, setloading] = useState(false)
  const fetchphd = async () => {
    setloading(true);
    const api = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=mae`;
    const { data } = await axios(api);
    setphd_candidate(data);
    const phd_info = [];
    
    for (let i = 0; i < data.length; i++) {
        const facultyEmail = data[i].email;
        const phddata = await axios(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=${facultyEmail}`);
        const info = phddata.data;
        
        
        const facultyName = info.profile.name;

        for (let j = 0; j < info.phd_candidates?.length; j++) {
            phd_info.push({
                ...info.phd_candidates[j],
                supervisor: facultyName 
            });
        }
    }
    
    setphd_render(phd_info);
    setloading(false);
};
const Staff = staffData.find((dept) => dept.department === "Mechatronics and Automation Engineering")?.staff || [];
useEffect(() => {
    fetchphd();
}, [phd]);

useEffect(() => {
    fetchphd();
}, [phd]);
  return (
    <>
    <div className="flex flex-col px-3 py-10  max-sm:p-4 text-black">
      <div className="flex flex-col  mb-4">

        <div className="mt-2 w-full justify-center flex">
          <p className="text-gray-500 text-sm lg:text-xl font-semibold">
          MECHATRONICS
          </p>
        </div>
        <div>
          <BackDepartment navigate={'/Department/Mechatronics'} />
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
          setphd(false);
          setstaff(true);
        }} className={`border border-black rounded ${(staff) ? "text-white bg-red-900" : "text-red-900"} px-2`}>Staffs</button>
        <button onClick={() => {
          setfaculty(false);
          setphd(true);
          setstaff(false);
          // fetchphd()
        }} className={`border border-black rounded ${(phd) ? "text-white bg-red-900" : "text-red-900"} px-2`}>PhD Candidates</button>
      </div>
      {faculty &&
        <div className="flex flex-col">
          <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
              FACULTY
            </p>
          </div>
          <FacultyList url={"/Department/Mechatronics/faculty"} branch={"mae"} />
        </div>}
        {staff &&
          <div className="flex flex-col">
            <div>
              <p className="text-red-900 text-xl lg:text-2xl font-bold">
                Staffs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Staff.map((staffMember, index) => (
              <StaffcardDept key={index} {...staffMember} />
            ))}
          </div>
          </div>
        }
      {
        phd&&<div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
            Phd Candidates
            </p>
          </div>
          {
            phd_render?.map((item)=>{
              return <PhdCandidate
              key={item.id}
              image={""}
              name={item.phd_student_name}
              supervisor={item.supervisor} // Use faculty name here
              topic={item.thesis_topic}
          />
            })
          }
        </div>
      }
    </div>
  </>
  )
}
export default Home;