import React from "react";

const HumanitiesMissionPage = () => {
  return (
    <div className="bg-white text-black">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="w-full">
            <h2 className="text-center text-4xl text-red-700 mt-2">Mission</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li>The Department aspires to be a national exemplar in undergraduate teaching and research in the humanities and social sciences. Upon completion of the program, the students will be prepared to compete, sustain and advance their communities and the world.</li>
          </ul>

          <div className="w-full mt-5">
            <h2 className="text-center text-4xl text-red-700 mt-2">Vision</h2>
          </div>
          <ul className="list-disc pl-5 space-y-2 mt-2 text-justify">
            <li>To provide quality teaching, learning, and research in the field of Humanities and Social Sciences by creating, preserving, transmitting and utilizing knowledge especially to engineering students so that intellectually capable and imaginatively gifted leaders can emerge in the technical education and industry.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HumanitiesMissionPage;
