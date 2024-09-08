import BackDepartment from "../../../components/department/BackDepartment";


export default function page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        SYLLABUS
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        MECHANICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ME"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* UG PROGRAM */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">UG PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="">B.Tech_Course_Structure_2021 - (2024 April update)</a></li>
                        <li className="hover:text-blue-800"><a href="">B.Tech_Course_Structure_2022 onwards - (2024 April update)</a></li>
                        <li className="hover:text-blue-800"><a href="">B.Tech_Detailed Syllabus_3rd Semester Onwards.</a></li>
                        <li className="hover:text-blue-800"><a href="">B.Tech 1st Year Even Semester Syllabus</a></li>
                        <li className="hover:text-blue-800"><a href="">B.Tech 1st Year Odd Semester Syllabus</a></li>
                    </ul>
                </div>
                {/* Dual degree PROGRAM  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">DUAl DEGREE PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="">Dual Degree (B.Tech + M.Tech) _ Course Structure _ 2022 Onwards.</a></li>
                        <li className="hover:text-blue-800"><a href="">Dual Degree ( B.Tech + M.Tech) _ Detailed Syllabus _ 3rd Semester Onwards.</a></li>
                    </ul>
                </div>
                {/* pg PROGRAM  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PG PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="">M.Tech _ Course Structure _ All Specializations.</a></li>
                        <li className="hover:text-blue-800"><a href="">M.Tech _ Detailed Syllabus _ All Specializations.</a></li>
                    </ul>
                </div>
                {/* PHD PROGRAM  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PHD PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="">Ph.D. in Mechanical Engineering</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}