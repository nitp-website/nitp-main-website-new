import React from "react";
import Admincard from "../AdminCard";
import Sidebar from "../components/Sidebar";
import "../style.css";

const Page = () => {
  const RegistrarData = [

    {
      name: "Prof. Prabhat Kumar ",
      designation: "Professor, CSE Dept.",
      type: "Chief Proctor",
      url: "https://www.nitp.ac.in/Department/CSE/faculty/prabhat@nitp.ac.in",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-16 lg:px-16 mt-10 w-full mb-8">
      <div className="flex flex-col w-full">
        <div className="admincarddiv items-center justify-center">
          <span className="text-xl text-black font-semibold border-b-2 pb-2 border-red-800">
            Cheif Proctor
          </span>
        </div>
        <div className="flex w-full mt-6 justify-center items-center">
          {RegistrarData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-full md:w-[25vw]">
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
    </div>
  );
};

export default Page;
