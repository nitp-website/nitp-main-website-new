import React from "react";

const cheMissionPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              Provide rigorous, comprehensive education that prepares students
              for leadership roles in the field of Chemical Science and
              Technology.
            </li>
            <li className="ml-4">
              To promote academic growth by offering state-of-the-art education
              in dual degree and doctoral programmes.
            </li>
            <li className="ml-4">
              Encourage a multidisciplinary approach to problem-solving,
              integrating knowledge from various fields to address the evolving
              needs of society and industry.
            </li>
            <li className="ml-4">
              To achieve excellence in chemical sciences and technology through
              teaching, research, and industry collaboration.
            </li>
          </ul>

          <div className="w-full mt-5">
            <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To serve the country through this institution by pursuing
              excellence in scientific and technical education and research.
            </li>
            <li className="ml-4">
              To make this department a centre of excellence for cutting edge
              fundamental and applied research.
            </li>
            <li className="ml-4">
              To establish leadership in chemical sciences and technology
              through innovation, research excellence, and sustainable
              practices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default cheMissionPage;
