import React from "react";
import Admincard from "../AdminCard";
import Sidebar from "../components/Sidebar";
import "../style.css";

const Page = () => {
  const RegistrarData = [
    {
      name: "Prof. Vivekanand Singh ",
      designation: "Professor, Civil Engineering Dept.",
      type: "Chief Proctor",
      url: "https://www.nitp.ac.in/Department/CE/faculty/vsingh@nitp.ac.in",
    },
    {
      name: "Prof. Prabhat Kumar ",
      designation: "Professor, CSE Dept.",
      type: "Dy. Chief Proctor",
      url: "https://www.nitp.ac.in/Department/CSE/faculty/prabhat@nitp.ac.in",
    },
    {
      name: "Prof. Sunita Kumari ",
      designation: "Professor, Civil Engineering Dept.",
      type: "Proctor",
      url: "https://www.nitp.ac.in/Department/CE/faculty/sunitafce@nitp.ac.in",
    },
    {
      name: "Dr. Ajay Kumar ",
      designation: "Associate Professor, Arch. & Plann. Dept.",
      type: "Proctor",
      url: "https://www.nitp.ac.in/Department/Archi/faculty/arajay@nitp.ac.in",
    },
    {
      name: "Dr. Shailesh Mani Pandey ",
      designation: "Assistant Professor, Mechanical Engineering Dept.",
      type: "Proctor",
      url: "https://www.nitp.ac.in/Department/ME/faculty/smp.me@nitp.ac.in",
    },
    {
      name: "Dr. Gagandeep Meena ",
      designation: "Assistant Professor, Electrical Engineering Dept.",
      type: "Proctor",
      url: "https://www.nitp.ac.in/Department/EE/faculty/gagandeep.ee@nitp.ac.in",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-16 lg:px-16 mt-10 w-full mb-8">
      <div className="mt-6 mb-12 md:mt-0">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <div className="admincarddiv items-center justify-center">
          <span className="text-xl text-black font-semibold border-b-2 pb-2 border-red-800">
            Proctorial Board
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {RegistrarData.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
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
