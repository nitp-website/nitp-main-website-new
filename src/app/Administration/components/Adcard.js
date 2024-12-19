import React from "react";
import "./Adcard.css";
const Adcard = ({ name, designation, type, url }) => {
  return (
    
    <div className="maincard my-4 md:my-0 md:mx-4">
    <div className="e-card playing bg-white w-4/5">
    <div className="image"></div>
    
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>

    <div className="infotop mt-8 md:mt-2">
    <div classname="hidden md:block"><a href={url}>{name}</a></div>

      <div className="name mt-2 md:mt-0">{designation}</div>
        <div className="name md:mt-2  text-neutral-300">{type}</div>
    </div>
  </div>
  </div>
  );
};

export default Adcard;
   