import BackDepartment from "../../../components/department/BackDepartment"


function page(){
    return (
        <div className="flex flex-col p-10 max-sm:p-2 h-screen text-black">  
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl  font-bold">
                        USEFULL LINKS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        ELECTRICAL Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"}/>

            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* LINKS */}
                <div className="mb-10">
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800"><a href="https://docs.google.com/spreadsheets/d/1cLbd7aYSImOAz_7GpMMt1MPifE9erSGf_TI2qglHzis/edit?usp=sharing_eip_se_dm&ts=661c01da" target="blank">Study Materials</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/drive/folders/13AA_X_5qbcNRD0ni-ZQnvIOY3Ko1pgOJ?usp=drive_link" target="blank">Sample Question Papers</a></li>
                        <li className="hover:text-blue-800"><a href="https://electricallab.in/" target="blank">Lab Manuals</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1UMNojontWLypMfbavmYk8ZwMV2KiKcuw/view?usp=drive_link" target="blank">Placement</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1QXYr176K2TnlxSfJIJD2bdyjXtvL7nvz/view" target="blank">E-Learning Resources</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default page