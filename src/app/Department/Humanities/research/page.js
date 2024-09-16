import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2  text-black">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        RESEARCH AND HIGHLIGHT
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
                        <div className="font-bold mb-2 text-red-900">Broad research areas of HSS department are classified as below: -</div>
                        <div className=" grid grid-cols-12  border border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold ">S.no.</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold ">Research Domain</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-5 border-r border-black font-bold ">Faculty Name</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-2 font-bold ">Area of Specialisations</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-t-0 border-black text-[12px]">
                            <div className="px-2 flex flex-col justify-center col-span-1 border-r border-black ">1</div>
                            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black ">Economics</div>
                            <div className="flex flex-col justify-center col-span-5 border-r border-black ">
                                <div className="px-2 flex h-full flex-col justify-center col-span-5 border-b border-black">Dr. Ashish Ranjan Sinha</div>
                                <div className="px-2 flex h-full flex-col justify-center col-span-5 border-black">Dr. Ashish Ranjan Sinha</div>
                            </div>
                            <div className=" flex flex-col justify-center col-span-2  ">
                                <div className="flex px-2 py-3 flex-col justify-center col-span-2">Development Economics, Agriculture Economics, Financial Economics, Labour & HRM</div>
                                <div className="flex px-2  flex-col justify-center col-span-2 border-t border-black">Agriculture, Labour & Employment, Finance, Behavioural Economics, Political Economy, Growth and Development issues</div>
                            </div>
                        </div>

                        <div className=" grid grid-cols-12  border border-t-0 border-black text-[12px]">
                            <div className="px-2 flex flex-col justify-center col-span-1 border-r border-black ">2</div>
                            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black ">English</div>
                            <div className="px-2 flex flex-col justify-center col-span-5 border-r border-black ">Dr. Zeeshan Ali</div>
                            <div className="px-2 flex flex-col justify-center col-span-2  ">Indian Writing in English, English Language Teaching</div>
                        </div>

                        <div className=" grid grid-cols-12  border border-t-0 border-black text-[12px]">
                            <div className="px-2 flex flex-col justify-center col-span-1 border-r border-black ">3</div>
                            <div className="px-2 flex flex-col justify-center col-span-4 border-r border-black ">Sociology</div>
                            <div className="px-2 flex flex-col justify-center col-span-5 border-r border-black ">Dr. Manish Tiwari</div>
                            <div className="px-2 flex flex-col justify-center col-span-2  ">Joint Forest Management, Rural Development, Common Property Resource Management, Sustainable Development, Panchayati Raj, Gender Development and inclusive studies, Labour Empowerment & Migration Studies, multidisciplinary approach associated with socio- cultural relevance</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page