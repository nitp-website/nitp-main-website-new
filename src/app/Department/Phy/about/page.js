import BackDepartment from "../../../components/department/BackDepartment"


function Page() {
    return (
        <div className="bg-orange-50 flex flex-col p-10 max-sm:p-2 text-black">
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        ABOUT
                    </p>
                </div>
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Applied Physics and Materials Engineering
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/Phy'} />
                </div>
            </div>
            {/* section 1 */}
            <div className="mb-10 lg:w-3/4">
                <p className="text-justify lg:text-lg">
                    The Department of Physics was established in the year
                    1924 and since then has been functioning as an important unit of the institute.
                    As of now, the Department has nine faculty members who are actively involved
                    in both teaching and research and three supporting staffs including one
                    Technical Assistant for Labs. The Department of Materials Science and
                    Engineering started in the year 2022. The Department has started a new Dual
                    degree program B.Tech-M.Tech in Material Science and Engineering from the
                    session 2022-23. There are 08 candidates enrolled in dual degree program in the
                    session 2022-23 and 09 candidates enrolled in the session 2023-24 and 10
                    candidates enrolled in the session 2024-25. In the year of 2024-25 the
                    department has been merged with Physics department and thereafter new
                    department has started and named as “Applied Physics and Materials
                    Engineering”. The Department of Applied Physics and Materials Engineering
                    also offers Ph.D program (Full time and Part time research program) in
                    Engineering to provide a platform for bright graduates and post graduates to
                    conduct research in the diversified area of Applied Physics. The faculty is also
                    involved in producing good number of high quality research publications each
                    year. The new department is an interdisciplinary department which draws
                    attention from all other engineering applications with basic understanding of
                    Materials science. The different laboratories of the department mainly focuses
                    on the study of the development of new materials and its advanced
                    manufacturing methods and modification of its properties by suitable
                    compositional and heat treatment methods by altering the physical and
                    mechanical behaviour materials for its widespread application.
                </p>

            </div>
        </div>
    )
}
export default Page
