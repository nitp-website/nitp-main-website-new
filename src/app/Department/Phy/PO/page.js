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
                        Applied Physics and Materials Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Phy"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Program Outcomes (POs) :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>
                            <strong>Engineering Knowledge:</strong>
                            Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
                        </li>
                        <li>
                            <strong>Problem Analysis:</strong>
                            Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
                        </li>
                        <li>
                            <strong>Design/Development of Solutions:</strong>
                            Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
                        </li>
                        <li>
                            <strong>Conduct Investigation of Complex Problems:</strong>
                            Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
                        </li>
                        <li>
                            <strong>Modern Tool Usage:</strong>
                            Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.
                        </li>
                        <li>
                            <strong>The Engineer and Society:</strong>
                            Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
                        </li>
                        <li>
                            <strong>Environment and Sustainability:</strong>
                            Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and the need for sustainable development.
                        </li>
                        <li>
                            <strong>Ethics:</strong>
                            Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
                        </li>
                        <li>
                            <strong>Individual and Team Work:</strong>
                            Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
                        </li>
                        <li>
                            <strong>Communication:</strong>
                            Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and receive clear instructions.
                        </li>
                        <li>
                            <strong>Project Management and Finance:</strong>
                            Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
                        </li>
                        <li>
                            <strong>Life-Long Learning:</strong>
                            Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}