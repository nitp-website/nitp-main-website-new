import BackDepartment from "../../../components/department/BackDepartment"


function page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        ABOUT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        CHEMICAL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Chemical"} />
            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">



                {/* section 1 */}
                <div className="mb-10">
                    <p className="text-justify">The Department of Chemical Engineering at the National Institute of Technology Patna was established in 2024 with the vision to become a leader in Chemical Engineering education and research. Our engineering programs will provide a robust foundation in chemical engineering principles, combining traditional courses with emerging specializations. Students delve into core subjects such as material and energy balance, thermodynamics, mass transfer, heat transfer, fluid mechanics, chemical reaction engineering, process control, petroleum and polymer processing, and computational systems. We are dedicated to fostering an environment of innovative research and development.</p>
                </div>
                <div className="mb-10">
                    <p className="text-justify">The department continuously expands its research facilities to support projects in diverse areas such as Catalysis & reaction engineering, Fuel cells, Advanced materials characterization, Chemical products processing, Modeling & Simulation, Chemical & Photo reactors, Biological systems engineering, Food processing technology, Clean & green technology, Nanomaterials, and Electrochemical energy conversion. Recognizing the importance of collaboration, we aim to actively engage with industry leaders, research institutions, and elite academic organizations like IITs and NITs. Through different lecture series, seminars, workshops, and conferences, we ensure that our students and faculty stay at the forefront of industry trends and innovations. These collaborations provide students with valuable networking opportunities and exposure to real-world applications of their studies.</p>
                </div>
                <div className="mb-10">
                    <p className="text-justify">Our commitment is to contribute to sustainable development and improve the quality of life through excellence in teaching, research, and innovation. We strive to create an academic atmosphere that encourages creativity, critical thinking, and a multidisciplinary approach to solving global challenges. Our objective is to provide our students with professional skills, such as communication, in addition to solid foundations.</p>
                </div>
                <div className="mb-10">
                    <p className="text-justify">Join us at the Department of Chemical Engineering at the National Institute of Technology Patna and become part of a dynamic community dedicated to shaping the future of chemical engineering and making a meaningful impact on society
                    </p>
                </div>
            </div>
        </div>
    )
}
export default page