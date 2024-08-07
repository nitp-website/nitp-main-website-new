import React from "react";
import Adcard from "./components/Adcard";

const Admincard = ({ name, designation, type, image }) => {
  return (
    <Adcard name={name} designation={designation} type={type}/>
  );
};

export default Admincard;
