import BackDepartment from "../../../components/department/BackDepartment";


export default function mission(){
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-2xl  font-bold">
                        MISSION AND VISION
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                    CHEMICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Chemical"}/>

            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    {/* <ul className="list-disc list-inside ml-5 space-y-4 text-sm lg:text-base">
                        <li>To offer quality education in electrical engineering to meet the requirements of industry, society and nation.</li>
                        <li>To provide contemporary technical knowhow by regular upgradation of curriculum as per the needs of industry and educative exposures like short term courses, conferences, etc.</li>
                        <li>To establish state-of-the-art infrastructural facilities in the arena of academics and research.</li>
                        <li>To inculcate leadership, moral and ethical values among the students.</li>
                    </ul> */}
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    {/* <ul className="list-disc list-inside ml-5 space-y-4 text-sm lg:text-base">
                        <li>To achieve sustainable growth towards academic excellence in the field of Electrical Engineering.</li>
                    </ul> */}
                </div>
                
            </div>
        </div>
    )
}