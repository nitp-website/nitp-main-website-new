import React from "react";
import Admincard from "../Admincard";
import Admin from "../admin";
import "../style.css";

const ServiceUnitPage = () => {
  // Find the Service Unit data from the Admin array
  const serviceUnitData = Admin.find((item) => item.data === "serviceunit").content;

  return (
    <div className="md:p-4">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold">Service Unit Heads</h1>
      <div className="admincarddiv items-center justify-center">
        {serviceUnitData.map((item, idx) => (
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

export default ServiceUnitPage;
