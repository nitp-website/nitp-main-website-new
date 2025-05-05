import BackDepartment from "../../../components/department/BackDepartment";


export default function Page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        P O
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Electrical Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* B.tech */}
                <div className="">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">B.Tech :-</div>
                    <div className="text-red-900 text-base lg:text-xl font-normal  mt-8">PROGRAM OUTCOME (POs) for UG (B.Tech - EE)</div>
                    <ul className="list-disc ml-5 px-3 space-y-4 lg:text-base text-sm mb-12">
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

                    <div className="text-red-900 text-base lg:text-xl font-normal  mt-8">PROGRAM SPECIFIC OUTCOMES (PSO) FOR UG (B.TECH - EE)</div>
                    <p>Engineering Graduates will be able to:</p>
                    <ul className="list-decimal ml-5 px-3 space-y-4 lg:text-base text-sm mb-12">
                        <li>Specify, design and test the power system networks and protection relays using hardware power system models.</li>
                        <li>Selection, design and prototype Power electronic systems and electrical machine drives for applications related to industrial, traction, electrical vehicle and renewable energy.</li>
                        <li>Design and development of Instrumentation, Control and Automation systems for industries and intelligent systems.</li>
                    </ul>
                </div>

                {/* M.tech */}
                <div className="mt-10">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">M.Tech :-</div>
                    <div className="text-red-900 lg:text-xl text-base mb-4">PROGRAM OUTCOME (POs) for PG (M.Tech - EE)</div>
                    <p>
                        After the successful completion of the two years&#39; postgraduate program, students should be able to:
                    </p>
                    <ol className="list-decimal ml-5 space-y-4 lg:text-base text-sm">
                        <li>An ability to independently carry out research /investigation and development work to solve practical problems</li>
                        <li>An ability to write and present a substantial technical report/document</li>
                        <li>Students should be able to demonstrate a degree of mastery over the area as per the specialization of the program. The mastery should be at a level higher than the requirements in the appropriate bachelor program</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}