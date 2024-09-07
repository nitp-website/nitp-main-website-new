import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
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
                <BackDepartment navigate={'/Department/Archi'}/>
                </div>
            </div>
            {/* section 1 */}
            <div className="mb-10 lg:w-3/4">
                <p className="text-justify lg:text-lg">The Department of Architecture was established in the Bihar College of Engineering (BCE) Patna in the year 1979 under Patna University. It was the ¬ first time that architectural education had commenced in Bihar. When BCE Patna was rechristened as National Institute of Technology Patna on 28th January 2004, it came under the control of Ministry of Human Resource Development (MHRD), Government of India. The Department of Architecture and Planning offers programmes in Bachelor of Architecture (B.Arch.), Master of Urban and Regional Planning (MURP), Master of Architecture (Sustainable Architecture) and Ph.D. in Architecture and Planning.</p>
                <br/>
                <p className="text-justify lg:text-lg">
                The B.Arch. course, apart from ful¬filling the functional requirements, leads towards creativity, innovation and aesthetics in the approach for design of buildings and its environments. The postgraduate course in Master of Urban and Regional Planning, which commenced from 2012-13, imparts knowledge of urban and regional planning, green infrastructure, environment planning, sustainability and energy efficient aspects in urban and regional planning. It emphasizes on creating new ideas and innovative concepts of physical / spatial planning in the present scenario. The nomenclature of Department of Architecture gets changed to Department of Architecture and Planning in the year 2020. This course is affiliated by Institute of Town Planners, India.  
                </p>
                <br/>
                <p className="text-justify lg:text-lg">
                The M.Arch. programme stated in 2019-2020, the nomenclature of this post graduate programme was changed to Master of Architecture (Sustainable Architecture) from session 2022-23. The Course content focused more on environmental issues related to built environment, ecology, energy conscious built structure, Artificial Intelligence, Building Simulation and different means of passive architectural methods. The Ph.D. programme started in year 2009 with research areas in Architecture, Urban Planning, Regional Planning, Environmental Planning, Transport Planning, Architectural Conservation, Landscape, Housing, Healthcare Architecture and Construction Planning Management, etc. 
                </p>
            </div>
        </div>
    )
}
export default Page