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
                        Material Science & Engineering
                    </p>
                </div>
                <BackDepartment navigate={"/Department/Material"} />

            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* vision */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">VISION :-</div>
                    <ul>
                        <li>
                            To provide a broad education about the theoretical and practical knowledge on emerging and existing materials and understanding its science by performing some qualitative research for the application prospective in terms of social, economical and environmental context.
                        </li>
                    </ul>
                </div>
                {/* mission */}
                <div className="mb-10">
                    <div className="text-red-900 font-semibold lg:text-2xl text-xl mb-8">MISSION :-</div>
                    <ul>
                        <li>
                            To train and educate the students about the fundamentals of materials science who can contribute to the society by sharing their knowledge and research innovations in the emerging areas of Materials Science application.


                        </li>
                        <li>To train and educate the students in the emerging and challenging areas of materials research and development for its widespread application.</li>

                        <li>To create a good collaboration with National and International research organization through the students to be more competitive and productive among other institution of India.</li>


                    </ul>
                </div>

            </div>
        </div>
    )
}