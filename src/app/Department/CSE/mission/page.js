import BackDepartment from "../../../components/department/BackDepartment"

function Comp({content}){
    return(
        <div className="flex flex-col mt-8 lg:ml-10">
            <ul>
                {content.map((points,i)=>{
                    return(
                        <li key={i} className="list-disc ml-4 text-sm lg:text-base
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
        <div className=" flex flex-col p-5 text-black">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-2xl font-bold">
                        Mission And Vision
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        COMPUTER SCIENCE ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={'/Department/CSE'}/>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div>
                    <div>
                    </div>
                    <p className="text-red-900 text-xl lg:text-2xl font-semibold">
                        VISION
                    </p>
                    <Comp
                    content={['To formulate up-to-date and flexible technical programs which will allow our graduates to attain their maximum technical potential, managerial capability, be competitive in the job market and to emerge as a centre of excellence.']}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-red-900 text-xl lg:text-2xl font-semibold">
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
                    <p className="text-red-900 text-xl lg:text-2xl font-semibold">
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

    )
}




export default Page