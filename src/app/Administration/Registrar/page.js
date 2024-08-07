import React from "react";
import Admincard from "../Admincard";
import Admin from "../admin"; 
import "../style.css"
const RegistrarPage = () => {
  const RegistrarData = [
    {
      name: "Dr. Asit Narayan",
      designation: "Registrar",
      type:"asit.narayan@nitp.ac.in"
    }
  ]

  return (
    <div className="md:p-4 ">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold	">Deans</h1>
      <div className="admincarddiv items-center justify-center ">
        {RegistrarData.map((item, idx) => (
          <div key={idx}>
            <Admincard
              name={item.name}
              designation={item.designation}
              type={item.type}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegistrarPage;
