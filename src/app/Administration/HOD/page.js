import React from "react";
import Admincard from "../Admincard";
import Admin from "../admin";
import "../style.css";

const HODPage = () => {
  const senateData = Admin.find((item) => item.data === "senate").content;
  const hodData = senateData.filter(
    (item) => item.designation && item.designation.includes("HoD")
  );

  return (
    <div className="md:p-4 ">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold">
        Head of Departments
      </h1>
      <div className="admincarddiv items-center justify-center ">
        {hodData.map((item, idx) => (
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

export default HODPage;