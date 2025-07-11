
import React from "react";
import Sidebar from "../components/Sidebar";





export default function Page() {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-24 mt-10 w-full mb-8">
      {/* Sidebar Section */}
      <div className="mt-6 mb-12 md:mt-10 md:w-1/4">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="mt-8 text-base text-gray-700 md:w-3/4">
        {/* Title */}
        <h3 className="font-bold text-red-700 text-xl md:text-2xl mb-4">
         Objectives
        </h3>

        {/* Objectives List */}
        <div className="space-y-6">
          <p className="text-justify text-lg">
            The prime objectives of SoP are as following:
          </p>
          <ol className="list-decimal ml-6 space-y-4 text-lg text-justify">
            <li>
              Helping the students of NIT Patna in their physical and psychological health issues or those concerned about a friend's health find competent treatments.
            </li>
            <li>
              To advise the officials of Health center, Hostels and other stake holder of the Institute on how to deal with the situation related to student’s physical or psychological health or in case of emergency.
            </li>
            <li>
              To uphold the commitment of the Institute in providing personalized counseling and health and safety to all the students of the Institute.
            </li>
            <li>
              To promote and foster a positive and inclusive campus culture between the students of the Institute.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

