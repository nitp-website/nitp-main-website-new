

import React from "react";
import BackDepartment from "../../../components/department/BackDepartment";

const EEPOPage = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="py-1 mt-2">
        <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
          <div className="flex flex-col mb-6">
            <div>
              <p className="text-red-900 text-3xl font-bold">POs & PEOs</p>
            </div>
            <div className="mt-2">
              <p className="text-gray-500 text-base font-semibold">
                Electrical Engineering
              </p>
            </div>
            <BackDepartment navigate={"/Department/EE"} />
          </div>

          {/* UG (B.Tech) Section */}
          <div className="mb-10">
            <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">PROGRAM EDUCATIONAL OBJECTIVES (PEO) FOR UG (B.TECH. - EE)</div>
            <ol className="list-decimal ml-6 space-y-2 text-base lg:text-lg mb-6">
              <li>The program is devoted to impart learning and understanding of different segments of Electrical Engineering.</li>
              <li>The program aims to provide students with the opportunity to apply advanced techniques and develop skills to explore new problems in Electrical Engineering. It aims to produce graduates, who are employable in Industries and/or can pursue higher studies.</li>
              <li>The program is expected to empower students to collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly way.</li>
              <li>The program is designed to encourage students to pursue life-long learning and develop professional ethics, communication skills, leadership quality, and teamwork capability through continuing education toward self-improvement.</li>
            </ol>

            <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">PROGRAM SPECIFIC OUTCOMES (PSO) FOR UG (B.TECH - EE)</div>
            <ul className="list-disc ml-8 space-y-2 text-base lg:text-lg mb-6">
              <li><strong>PSO1:</strong> Specify, design and test the power system networks and protection relays using hardware power system models.</li>
              <li><strong>PSO2:</strong> Selection, design and prototype Power electronic systems and electrical machine drives for applications related to industrial, traction, electrical vehicle and renewable energy.</li>
              <li><strong>PSO3:</strong> Design and development of Instrumentation, Control and Automation systems for industries and intelligent systems.</li>
            </ul>

            <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">PROGRAM OUTCOMES (PO) FOR UG (B.TECH. - EE)</div>
            <ul className="list-disc ml-8 space-y-2 text-base lg:text-lg">
              <li><strong>PO1: Engineering knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
              <li><strong>PO2: Problem analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
              <li><strong>PO3: Design/development of solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
              <li><strong>PO4: Conduct investigations of complex problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
              <li><strong>PO5: Modern tool usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</li>
              <li><strong>PO6: The engineer and society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
              <li><strong>PO7: Environment and sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
              <li><strong>PO8: Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
              <li><strong>PO9: Individual and team work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
              <li><strong>PO10: Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
              <li><strong>PO11: Project management and finance:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
              <li><strong>PO12: Life-long learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
            </ul>
          </div>

          {/* PG (M.Tech) Section */}
          <div className="mb-10">
            <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">M.Tech : PG (M. Tech. - Control System)</div>
            <div className="text-red-900 text-base lg:text-xl mb-2">Program Educational Objectives (PEO)</div>
            <ol className="list-decimal ml-6 space-y-2 text-base lg:text-lg mb-6">
              <li>To impart learning and understanding towards different segments of Control System Engineering so that Graduates of the program will have successful careers in Instrumentation, automation, and inter-disciplinary fields.</li>
              <li>To empower graduates of the program to excel in research, and contribute to technological developments in control and instrumentation.</li>
              <li>To prepare the graduates to effectively collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly manner.</li>
              <li>To encourage students to pursue lifelong learning and professional development through continuing education and self-improvement.</li>
            </ol>

            <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2 mt-8">PG (M. Tech. - Power System)</div>
            <div className="text-red-900 text-base lg:text-xl mb-2">Program Educational Objectives (PEO)</div>
            <ol className="list-decimal ml-6 space-y-2 text-base lg:text-lg mb-6">
              <li>To impart learning and understanding towards different segments of the Power System; which at present, is one of the important pillars of the modern world, and aims to produce postgraduates in power systems, who are employable in Industries and/or can pursue higher studies.</li>
              <li>To provide the students with the opportunity to learn and use the advanced techniques, skills, and modern scientific and engineering tools to explore new problems in the energy sector.</li>
              <li>To empower students to effectively collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly manner.</li>
              <li>To encourage students to pursue life-long learning and professional development through continuing education and self-improvement.</li>
            </ol>

            <div className="text-red-900 text-base lg:text-xl mt-8 mb-2">Program Outcomes (PO)</div>
            <div className="text-sm mt-2 font-semibold mb-4">After the successful completion of the two years' postgraduate program, students should be able to:</div>
            <ol className="list-decimal ml-6 space-y-2 text-base lg:text-lg">
              <li>An ability to independently carry out research /investigation and development work to solve practical problems</li>
              <li>An ability to write and present a substantial technical report/document</li>
              <li>Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EEPOPage;