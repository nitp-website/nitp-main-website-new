import React from "react";

const HumanitiesPOPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          {/* Program Outcomes Section */}
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              Program Outcomes
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-justify mt-2 text-black">
            <li>Producing Technocrats with all round knowledge and development skills.</li>
            <li>Developing professional ethics, communication skills and managerial knowledge among students to work in corporate world effectively and efficiently.</li>
          </ul>

          {/* Program Educational Objectives Section */}
          <div className="w-full mt-8">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              Program Educational Objectives
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-justify mt-2 text-black">


            <li>To involve entire range of knowledge pertinent to human relationship with society interaction and teaching towards problems solving of the nation.</li>
            <li>To develop into well rounded personalities and to propagate knowledge that is utilitarian and aesthetic in its makeup.</li>
            <li>To develop good technological skills with the ability to interact with different organs of an organization.</li>
            <li>To develop essential skills in critical thinking and writing along with the knowledge of literature,society, economic value, and philosophies of the mind and body.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HumanitiesPOPage;
