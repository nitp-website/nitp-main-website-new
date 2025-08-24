import React from "react";

const MEMissionPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To provide education that transforms young minds through rigorous teaching and thought process to fulfil the needs of the society and Industry.
            </li>
            <li className="ml-4">
              To collaborate with leading Industry partners and other academic and research Institutes around the world to strengthen the education and research ecosystem.
            </li>
            <li className="ml-4">
              To prepare students with life-long learning for their career by fostering in them the ethical & technical capabilities pertinent to mechanical and allied engineering.
            </li>
          </ul>

          <div className="w-full mt-5">
            <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              “To create well trained and skilled technocrats with life-long learning in the area of Mechanical Engineering”
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MEMissionPage;
