

import React from "react";
import BackDepartment from "../../../components/department/BackDepartment";

const EEMissionPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full mb-4">
            <h2 className="text-center text-4xl text-red-700 mt-2 mb-2">Vision & Mission</h2>
            <p className="text-center text-gray-500 text-base font-semibold mb-2">
              Electrical Engineering
            </p>
            <div className="flex justify-center mb-4">
              <BackDepartment navigate={"/Department/EE"} />
            </div>
          </div>

          {/* Institute Vision */}
          <div className="mb-8">
            <h3 className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">Vision of the Institute</h3>
            <p className="ml-4 text-justify text-base lg:text-lg">
              To contribute to India and the World through excellence in scientific and technical education and research; to serve as a valuable resource for industry and society; and to remain a source of pride for all Indians.
            </p>
          </div>

          {/* Institute Mission */}
          <div className="mb-8">
            <h3 className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">Mission of the Institute</h3>
            <ul className="list-disc ml-8 space-y-2 text-base lg:text-lg">
              <li>
                To generate new knowledge by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes
              </li>
              <li>
                To identify, based on an informed perception of Indian, regional and global needs, areas of specialization upon which the Institute can concentrate
              </li>
              <li>
                To undertake collaborative projects which offer opportunities for long term interaction with academia and industry
              </li>
              <li>
                To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of profession
              </li>
            </ul>
          </div>

          {/* EE Vision */}
          <div className="mb-8">
            <h3 className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">Vision of Electrical Engineering Department</h3>
            <p className="ml-4 text-justify text-base lg:text-lg">
              To achieve sustainable growth towards academic excellence in the field of Electrical Engineering.
            </p>
          </div>

          {/* EE Mission */}
          <div className="mb-8">
            <h3 className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">Mission of Electrical Engineering Department</h3>
            <ul className="list-disc ml-8 space-y-2 text-base lg:text-lg">
              <li>
                To offer quality education in Electrical Engineering to meet the requirements of industry, society and nation.
              </li>
              <li>
                To provide contemporary technical knowhow by regular upgradation of curriculum as per the needs of industry and educative exposures like short term courses, conferences, etc.
              </li>
              <li>
                To establish state-of-the-art infrastructural facilities in the arena of academics and research.
              </li>
              <li>
                To inculcate leadership, moral and ethical values among the students.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEMissionPage;