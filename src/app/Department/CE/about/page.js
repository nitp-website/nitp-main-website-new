import BackDepartment from "../../../../components/BackDepartment"


function page() {
    return (
        <div className=" flex flex-col p-10 max-sm:p-2">
            <div className="flex flex-col  mb-6">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        ABOUT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        CIVIL ENGINEERING
                    </p>
                </div>
                <BackDepartment navigate={"/Department/CE"} />
            </div>

            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">



                {/* section 1 */}
                <div className="mb-10">
                    <p className="text-justify">The Department of Civil Engineering is the oldest and vibrant department of the institute, which was established along with the inception of the Institute in the year 1924. The Institute was formerly known as the Bihar College of Engineering Patna, a constituent engineering college under Patna University, until 27thJan 2004. It was rechristened to National Institute of Technology Patna on 28th Jan 2004 as an Autonomous Institute under MHRD, Govt. of India.</p>
                </div>
                <div className="mb-10">
                    <p className="text-justify">The Department of Civil Engineering is committed to provide quality teaching and research opportunities toits undergraduate, postgraduate and doctoral students. Apart from UG programme, the department also offers M. Tech and Doctoralprogrammes in the areas of Structural Engineering, Transportation Engineering, Water Resource Engineering,Environmental Engineering and Geotechnical Engineering. The intake strength of the Civil Engineering Department is 92 for undergraduate (BTech)and 112forpostgraduate (MTech). Presently, 25 PhD scholars are enrolled with the department for pursuing their doctoral researchprogram.The teaching and education is directed towards their successful career in International and National Industries/ Institutions, Public and Private sectors,and enable them to qualify various competitive examinations such as IES, IAS, GATE examinations etc.</p>
                </div>
                <div className="mb-10">
                    <p className="text-justify">The Department is actively involved in international and national research projects, and high valued consultancy works for the Government, Private Sector and Industries.The department also offers its expertise in various consultancy works and research projects fordifferent industries and organisations in the locale. The Department supports in upbringing of society and other educational institutes by providing training, workshops, technology transfer, capacity building, and awareness programs.</p>
                </div>
            </div>
        </div>
    )
}
export default page