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
                <div className="lg:mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                    Mathematics and Computing Technology
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/Math'}/>
                </div>
            </div>
            {/* section 1 */}
            <div className="mb-10 lg:w-3/4">
                <p className="text-justify lg:text-lg">
                The Department of Mathematics was established in 1924 and department
            offer several courses that support other engineering departments.
            Recently a new program Integrated M. Sc. in Mathematics is started
            and running successfully from the academic year 2015-2016. Current
            faculty strength of the department is nine and they are experienced
            in teaching and research in several branches of Mathematics.
            Department of Mathematics is one of the backbone of the Institution
            as it is an essential department for engineering courses up to Ph.D
            level.
                </p>

            </div>
        </div>
    )
}
export default Page