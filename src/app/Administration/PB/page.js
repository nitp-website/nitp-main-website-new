import React from "react";
import Admincard from "../Admincard";
import Admin from "../admin";
import "../style.css";

const SenatePage = () => {
  const RegistrarData = [
    {
      name: "Prof. Vivekanand Singh ",
      designation:"Professor, Civil Engineering Dept.",
      type: "Chief Proctor",
     },
    {
      name: "Prof. Prabhat Kumar ",
      designation:"Professor, CSE Dept.",
      type: "Dy. Chief Proctor",
     },
    {
      name: "Prof. Sunita Kumari ",
      designation:"Professor, Civil Engineering Dept.",
      type: "Proctor",
     },
    {
      name: "Dr. Ajay Kumar ",
      designation:"Associate Professor, Arch. & Plann. Dept.",
      type: "Proctor",
     },
     {
      name: "Dr. Shailesh Mani Pandey ",
      designation:"Associate Professor, Mechanical Engineering Dept.",
      type: "Proctor",
     },
     {
      name: "Dr. Gagandeep Meena ",
      designation:"Associate Professor, Electrical Engineering Dept.",
      type: "Proctor",
     },
  ]

  return (
    <div className="md:p-4">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold">Proctorial Board</h1>
      <div className="admincarddiv items-center justify-center">
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

export default SenatePage;
