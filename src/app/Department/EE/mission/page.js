import BackDepartment from "../../../../components/BackDepartment";


export default function mission(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-2xl  font-bold">
                        MISSION AND VISION
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        ELECTRICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"}/>

            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-sm lg:text-base">
                        <li>To offer quality education in electrical engineering to meet the requirements of industry, society and nation.</li>
                        <li>To provide contemporary technical knowhow by regular upgradation of curriculum as per the needs of industry and educative exposures like short term courses, conferences, etc.</li>
                        <li>To establish state-of-the-art infrastructural facilities in the arena of academics and research.</li>
                        <li>To inculcate leadership, moral and ethical values among the students.</li>
                    </ul>
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-sm lg:text-base">
                        <li>To achieve sustainable growth towards academic excellence in the field of Electrical Engineering.</li>
                    </ul>
                </div>
                {/* B.tech */}
                <div className="">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">B.Tech :-</div>
                    <div className="text-red-900 text-base lg:text-xl font-normal  mb-8">Programme Educational Objectives (PEO) for UG (B.Tech - EE)</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm mb-12">
                        <li>The programme is devoted to impart learning and understanding of different segments of Electrical Engineering.</li>
                        <li>The programme aims to provide students with the opportunity to apply advanced techniques and develop skills to explore new problems in Electrical Engineering. It aims to produce graduates, who are employable in Industries and/or can pursue higher studies.</li>
                        <li>The programme is expected to empower students to collaborate with different sectors of the field that shall lead to innovation for solving social, technical and business challenges in an optimized and environment friendly way.</li>
                        <li>The programme is designed to encourage students to pursue life-long learning and develop professional ethics, communication skills, leadership quality, and team work capability through continuing education toward self-improvement.</li>
                    </ul>
                    <div className="text-red-900 text-base lg:text-xl font-normal  mt-8">PROGRAM OUTCOME (POs) for UG (B.Tech - EE)</div>
                    <div className="lg:text-base text-base mt-2 font-semibold mb-8">Engineering Graduates will be able to:</div>
                    <ol className="list-decimal ml-5 px-3 space-y-4 lg:text-base text-sm mb-12">
                        <li>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                        <li>Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.</li>
                        <li>Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.</li>
                        <li>Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.</li>
                        <li>Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.</li>
                        <li>The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.</li>
                        <li>Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.</li>
                        <li>Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.</li>
                        <li>Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.</li>
                        <li>Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</li>
                        <li>Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to one&apos;s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.</li>
                        <li>Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.</li>
                    </ol>
                    <div className="text-red-900 text-base lg:text-xl font-normal mt-8">Programme Specific Outcomes (PSO) for UG (B.Tech - EE)</div>
                    <div className="lg:text-base text-sm mt-2 font-semibold mb-8">Engineering Graduates will be able to:</div>
                    <ol className="list-decimal ml-5 px-3 space-y-4 lg:text-base text-sm">
                        <li>Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                        <li>Selection, design and prototype Power electronic systems and electrical machine drives for applications related to industrial, traction, electrical vehicle and renewable energy.</li>
                        <li>Design and development of Instrumentation, Control and Automation systems for industries and intelligent systems.</li>
                    </ol>
                </div>
                {/* M.tech */}
                <div className="mt-10">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">M.Tech :-</div>
                    <div className="text-red-900 text-base lg:text-xl mb-2">PG (M. Tech. - Control System)</div>
                    <div className="text-red-900 lg:text-xl text-base mb-8">Program Educational Objectives (PEO)</div>
                    <ol className="list-decimal ml-5 space-y-4 text-sm lg:text-base mb-12">
                        <li>To impart learning and understanding towards different segments of Control System Engineering so that Graduates of the program will have successful careers in Instrumentation, automation, and inter-disciplinary fields.</li>
                        <li>To empower graduates of the program to excel in research, and contribute to technological developments in control and instrumentation.</li>
                        <li>To prepare the graduates to effectively collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly manner.</li>
                        <li>To encourage students to pursue lifelong learning and professional development through continuing education and self-improvement.</li>
                    </ol>
                    <div className="text-red-900 text-base lg:text-xl my-6 mb-2">PG (M. Tech. - Power System)</div>
                    <div className="text-red-900 tlg:text-xl text-base mb-8">Program Educational Objectives (PEO)</div>
                    <ol className="list-decimal ml-5 space-y-4 lg:text-base text-sm">
                        <li>To impart learning and understanding towards different segments of the Power System; which at present, is one of the important pillars of the modern world, and aims to produce postgraduates in power systems, who are employable in Industries and/or can pursue higher studies.</li>
                        <li>To provide the students with the opportunity to learn and use the advanced techniques, skills, and modern scientific and engineering tools to explore new problems in the energy sector.</li>
                        <li>To empower students to effectively collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly manner.</li>
                        <li>To encourage students to pursue life-long learning and professional development through continuing education and self-improvement.</li>
                    </ol>
                    <div className="text-red-900 text-base lg:text-xl mt-12">Program Outcomes (PO)</div>
                    <div className="text-sm mt-2 font-semibold mb-8">After the successful completion of the two years&apos; postgraduate program, students should be able to:</div>
                    <ol className="list-decimal ml-5 space-y-4 text-sm lg:text-base">
                        <li>An ability to independently carry out research /investigation and development work to solve practical problems</li>
                        <li>An ability to write and present a substantial technical report/document</li>
                        <li>Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}