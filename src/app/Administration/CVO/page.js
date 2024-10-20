import React from "react";
import Admincard from "../Admincard"; 
import "../style.css"
import Link from "next/link";
const RegistrarPage = () => {
  const RegistrarData = [
    {
      name: "Dr. Amit Kumar Singh",
      designation: "Chief Vigilance Officer - NIT Patna",
      type:"amit.singh@nitp.ac.in"
    }
  ]

  return (
    <div className="md:p-4 ">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold	">Chief Vigilance Officer - NIT Patna</h1>
      <div className="admincarddiv items-center justify-center ">
        {RegistrarData.map((item, idx) => (
          <Link key={idx} href={"/Department/CSE/faculty/amit.singh@nitp.ac.in"}>
            <Admincard
              name={item.name}
              designation={item.designation}
              type={item.type}
              
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegistrarPage;
