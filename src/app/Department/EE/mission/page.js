import React from "react";

const EEMissionPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To offer quality education in Electrical Engineering to meet the requirements of industry, society and nation.
            </li>
            <li className="ml-4">
              To provide contemporary technical knowhow by regular upgradation of curriculum as per the needs of industry and educative exposures like short term courses, conferences, etc.
            </li>
            <li className="ml-4">
              To establish state-of-the-art infrastructural facilities in the arena of academics and research.
            </li>
             <li className="ml-4">
             To inculcate leadership, moral and ethical values among the students.
            </li>
          </ul>

          <div className="w-full mt-5">
            <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To achieve sustainable growth towards academic excellence in the field of Electrical Engineering.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EEMissionPage;
