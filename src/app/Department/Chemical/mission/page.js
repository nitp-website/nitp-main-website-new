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
                        CHEMICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Chemical"} />

            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    <ul>
                        <li>
                            To become a globally recognized Chemical Engineering and Technology Department renowned for excellence in education, research, and innovation, driving sustainable development and addressing the complex challenges of the future.
                        </li>
                    </ul>
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    <ul>
                        <li>
                            Provide rigorous, comprehensive education that prepares students for leadership roles in the chemical engineering profession and allied fields.</li>
                        <li>Foster a research environment that promotes innovative and impactful research, contributing to the advancement of chemical engineering knowledge and technology.</li>
                        <li>Lead initiatives that promote sustainable development, improving quality of life, and addressing global challenges through education, research, and community engagement.</li>
                        <li>Build strong collaborations with alumni, industry, research organizations, and academic institutions at both national and international levels to enhance educational and research outcomes.</li>
                        <li>Cultivate professional and ethical leadership among students and faculty, emphasizing the importance of integrity, responsibility, and lifelong learning in their careers.</li>
                        <li>Encourage a multidisciplinary approach to problem-solving, integrating knowledge from various fields to address society's and industry's evolving needs.
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}