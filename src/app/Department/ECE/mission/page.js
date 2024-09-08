import BackDepartment from "../../../components/department/BackDepartment";


export default function Page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        MISSION AND VISION
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Electronics And Communication Enginnering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ECE"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    <ul className="list-none list-inside ml-5 space-y-4 lg:text-base text-sm text-justify">
                        <li>To provide globally competitive and high quality human resource by preparing students with broad-based / specialized technical education at UG, PG, and Ph.D. levels.
                            To increase research intensity and become a leading product based innovation centre by significantly contributing towards development of new technologies.
                            To contribute to the country and the society at large by strengthening the interaction between academia and industries for addressing the need of the mankind.</li>
                    </ul>
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    <ol className="list-none list-inside ml-5 space-y-4 text-sm lg:text-base text-justify ">
                        <li>
                            To become a centre of excellence to impart up-to-date technical education, which will let our students to attain their maximum technical potential, managerial capability, be competitive in the job market and to emerge as a leading research hub.
                        </li>
                    </ol>
                </div>


            </div>
        </div>
    )
}