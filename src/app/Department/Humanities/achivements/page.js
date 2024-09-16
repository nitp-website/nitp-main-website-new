import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className="flex flex-col p-10 max-sm:px-2 text-black">  
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        ACHIVEMENTS
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Humanities"}/>

            </div>
            {/* LINKS */}
            <div className=" border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10 text-black overflow-x-auto">
                    <div className="w-[1300px]">
                        <div className="font-bold mb-2 text-red-900">Externally Sponsored Projects List:</div>
                        <div className=" grid grid-cols-12  border border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">S.no.</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-r border-black font-bold">Name of the Project</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">Name of the PI</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-r border-black font-bold">Sponsoring Agency</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1  font-bold">Status</div>
                        </div>
                        <AchivementCompo 
                            sn={"1"}
                            project={"Skill Development for Rural Youth for Employability Enhancement: A Study of Aspirational Districts in Bihar"}
                            pi={"Dr. Deepak K Behera"}
                            agency={"Indian Council of Social Science Research (ICSSR) New Delhi"}
                            status={"On-Going (2023)"}
                        />
                        <AchivementCompo 
                            sn={"2"}
                            project={"2 India's Agrarian Crisis and the Emergence of Contract Farming: A Study of Bihar"}
                            pi={"Dr. Deepak K Behera (PI) and Dr. Ashish R Sinha (Co-PI)"}
                            agency={"Indian Council of Social Science Research (ICSSR) New Delhi"}
                            status={"Completed (2016-2018)"}
                        />

                        {/* List of Granted Patents: */}
                        <div className="font-bold my-2 text-red-900">List of Granted Patents:</div>
                        <div className=" grid grid-cols-12  border border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">S.no.</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-2 border-r border-black font-bold">Patent No</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">Title of the Patent</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-2 border-r border-black font-bold">Date of Grant</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-3  font-bold">Inventors Name</div>
                        </div>
                        <div className=" grid grid-cols-12  border border-t-0 border-black text-[12px]">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black ">1</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 border-r border-black ">384426-001</div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black ">IoT Based Autonomous Stairs Climbing Material Handling Robot</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 border-r border-black ">23.11.2023</div>
                            <div className="flex flex-col justify-center col-span-3 ">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-b border-black">1. Dr. Abhishek Singh</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-b border-black">2. Dr Ashish Ranjan Sinha</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-b border-black">3. Dr Swarnambuj Suman</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 ">4. Dr. Amit Kumar</div>
                            </div>
                        </div>
                        <div className=" grid grid-cols-12  border border-t-0 border-black text-[12px]">
                            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black ">2</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 border-r border-black ">202022104673.5</div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black ">Social Network Traceability System</div>
                            <div className="px-2  flex flex-col justify-center col-span-2 border-r border-black ">05.9.2022</div>
                            <div className="flex flex-col justify-center col-span-3 ">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-b border-black">1. Aamir Junaid Ahmad</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-b border-black">2. Zeeshan Ali</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-b border-black">4. Hasibul Hasan Mansoori</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 border-b border-black">5. Sabina Priyadarshini</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-3 ">6. Raj Sinha</div>
                            </div>
                        </div>
                        {/* Phd Awarded */}
                        <div className="font-bold my-2 text-red-900">Phd Awarded:</div>
                        <div className=" grid grid-cols-12  border border-black">
                            <div className="p-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">S.no.</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">Roll</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-2 border-r border-black font-bold">Name of the Scholar</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">Name of the Supervisor</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-3 border-r border-black font-bold">Title of Thesis</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-1  font-bold">Year of Completion</div>
                        </div>
                        <div className=" grid grid-cols-12 border-t-0  border border-black text-[12px]">
                            <div className="p-2  flex flex-col justify-center col-span-1 border-r border-black ">1</div>
                            <div className="p-2  flex flex-col justify-center col-span-1 border-r border-black ">155HS01</div>
                            <div className="p-2  flex flex-col justify-center col-span-2 border-r border-black ">Mona Ratnesh</div>
                            <div className="p-2  flex flex-col justify-center col-span-4 border-r border-black ">Dr. Ashish R Sinha</div>
                            <div className="p-2  flex flex-col justify-center col-span-3 border-r border-black ">Antecedents and Consequences of Work Life Balance: A Study on Women Employee of Private Sector Banks in Bihar</div>
                            <div className="p-2  flex flex-col justify-center col-span-1  ">2020</div>
                        </div>
                        <div className=" grid grid-cols-12 border-t-0  border border-black text-[12px]">
                            <div className="p-2 h-10 flex flex-col justify-center col-span-1 border-r border-black ">2</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-1 border-r border-black ">165HS01</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-2 border-r border-black ">Maryam Sabreen</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-4 border-r border-black ">Dr. Deepak K Behera</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-3 border-r border-black ">Rural Non-Farm Employment Growth: A Study of Bihar</div>
                            <div className="p-2 h-10 flex flex-col justify-center col-span-1  ">2022</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


function AchivementCompo({sn, project, pi, agency, status}){
    return (
        <div className=" grid grid-cols-12  border border-t-0 border-black text-[12px]">
            <div className="px-2  flex flex-col justify-center col-span-1 border-r border-black">{sn}</div>
            <div className="px-2  flex flex-col justify-center col-span-3 border-r border-black">{project}</div>
            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">{pi}</div>
            <div className="px-2  flex flex-col justify-center col-span-3 border-r border-black">{agency}</div>
            <div className="px-2  flex flex-col justify-center col-span-1  ">{status}</div>
        </div>
    )
}


export default Page