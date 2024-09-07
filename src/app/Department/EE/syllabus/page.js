import BackDepartment from "../../../components/department/BackDepartment";


export default function page(){
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
                        ELECTRICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"}/>

            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* UG PROGRAM */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">UG PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1A0l-C3vXUjL3qrV6dZutObFlQKiVhOuJ/view">B.Tech_EE_Course Structure_Batch-2021</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1F6i7jfE9LzhGJM7M1SqbDhtDXd8dq9Dj/view?usp=drive_link">B.Tech_Detailed Syllabus_Batch-2021</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/198DYWz6y1TK1lEeNX_V9eP01aNamRJtW/view">B.Tech_EE_Course Structure_Batch-2022</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1FVrOsNGJdN09TRtKnvb9_rALJy8E5Dwz/view">B.Tech_Detailed Syllabus_Batch-2022</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1gDzCfUQfjaUqFNP61z3YG-R6H_8K6y89/view">B.Tech_EE_Course Structure_Batch-2023_Onwards</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/131yWvyK8E7ZIju7abxcT76D3NfYXHvqR/view">B.Tech_Detailed Syllabus_Batch-2023_Onwards</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1R24uKKW9fxbtv6TlWzCfgIuqTydIN5ND/view">Dual Degree (B.Tech + M.Tech (PSE))_Course Structure_Batch-2022</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1PlIaW0QziCXjOoMyy425vZocUJn9geuO/view">Dual Degree (B.Tech + M.Tech (PSE))_Detailed Syllabus_Batch-2022</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1D-JX5uoJ3Vf7tENlyq0Z3AEQKAAinfBo/view">Dual Degree (B.Tech + M.Tech (PSE))_Course Structure_Batch-2023_Onwards</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1LJHJqsRSC8-V_P3zkAxu6wn5mdyWfu7m/view">Dual Degree (B.Tech + M.Tech (PSE))_Detailed Syllabus_Batch-2023_Onwards</a></li>
                    </ul>
                </div>
                {/* PG PROGRAM  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PG PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1HOzQYLI-96kpv4gT9NDoKqLItHsALVzS/view">M.Tech- Control System Engg_and_Power System Engg_Course structure</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1xnaep1qftT-n8RMVEyTYXk-ASqBFcLAK/view">M.Tech- Control System Engg_and_Power System Engg_Detailed Syllabus</a></li>
                    </ul>
                </div>
                {/* PHD PROGRAM  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PHD PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1KdqphtQwIuWrC_gdYxjuAcG9TaxaUVf-/view">Ph.D. in Electrical Engineering</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
