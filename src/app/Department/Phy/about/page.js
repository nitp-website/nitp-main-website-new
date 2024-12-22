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
                    Applied Physics and Materials Engineering
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/Phy'}/>
                </div>
            </div>
            {/* section 1 */}
            <div className="mb-10 lg:w-3/4">
                <p className="text-justify lg:text-lg">
                The Department of Physics was established in 1924 and since then
            has been functioning as an important part of the institute. As of
            now, the Department has eight faculty members and four support
            staffs at different levels. At present, there are 12 students
            enrolled in Integrated M. Sc. And 8 students enrolled in the Ph.
            D. program.The Department is mentored by Prof. K.L.Chopra, Ex-Director, IIT Kharagpur.
                </p>

            </div>
        </div>
    )
}
export default Page