import React from "react";
import Admincard from "../Admincard";
import Sidebar from '../components/Sidebar'
import "../style.css";

const page = () => {
  const RegistrarData = [
    {
      name: "Prof. Vivekanand Singh ",
      designation:"Professor, Civil Engineering Dept.",
      type: "Chief Proctor",
      url:"https://www.nitp.ac.in/Department/CE/faculty/vsingh@nitp.ac.in",
     },
    {
      name: "Prof. Prabhat Kumar ",
      designation:"Professor, CSE Dept.",
      type: "Dy. Chief Proctor",
      url:"https://www.nitp.ac.in/Department/CSE/faculty/prabhat@nitp.ac.in",
     },
    {
      name: "Prof. Sunita Kumari ",
      designation:"Professor, Civil Engineering Dept.",
      type: "Proctor",
      url:"https://www.nitp.ac.in/Department/CE/faculty/sunitafce@nitp.ac.in",
     },
    {
      name: "Dr. Ajay Kumar ",
      designation:"Associate Professor, Arch. & Plann. Dept.",
      type: "Proctor",
      url:"https://www.nitp.ac.in/Department/Archi/faculty/arajay@nitp.ac.in",
     },
     {
      name: "Dr. Shailesh Mani Pandey ",
      designation:"Assistant Professor, Mechanical Engineering Dept.",
      type: "Proctor",
      url:"https://www.nitp.ac.in/Department/ME/faculty/smp.me@nitp.ac.in",
     },
     {
      name: "Dr. Gagandeep Meena ",
      designation:"Assistant Professor, Electrical Engineering Dept.",
      type: "Proctor",
      url:"https://www.nitp.ac.in/Department/EE/faculty/gagandeep.ee@nitp.ac.in",
     },
  ]

  return (
    // <div className="md:p-4">
    //   <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold">Proctorial Board</h1>
    //   <div className="admincarddiv items-center justify-center">
        // {RegistrarData.map((item, idx) => (
        //   <div key={idx}>
        //     <Admincard
        //       name={item.name}
        //       designation={item.designation}
        //       type={item.type}
        //     />
        //   </div>
        // ))}
    //   </div>
    // </div>
    <div className='flex flex-col md:flex-row px-2 md:px-16 lg:px-16 mt-10 md:justify-between md:gap-0 w-full mb-8'>
    <div className='mt-6 mb-12 md:mt-0 '>
      <Sidebar />
    </div>
    {/* <div className='flex flex-col md:w-3/4 '>
     <PeopleList/>
    </div> */}
    <div className="admincarddiv  items-center justify-center">
    {RegistrarData.map((item, idx) => (
          <div key={idx}>
            <Admincard
              name={item.name}
              designation={item.designation}
              type={item.type}
              url={item.url}
              
            />
          </div>
        ))}
    </div>
    
    
  </div>
  );
};

export default page;
