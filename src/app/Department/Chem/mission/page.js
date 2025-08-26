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
              To improve employability by providing high-quality undergraduate
              and graduate education in computer-related disciplines.
            </li>
            <li className="ml-4">
              To develop professionals to satisfy the rising personnel demands
              and needs of industry and entrepreneurship for the state's and
              country's economic growth.
            </li>
            <li className="ml-4">
              To become capable in conducting high-quality technological
              research for the benefit of society.
            </li>
          </ul>

          <div className="w-full mt-5">
            <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To formulate up-to-date and flexible technical programs which
              will allow our graduates to attain their maximum technical
              potential, managerial capability, be competitive in the job
              market and to emerge as a centre of excellence.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default cheMissionPage;