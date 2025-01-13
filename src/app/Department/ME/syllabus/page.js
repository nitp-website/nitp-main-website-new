import BackDepartment from "../../../components/department/BackDepartment";


export default function page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        Syllabus 
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-sm lg:text-base font-semibold">
                        Mechanical Engineering 
                    </p>
                </div>
                <BackDepartment navigate={"/Department/ME"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* UG Program */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">UG Program  :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="">B.Tech_Course_Structure_2021 - (2024 April update)</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1xEnUsHvSnrt3YZw3TAp7jtc6Kegzv7gc/view?usp=sharing">B.Tech_Course_Structure_2022 onwards - (2024 April update)</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1pvAJ83EWECcfZwEGFLobwDr6Wj9QUs_J/view?usp=sharing">B.Tech_Detailed Syllabus_3rd Semester Onwards.</a></li>
                        <li className="hover:text-blue-800"><a href="">B.Tech 1st Year Even Semester Syllabus</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1cVV-UIgrYRqzNQqN45SHIRhxqjnEAki2/view?usp=sharing">B.Tech 1st Year Odd Semester Syllabus</a></li>
                    </ul>
                </div>
                {/* Dual Degree Program  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">DUAl DEGREE PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1L5qTBi_cuLJ0RhBPIRp6bYNb7jfQeI9d/view?usp=sharing">Dual Degree (B.Tech + M.Tech) _ Course Structure _ 2022 Onwards.</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1qeKZ5b7lvsQivN7oXQmS8rOnt88qYIt0/view?usp=sharing">Dual Degree ( B.Tech + M.Tech) _ Detailed Syllabus _ 3rd Semester Onwards.</a></li>
                    </ul>
                </div>
                {/* PG Program   */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PG PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/10uU7XcX9Y9kMZnVDGvi8M8gi9dJ1yab9/view?usp=sharing">M.Tech _ Course Structure _ All Specializations.</a></li>
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/1bkIRc4IHy-qQjDuWowa5Ce7soLEmOlBZ/view?usp=sharing">M.Tech _ Detailed Syllabus _ All Specializations.</a></li>
                    </ul>
                </div>
                {/* PhD Program   */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PHD PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li className="hover:text-blue-800"><a href="https://drive.google.com/file/d/17AU1_ZRrrKfa7zCAgS0St2EZTTlHHRj_/view?usp=sharing">Ph.D. in Mechanical Engineering</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
