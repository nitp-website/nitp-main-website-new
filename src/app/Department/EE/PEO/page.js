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
                        Electrical Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/EE"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* B.tech */}
                <div className="">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">B.Tech :-</div>
                    <div className="text-red-900 text-base lg:text-xl font-normal  mb-8">Programme Educational Objectives (PEO) for UG (B.Tech - EE)</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm mb-12">
                        <li>The program is devoted to impart learning and understanding of different segments of Electrical Engineering.</li>
                        <li>The program aims to provide students with the opportunity to apply advanced techniques and develop skills to explore new problems in Electrical Engineering. It aims to produce graduates, who are employable in Industries and/or can pursue higher studies.</li>
                        <li>The program is expected to empower students to collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly way.</li>
                        <li>The program is designed to encourage students to pursue life-long learning and develop professional ethics, communication skills, leadership quality, and teamwork capability through continuing education toward self-improvement.</li>
                    </ul>
                </div>

                {/* M.tech */}
                <div className="mt-10">
                    <div className="text-red-900 font-semibold text-xl lg:text-2xl mb-2">M.Tech :-</div>
                    <div className="text-red-900 lg:text-xl text-base mb-8">Programme Educational Objectives (PEO) for PG (M.Tech - EE)</div>
                    <div className="text-red-900 lg:text-xl text-base mb-8">PG (M. Tech. - Control System)</div>
                    <ol className="list-decimal ml-5 space-y-4 text-sm lg:text-base mb-12">
                        <li>To impart learning and understanding towards different segments of Control System Engineering so that Graduates of the program will have successful careers in Instrumentation, automation, and inter-disciplinary fields.</li>
                        <li>To empower graduates of the program to excel in research, and contribute to technological developments in control and instrumentation.</li>
                        <li>To prepare the graduates to effectively collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly manner.</li>
                        <li>To encourage students to pursue lifelong learning and professional development through continuing education and self-improvement.</li>
                    </ol>

                    <div className="text-red-900 lg:text-xl text-base mb-8">PG (M. Tech. - Power System)</div>
                    <ol className="list-decimal ml-5 space-y-4 text-sm lg:text-base mb-12">
                        <li>To impart learning and understanding towards different segments of the Power System; which at present, is one of the important pillars of the modern world, and aims to produce postgraduates in power systems, who are employable in Industries and/or can pursue higher studies.</li>
                        <li>To provide the students with the opportunity to learn and use the advanced techniques, skills, and modern scientific and engineering tools to explore new problems in the energy sector.</li>
                        <li>To empower students to effectively collaborate with different sectors of the field that shall lead to innovation for solving social, technical, and business challenges in an optimized and environment friendly manner.</li>
                        <li>To encourage students to pursue life-long learning and professional development through continuing education and self-improvement.</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}