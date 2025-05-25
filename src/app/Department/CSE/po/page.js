import React from "react";

const CSEPOPage = () => {
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
              Modern tool usage: Create, select and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.
            </li>
            <li>
              The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
            </li>
            <li>
              Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
            </li>
            <li>
              Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
            </li>
            <li>
              Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
            </li>
            <li>
              Communications: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
            </li>
            <li>
              Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
            </li>
            <li>
              Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.
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
              Engage in requirement analysis, designing, implementation, testing, deployment, and/or maintaining of software systems in the domain of computer science & engineering and allied fields.
            </li>
            <li>
              Solve socially relevant challenges using computer science and engineering expertise, and/or pursue higher education and research.
            </li>
            <li>
              Work productively in a team and as an individual in interdisciplinary projects in industry/academia setup.
            </li>
            <li>
              Participate in lifelong learning and career advancement, as well as adapting to changing professional and social requirements.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CSEPOPage;
