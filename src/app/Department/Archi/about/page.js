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
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Architecture & Planning
                    </p>
                </div>
                <div>
                    <BackDepartment navigate={'/Department/Archi'} />
                </div>
            </div>
            {/* section 1 */}
            <div className="mb-10 lg:w-3/4">
                <p className="text-justify lg:text-lg">The Department of Architecture was established at the Bihar College of Engineering (BCE) Patna in 1979 under Patna University. It was the first time that architectural education had commenced in Bihar. When BCE Patna was rechristened as the National Institute of Technology Patna on 28th January 2004, it came under the control of the Ministry of Human Resource Development (MHRD), Government of India. The Department of Architecture and Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of Urban and Regional Planning (MURP),  and Ph.D. in Architecture and Planning.</p>
                <br />
                <p className="text-justify lg:text-lg">
                    The B.Arch. course, apart from fulfilling the functional requirements, leads towards creativity, innovation and aesthetics in the design of buildings and their environments. The postgraduate course in Master of Urban and Regional Planning, which commenced in 2012-13, imparts knowledge of urban and regional planning, green infrastructure, environment planning, sustainability and energy efficient aspects in urban and regional planning. It emphasizes creating new ideas and innovative physical/spatial planning concepts in the present scenario. The nomenclature of the Department of Architecture was changed to the Department of Architecture and Planning in the year 2020. This course is affiliated with the Institute of Town Planners, India.
                </p>
                <br />
                <p className="text-justify lg:text-lg">
                    The PhD programme started in 2009 with research areas in architecture, urban planning, regional planning, environmental planning, transport planning, architectural conservation, landscape, housing, healthcare architecture, and construction planning management.
                </p>
            </div>
        </div>
    )
}
export default Page