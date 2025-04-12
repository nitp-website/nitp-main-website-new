import BackDepartment from "../../../components/department/BackDepartment";


export default function Page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-xl lg:text-2xl font-bold">
                        P O
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
                    <div className="text-red-900 text-base lg:text-xl font-normal  mt-8">PROGRAM OUTCOME (POs) for UG (B.Tech - ECE)</div>
                    <ol className="list-decimal ml-5 px-3 space-y-4 lg:text-base text-sm mb-12">
                        <li>In-depth knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.</li>
                        <li>Ability to identify and formulate research problems and to analyze it.</li>
                        <li>Ability to design solutions for engineering problems and design system components or processes that meet specified needs, taking into consideration health &amp; safety, cultural, societal, and environmental issues.</li>
                        <li>Ability to apply modern tools/software in solutions to the realistic problems related to engineering.</li>
                        <li>Ability to function individually and with teams that are diverse and multidisciplinary, to accomplish a common goal with professional, ethical, and social responsibilities.</li>
                        <li>Obtaining the knowledge and understanding of engineering and management principles to apply these in managing projects in a multidisciplinary environment.</li>
                        <li>Ability to communicate effectively with the community of engineers and society at large.</li>
                        <li>Ability to understand the impact of engineering solutions in a global, economic, environmental, and social context.</li>
                        <li>Recognize the need for lifelong learning in the context of technological developments.</li>
                    </ol>
                </div>

                {/* M.tech */}
                <div className="mt-10">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">M.Tech :-</div>
                    <div className="text-red-900 lg:text-xl text-base mb-8">PROGRAM OUTCOME (POs) for PG (M.Tech - ECE)</div>
                    <ol className="list-decimal ml-5 space-y-4 lg:text-base text-sm">
                        <li>Understanding of fundamental concepts and gaining in-depth knowledge of digital communication, wireless propagation, antenna engineering, RF techniques, optical communication, data networks, signal processing, etc.</li>
                        <li>Ability to apply in-depth knowledge of relevant mathematical and statistical techniques for solving complex problems in communication engineering.</li>
                        <li>Ability to design and conduct experiments and to interpret the experimental results.</li>
                        <li>Ability to apply modern tools/software to solve the realistic problems related to communication engineering.</li>
                        <li>Ability to identify, formulate, and solve engineering problems related to communication engineering.</li>
                        <li>Ability to function individually and with teams that are diverse and multidisciplinary, to accomplish a common goal with professional, ethical, and social responsibilities.</li>
                        <li>Ability to communicate effectively with the community of engineers and society at large.</li>
                        <li>Identify the need for lifelong learning in the context of technological developments.</li>
                        <li>Ability to understand the impact of engineering solutions in a global, economic, environmental, and social context.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}