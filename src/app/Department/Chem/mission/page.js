import BackDepartment from "../../../components/department/BackDepartment"

function Comp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 lg:text-base text-sm
                        pb-2">
                           {points}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Page(){
    return (
        <div className="flex flex-col p-5 text-black">  
            <div className="flex flex-col md:ml-10">
                <div className="flex flex-col  mb-6">
                    <div>
                        <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Mission And Vision
                        </p>
                    </div>
                    <div className="mt-1 lg:mt-2">
                        <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Chemical Science and Technology
                        </p>
                    </div>
                    <BackDepartment navigate={"/Department/Chem"}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div>
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        VISION
                    </p>
                    <Comp
                    content={["To serve the country through this institution by pursuing excellence in scientific and technical education and research.",
                        "To make this department a center of excellence for cutting edge fundamental and applied research.",
                    ]}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        MISSION
                    </p>
                    <Comp
                    content={[
                        'Provide rigorous, comprehensive education that prepares students for leadership roles in the field of Chemical Science and Technology.',
                        'To promote academic growth by offering state-of-the-art education in undergraduate,postgraduate and doctoral programmes.',
                        'To pursue quality research output by developing necessary and adequate research facilities and undertaking collaborative / sponsored research projects.',
                        'Encourage a multidisciplinary approach to problem-solving, integrating knowledge from various fields to address the evolving needs of society and industry.',
                        "Encourage a multidisciplinary approach to problem-solving, integrating knowledge from various fields to address the evolving needs of society and industry."
                    ]}
                    />
                </div>

                {/** PO (Program Outcomes) */}

                <div className="mt-10">
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        PO (Program Outcomes)
                    </p>
                    <Comp
                    content={[
                        'Engineering Knowledge: Apply principles of mathematics, science, and core engineering to effectively solve complex engineering challenges.',
                        'Problem Analysis: Identify and define complex engineering problems, analyze them using research literature and foundational concepts from mathematics, natural sciences, and engineering, and draw well-supported conclusions.',
                        'Design and Development of Solutions: Develop solutions for intricate chemical engineering problems and design systems, components, or processes that meet defined requirements, considering public health, safety, cultural, societal, and environmental factors.',
                        'Investigation of Complex Problems: Employ research-based knowledge and methodologies, including experimental design, data analysis, and information synthesis to investigate and draw valid conclusions about complex problems.',
                        "Modern Tool Usage: Select, develop, and apply appropriate modern engineering tools, techniques, and modeling and simulation, while understanding their limitations, to solve complex chemical engineering tasks.",
                        "The Engineer and Society: Use contextual knowledge to assess and address societal, health, safety, legal, and cultural aspects and responsibilities associated with chemical engineering practice.",
                        "Environment and Sustainability: Evaluate the environmental and societal impact of chemical engineering solutions and demonstrate an understanding of the need for sustainable development.",
                        "Ethics: Uphold ethical standards, professional responsibilities, and norms within the practice of engineering.",
                        "Individual and Team Work: Work efficiently both independently and as part of diverse and multidisciplinary teams, including in leadership roles.",
                        "Communication: Communicate effectively on complex engineering matters with peers, stakeholders, and the broader community through well-prepared reports, documentation, presentations, and clear verbal or written instructions",
                        "Project Management and Finance: Apply engineering and management principles to effectively plan, manage, and lead projects in multidisciplinary settings.",
                        "Life-long Learning: Acknowledge the importance of continual learning and demonstrate the ability and readiness to engage in independent, life-long learning amid evolving technological landscapes."
                    ]}
                    />
                </div>

                {/** PEO (Programme Educational Objectives) */}
                <div className="mt-10">
                    <p className="text-red-900 font-semibold lg:text-2xl text-xl">
                        PEO (Programme Educational Objectives)
                    </p>
                    <p>
                        Within a few years of graduating from the B.Tech.+M.Tech Dual Degree program in Chemical Technology, graduates will be able to:
                    </p>
                    <Comp
                    content={[
                        'PEO1: Apply foundational knowledge and experimental expertise in basic sciences, mathematics, and core chemical engineering to solve real-world challenges in chemical and related industries.',
                        'PEO2: Plan and execute chemical engineering projects aimed at enhancing quality of life.',
                        'PEO3: Critically analyze and address issues concerning safety, energy efficiency, and environmental sustainability.',
                        'PEO4: Exhibit strong communication, project management, and leadership capabilities in professional settings.',
                        "PEO5: Perform comprehensive life cycle analysis (cradle-to-grave) of chemical processes to promote sustainable engineering practices."
                    ]}
                    />
                </div>
            </div>
        </div>

    )
}




export default Page