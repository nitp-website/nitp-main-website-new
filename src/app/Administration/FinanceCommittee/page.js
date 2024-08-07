import React from "react";
import Admincard from "../Admincard";
import Admin from "../admin";
import "../style.css";

const FCPage = () => {
  // Find the FC data from the Admin array
  const fcData = Admin.find((item) => item.data === "fc").content;

  return (
    <div className="md:p-4">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold">Finance Committee</h1>
      <div className="admincarddiv items-center justify-center">
        {fcData.map((item, idx) => (
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

export default FCPage;
