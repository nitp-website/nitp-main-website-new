"use client"
import BackDepartment from "../../../components/department/BackDepartment"
import FacultyList from '../../../../components/facultycomponents/FacultyList';
import React, { useEffect, useState } from 'react'
import axios from "axios";
import PhdCandidate from "../../../components/faculty/PhdCandidate"
const Home=() =>{
  const [faculty, setfaculty] = useState(true);
  const [staff, setstaff] = useState(false);
  const [phd, setphd] = useState(false);
  const [phd_candidate,setphd_candidate]=useState([]);
  const [phd_render,setphd_render]=useState([])
  const [loading, setloading] = useState(false)
  const fetchphd = async () => {
    setloading(true);
    const api = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/faculty?type=mse`;
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

useEffect(() => {
    fetchphd();
}, [phd]);
  return (
    <>
    <div className="flex flex-col px-3 py-10  max-sm:p-4 text-black">
      <div className="flex flex-col  mb-4">

        <div className="mt-2 w-full justify-center flex">
          <p className="text-gray-500 text-sm lg:text-xl font-semibold">
          Material Science & Engineering
          </p>
        </div>
        <div>
          <BackDepartment navigate={'/Department/Material'} />
        </div>
      </div>
      <div className="mt-6 mb-12 flex flex-wrap justify-center">
        <div className="flex bg-gray-100 p-1 rounded-xl shadow-sm">
          <button 
            onClick={() => {
              setfaculty(true);
              setphd(false);
              setstaff(false);
            }} 
            className={`px-6 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg mx-1 
              ${faculty ? "bg-red-700 text-white shadow-md transform scale-105" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            Faculties
          </button>
          <button 
            onClick={() => {
              setfaculty(false);
              setphd(true);
              setstaff(false);
              // fetchphd()
            }} 
            className={`px-6 py-2.5 text-sm font-medium transition-all duration-200 rounded-lg mx-1 
              ${phd ? "bg-red-700 text-white shadow-md transform scale-105" : "bg-white text-gray-700 hover:bg-gray-50"}`}
          >
            PhD Candidates
          </button>
        </div>
      </div>
      {faculty &&
        <div className="flex flex-col">
          <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
              FACULTY
            </p>
          </div>
          <FacultyList url={"/Department/Material/faculty"} branch={"mse"} />
        </div>}
      {staff &&
      <div className="flex flex-col">
          <div>
            <p className="text-red-900 text-xl lg:text-2xl font-bold">
             Staffs
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2">
            <DeptStaffcard image={"/hssstaff1.png"} name={"Shailendra Kumar Singh"} designation={"Peon"}/>
          </div> */}
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