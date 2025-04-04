"use client"
import BackDepartment from "../../../components/department/BackDepartment"

function Comp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 text-sm lg:text-base pb-2 text-gray-300">
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
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-[#421010] text-white">
            {/* Floating particles background effect */}
            <div className="particle-container absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className="particle absolute bg-red-900 opacity-20 rounded-full"
                        style={{
                            width: `${Math.random() * 10 + 2}px`,
                            height: `${Math.random() * 10 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${Math.random() * 20 + 10}s linear infinite`
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 flex flex-col p-5">  
                <div className="flex flex-col md:ml-10">
                    <div>
                        <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">
                            Mission And Vision
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="text-red-100 text-base font-semibold">
                            COMPUTER SCIENCE ENGINEERING
                        </p>
                    </div>
                    <BackDepartment navigate={'/Department/CSE'}/>
                </div>
                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border border-red-900/20 p-8 rounded-xl shadow-2xl shadow-red-900/50 backdrop-blur-md bg-gray-900 bg-opacity-70 mt-8">
                    <div>
                        <p className="text-red-400 text-2xl lg:text-3xl font-bold">
                            VISION
                        </p>
                        <Comp
                        content={['To formulate up-to-date and flexible technical programs which will allow our graduates to attain their maximum technical potential, managerial capability, be competitive in the job market and to emerge as a centre of excellence.']}
                        />
                    </div>
                    <div className="mt-10">
                        <p className="text-red-400 text-2xl lg:text-3xl font-bold">
                            Mission
                        </p>
                        <Comp
                        content={['To improve employability by providing high-quality undergraduate and graduate education in computer-related discipline',
                        "To develop professionals to satisfy the rising personnel demands and needs of industry and entrepreneurship for the state's and country's economic growth.",
                        "To become capable in conducting high-quality technological research for the benefit of society."
                        ]}
                        />
                    </div>
                    <div className="mt-10">
                        <p className="text-red-400 text-2xl lg:text-3xl font-bold">
                            Program Educational Objectives
                        </p>
                        <Comp
                        content={['PEO1: engage in requirement analysis, designing, implementation, testing, deployment, and/or maintaining of software systems in the domain of computer science & engineering and allied fields.',
                        'PEO2: solve socially relevant challenges using computer science and engineering expertise, and/or pursue higher education and research',
                        'PEO3: work productively in a team and as an individual in interdisciplinary projects in industry/academia setup',
                        'PEO4: To participate in lifelong learning and career advancement, as well as adapting to changing professional and social requirements .',
                        'PO5. Modern tool usage: Create, select and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modelling to complex engineering activities with an understanding of the limitations.',
                        'PO6. The engineer and society:  Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.',
                        'PO7. Environment and sustainability: Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.',
                        'PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
                        'PO9. Individual and team work: Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
                        'PO10. Communications: Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.',
                        'PO11. Project management and finance: Demonstrate knowledge and understanding of the engineering and management principles and apply these to ones own work, as a member and leader in a team, to manage projects and in multidisciplinary environments',
                        'PO12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.'
                        ]}
                        />
                    </div>
                    <div className="mt-10">
                        <p className="text-red-400 text-2xl lg:text-3xl font-bold">
                            Program Specific Outcome
                        </p>
                        <Comp
                        content={['PSO1: Analyze, design, model, develop, test, and manage complex software and information management systems.',
                        'PSO2: Develop sustainable, intelligent, and secure computing solutions for real time challenges.'
                        ]}
                        />
                    </div>
                </div>
            </div>

            {/* Add the floating animation styles */}
            <style jsx global>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-15px) translateX(15px); }
                    50% { transform: translateY(-25px) translateX(5px); }
                    75% { transform: translateY(-15px) translateX(-15px); }
                    100% { transform: translateY(0) translateX(0); }
                }
            `}</style>
        </div>
    )
}

export default Page