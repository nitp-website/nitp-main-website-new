import BackDepartment from "../../../components/department/BackDepartment";


export default function mission() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-2xl  font-bold">
                        MISSION AND VISION
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-base font-semibold">
                        Mechatronics & Automation
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Mechatronics"} />

            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                   {/* vision*/}
            <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    <ul>
                        <li>
                            To create well-trained and skilled technocrats with a commitment to lifelong learning in the field of Mechatronics and Automation Engineering.
                        </li>
                    </ul>
                </div>
                {/* mision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    <ul>
                        <li>
                            To provide education that transforms young minds through rigorous teaching and thought processes to meet the needs of society and industry.</li>
                        <li>To collaborate with leading industry partners and other academic and research institutes worldwide to strengthen the education and research ecosystem.</li>

                        <li>To prepare students for lifelong learning in their careers by fostering ethical and technical capabilities pertinent to mechatronics, automation, and allied engineering fields.</li>

                    </ul>
                </div>
             
            

            </div>
        </div>
    )
}