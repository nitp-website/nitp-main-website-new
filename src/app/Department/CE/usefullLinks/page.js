import BackDepartment from "../../../../components/BackDepartment"


function page() {
    return (
        <div className="flex flex-col p-10 max-sm:p-2 h-screen">
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        USEFULL LINKS
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        ELECTRICAL Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/CE"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* LINKS */}
                <div className="mb-10">
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800"><a href="">Study Materials</a></li>
                        <li className="hover:text-blue-800"><a href="">Sample Question Papers</a></li>
                        <li className="hover:text-blue-800"><a href="">Lab Manuals</a></li>
                        <li className="hover:text-blue-800"><a href="">Placement</a></li>
                        <li className="hover:text-blue-800"><a href="">E-Learning Resources</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default page