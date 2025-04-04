"use client"
import BackDepartment from "../../../components/department/BackDepartment"

function Comp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 md:text-lg pb-2 text-gray-300">
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
                            ACHIEVEMENTS
                        </p>
                    </div>
                    <div className="mt-2">
                        <p className="text-red-100 text-base font-semibold">
                            COMPUTER SCIENCE ENGINEERING
                        </p>
                    </div>
                    <div>
                        <BackDepartment navigate={'/Department/CSE'}/>
                    </div>
                </div>

                <div className="max-sm:mx-6 max-md:mx-8 mx-20 border border-red-900/20 p-8 rounded-xl shadow-2xl shadow-red-900/50 backdrop-blur-md bg-gray-900 bg-opacity-70 mt-8">
                    <Comp
                        content={[
                            'ISEA Project Phase – I (Completed)',
                            'ISEA Project Phase – II (Ongoing)',
                            'ICT-Academy Project (Ongoing)',
                            '"Digital Literacy" Course under Skill Development Program (PMRY scheme) Completed'
                        ]}
                    />
                </div>
            </div>

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