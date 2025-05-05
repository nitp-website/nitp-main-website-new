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
                        Applied Physics and Materials Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Phy"} />
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">Programme Educational Objectives (PEOs) :-</div>
                    <ul className="list-disc list-inside ml-5 space-y-4 lg:text-base text-sm">
                        <li>
                            To prepare graduates in Applied Physics and Materials Engineering for successful careers in Industry, Research, Entrepreneur and Academics dealing with analysis, design and management of systems and processes. It must also enable them to develop a strong understanding of various aspects of Materials Science and Engineering.
                        </li>
                        <li>
                            To provide the students a strong foundation in Science and Engineering fundamentals and also a comprehensive understanding of the several fields of Materials Science and Engineering such as Physics of Material, Process of Materials, Thermodynamics and Kinetics, Transport Phenomena, Characterization of Materials, Application in Bio-industry, Engineering Materials required to create novel products, solve Engineering problems and also pursue higher studies and research.
                        </li>
                        <li>
                            To create opportunities to students with good scientific and engineering breadth to work on interdisciplinary projects so as to comprehend, analyse, design and create novel products and solutions for real life problems.
                        </li>
                        <li>
                            To provide students with a sound foundation in mathematical and scientific subjects necessary to develop multidisciplinary approach and to inculcate in students ethical and communication skills and an ability to relate engineering issues to social context.
                        </li>
                        <li>
                            To provide the students an academic environment aware of excellence, professional ethics, moral values, social concerns and the value of life-long learning needed for a successful professional career.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}