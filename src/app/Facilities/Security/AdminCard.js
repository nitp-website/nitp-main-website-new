import React from "react";
import Adcard from "./components/Adcard.js";

const Admincard = ({ name, designation, type, url }) => {
  return (
    <Adcard name={name} designation={designation} type={type} url={url}/>
  );
};

export default Admincard;
