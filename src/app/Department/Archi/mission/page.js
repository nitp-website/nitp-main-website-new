import React from "react";

const ArchiMissionPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
              To generate intellectual capital by engaging in cutting-edge research and to promote academic growth by offering state-of-the-art undergraduate, postgraduate and doctoral programmes.
            </li>
            <li className="ml-4">
              To develop the department as the regional centre of knowledge and information in Architecture and Planning.
            </li>
            <li className="ml-4">
              To identify, based on an informed perception of local, regional, national and global needs, areas of specialization upon which the department can concentrate.
            </li>
            <li className="ml-4">
              To undertake joint initiatives that offer opportunities for long-term interaction with academia, industry, government, and society.

            </li>
            <li className="ml-4">
             To develop human potential to its fullest extent so that intellectually capable and imaginatively gifted leaders can emerge in a range of ethical professions.
            </li>
          </ul>

          <div className="w-full mt-5">
            <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li className="ml-4">
             To become a centre of excellence to inspire, innovate and transform the knowledge to create a sustainable built environment for improved quality of life on the earth.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ArchiMissionPage;
