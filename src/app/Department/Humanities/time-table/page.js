import BackDepartment from "../../../components/department/BackDepartment"


function page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 h-screen text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Time Table
                    </p>
                </div>
                <div className=" lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Humanities & Social Sciences
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Humanities"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md h-screen">
                {/* LINKS */}
                <div className="mb-10">
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1c6f2tp-MMqf9SzPudHyerB7NfdDB4ffo/view">
                        Click here for the Master_Time-Table_ HSS_July-December 2024.</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default page