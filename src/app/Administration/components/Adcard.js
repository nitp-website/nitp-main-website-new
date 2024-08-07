import React from "react";
import "./Adcard.css";
const Adcard = ({ name, designation, type }) => {
  return (
    
    <div className="maincard mb-3">
    <div className="e-card playing bg-white w-4/5">
    <div className="image"></div>
    
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>

    <div className="infotop mt-5 md:mt-2">
     <div className=" hidden md:block"><br/></div>     
      {name}
      <br />
      <div className="name mt-2 md:mt-0">{designation}</div>
        <div className="name md:mt-2  text-neutral-300">{type}</div>
    </div>
  </div>
  </div>
  );
};

export default Adcard;
   