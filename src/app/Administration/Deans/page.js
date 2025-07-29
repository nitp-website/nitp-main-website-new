import React from "react";
import Admincard from "../Admincard";
import Admin from "../admin"; 
import "../style.css"
const DeansPage = () => {
  const deansData = Admin.find((item) => item.data === "deans").content;
  const assdeansData = Admin.find((item) => item.data === "assdeans").content;
  return (
    <div className="md:p-4 ">
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold	">Deans</h1>
      <div className="admincarddiv items-center justify-center ">
        {deansData.map((item, idx) => (
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
      <h1 className="text-2xl text-center pt-5 pb-7 md:pb-0 md:pt-10 text-red-900 font-bold	">Associate Deans</h1>
      <div className="admincarddiv items-center justify-center ">
        {assdeansData.map((item, idx) => (
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





export default DeansPage;
