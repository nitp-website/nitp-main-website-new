import BackDepartment from "../../../components/department/BackDepartment";


export default function Page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        P E O
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Electronics And Communication Enginnering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ECE"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* B.tech */}
                <div className="">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">B.Tech :-</div>
                    <div className="text-red-900 text-base lg:text-xl font-normal  mb-8">Programme Educational Objectives (PEO) for UG (B.Tech - ECE)</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm mb-12">
                        <li>
                            To generate high-quality human and knowledge resources in the core areas of Electronics &amp;
                            Communication engineering and emerging fields of research, as well.
                        </li>
                        <li>
                            To make valuable contributions to technology for social and economic development of the nation.
                        </li>
                        <li>
                            To put in focused efforts to produce graduate students, competent for finding their place in leading industries and renowned educational institutes, and for taking up successful entrepreneurial ventures as well.
                        </li>
                    </ul>
                </div>

                {/* M.tech */}
                <div className="mt-10">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">M.Tech :-</div>
                    <div className="text-red-900 lg:text-xl text-base mb-8">Programme Educational Objectives (PEO) for PG (M.Tech - ECE)</div>
                    <ol className="list-decimal ml-5 space-y-4 text-sm lg:text-base mb-12">
                        <li>To generate high-quality human and knowledge resources in the core areas of communication engineering and emerging fields of research, as well, to make a valuable contribution in technology for social and economic development of the nation.</li>
                        <li>To produce graduate communication engineers with technical and managerial skills necessary to contribute to the R&amp;D, design, installation, management, operation, and/or maintenance of communication systems.</li>
                        <li>To put in focused efforts to produce graduate students, competent for finding their place in leading industries and renowned educational institutes, and for taking up successful entrepreneurial ventures as well.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}