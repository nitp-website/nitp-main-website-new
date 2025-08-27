

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
          <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
            <div className="w-full">
              <h2 className="text-center text-4xl text-red-700 mt-2">
                Programme Educational Objectives (PEO)
              </h2>
            </div>

            {/* UG Section */}
            <div className="w-full mt-8">
              <h3 className="text-red-900 text-2xl font-bold mb-2">B.Tech (UG)</h3>
              <ul className="list-disc pl-5 space-y-2 text-justify mt-2 text-black">
                <li>
                  Impart learning and understanding of different segments of Electrical Engineering.
                </li>
                <li>
                  Provide students with opportunities to apply advanced techniques and develop skills to explore new problems in Electrical Engineering, making them employable in industries or able to pursue higher studies.
                </li>
                <li>
                  Empower students to collaborate with different sectors, leading to innovation for solving social, technical, and business challenges in an optimized and environment-friendly way.
                </li>
                <li>
                  Encourage students to pursue lifelong learning and develop professional ethics, communication skills, leadership quality, and teamwork capability through continuing education toward self-improvement.
                </li>
              </ul>
            </div>

            {/* PG Section */}
            <div className="w-full mt-10">
              <h3 className="text-red-900 text-2xl font-bold mb-2">M.Tech (PG)</h3>
              <h4 className="text-red-900 text-xl font-semibold mb-2">Control System</h4>
              <ul className="list-disc pl-5 space-y-2 text-justify mt-2 text-black">
                <li>
                  Impart learning and understanding towards different segments of Control System Engineering for successful careers in instrumentation, automation, and interdisciplinary fields.
                </li>
                <li>
                  Empower graduates to excel in research and contribute to technological developments in control and instrumentation.
                </li>
                <li>
                  Prepare graduates to collaborate with different sectors, leading to innovation for solving social, technical, and business challenges in an optimized and environment-friendly manner.
                </li>
                <li>
                  Encourage lifelong learning and professional development through continuing education and self-improvement.
                </li>
              </ul>

              <h4 className="text-red-900 text-xl font-semibold mb-2 mt-8">Power System</h4>
              <ul className="list-disc pl-5 space-y-2 text-justify mt-2 text-black">
                <li>
                  Impart learning and understanding towards different segments of Power System, producing postgraduates who are employable in industries or able to pursue higher studies.
                </li>
                <li>
                  Provide opportunities to learn and use advanced techniques, skills, and modern scientific and engineering tools to explore new problems in the energy sector.
                </li>
                <li>
                  Empower students to collaborate with different sectors, leading to innovation for solving social, technical, and business challenges in an optimized and environment-friendly manner.
                </li>
                <li>
                  Encourage lifelong learning and professional development through continuing education and self-improvement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEPOPage;