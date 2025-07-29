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
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1A0l-C3vXUjL3qrV6dZutObFlQKiVhOuJ/view">B.Tech Course Structure(2021)</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1F6i7jfE9LzhGJM7M1SqbDhtDXd8dq9Dj/view?usp=drive_link">B.Tech Syllabus (2021)</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/198DYWz6y1TK1lEeNX_V9eP01aNamRJtW/view">B.Tech Course Structure (2022)</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1FVrOsNGJdN09TRtKnvb9_rALJy8E5Dwz/view">B.Tech Syllabus (2022)</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1gDzCfUQfjaUqFNP61z3YG-R6H_8K6y89/view">B.Tech Course Structure (2023) onwords </a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/131yWvyK8E7ZIju7abxcT76D3NfYXHvqR/view">B.Tech Syllabus (2023) onwords </a></li>
                          </ul>
                </div>

          {/* Dual Degree PROGRAM */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Dual Degree  PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1R24uKKW9fxbtv6TlWzCfgIuqTydIN5ND/view">Dual Degree (B.Tech + M.Tech (PSE)) Course Structure (2022) </a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1PlIaW0QziCXjOoMyy425vZocUJn9geuO/view">Dual Degree (B.Tech + M.Tech (PSE)) Syllabus (2022)</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1D-JX5uoJ3Vf7tENlyq0Z3AEQKAAinfBo/view">Dual Degree (B.Tech + M.Tech (PSE)) Course Structure (2023) onwards</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1LJHJqsRSC8-V_P3zkAxu6wn5mdyWfu7m/view">Dual Degree (B.Tech + M.Tech (PSE)) Syllabus (2023) onwards</a></li>
                    </ul>
                </div>
    
                {/* PG PROGRAM  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PG PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1pES5tBVykgQJWu2TFNKkR-0BwrF5wtrW/view?usp=sharing">M.Tech (Intelligent Transport Systems) Course structure and Syllabus</a></li>

                    
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1HOzQYLI-96kpv4gT9NDoKqLItHsALVzS/view">M.Tech (Control System Engg and Power System Engg) Course structure</a></li>
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1xnaep1qftT-n8RMVEyTYXk-ASqBFcLAK/view">M.Tech- Control System Engg and Power System Engg) Syllabus</a></li>
                    </ul>
                </div>
                {/* PhD PROGRAM  */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">PhD PROGRAM :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 text-lg max-md:text-[15px] max-sm:text-sm">
                        <li className="hover:text-blue-800 text-sm lg:text-base"><a href="https://drive.google.com/file/d/1KdqphtQwIuWrC_gdYxjuAcG9TaxaUVf-/view">Ph.D. in Electrical Engineering</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
