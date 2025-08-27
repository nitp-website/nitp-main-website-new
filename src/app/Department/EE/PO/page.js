

import React from "react";

const EEPOPage = () => {
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
            <li>
              Apply the knowledge of mathematics, science, engineering fundamentals, and electrical engineering specialization to solve complex engineering problems.
            </li>
            <li>
              Identify, formulate, and analyze complex electrical engineering problems using first principles and research literature.
            </li>
            <li>
              Design solutions for complex engineering problems and system components with consideration for public health, safety, and environment.
            </li>
            <li>
              Use research-based knowledge and methods including experiments, data analysis, and synthesis to provide valid conclusions.
            </li>
            <li>
              Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools to electrical engineering activities.
            </li>
            <li>
              Apply reasoning informed by contextual knowledge to assess societal, health, safety, legal, and cultural issues relevant to engineering practice.
            </li>
            <li>
              Understand the impact of engineering solutions in societal and environmental contexts, and demonstrate the need for sustainable development.
            </li>
            <li>
              Apply ethical principles and commit to professional ethics and responsibilities.
            </li>
            <li>
              Function effectively as an individual and as a member or leader in diverse teams and multidisciplinary settings.
            </li>
            <li>
              Communicate effectively on complex engineering activities with the engineering community and society at large.
            </li>
            <li>
              Demonstrate knowledge and understanding of engineering and management principles and apply these to manage projects.
            </li>
            <li>
              Recognize the need for, and have the ability to engage in independent and lifelong learning in the context of technological change.
            </li>
          </ul>

          {/* Program Educational Objectives Section */}
          <div className="w-full mt-8">
            <h2 className="text-center text-4xl text-red-700 mt-2">
              Program Educational Objectives
            </h2>
          </div>

          <ul className="list-disc pl-5 space-y-2 text-justify mt-2 text-black">
            <li>
              Specify, design, and test power system networks and protection relays using hardware power system models.
            </li>
            <li>
              Select, design, and prototype power electronic systems and electrical machine drives for industrial, traction, electric vehicle, and renewable energy applications.
            </li>
            <li>
              Design and develop instrumentation, control, and automation systems for industries and intelligent systems.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EEPOPage;