import BackDepartment from "../../../components/department/BackDepartment";


export default function page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        Mechatronics and Automation Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Mechatronics"} />

            </div>

            <div className="container mx-auto mt-3 bg-red-100  w-[70%] rounded-xl pt-4">
            <div className="container mx-auto px-4  bg-red-100 text-black w-full md:w-[70%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center">
                        <p className="text-xs sm:text-base ">B.Tech Mechatronics and Automation Engineering :</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://drive.google.com/file/d/1IQFqpo9jTHIBNgS8o2zeyv5xIZYWcQ7p/view?usp=sharing">
                            <button className="bg-red-700 hover:bg-red-600 text-white p-1 px-2 rounded text-xs sm:text-sm">
                                Course Structure & Syllabus
                            </button>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center">
                        <p className="text-xs sm:text-base ">B.Tech Mechatronics and Automation Engineering :</p>
                    </div>
                    <div className="flex justify-end">
                        <a href="https://drive.google.com/file/d/107lkKUTm9Yoilr_RiP2BpnkAy_VU1soJ/view?usp=sharing">
                            <button className="bg-red-700 hover:bg-red-600 text-white p-1 px-2 rounded text-xs sm:text-sm">
                                Course Structure 
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
