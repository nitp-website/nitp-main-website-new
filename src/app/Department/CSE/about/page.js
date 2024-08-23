import BackDepartment from "../../../components/department/BackDepartment"


function Page(){
    return (
        <div className="bg-orange-50 flex flex-col p-10 max-sm:p-2">  
            <div className="flex flex-col  mb-16">
                <div>
                    <p className="text-red-900 text-3xl max-sm:text-2xl font-bold">
                        ABOUT
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                        Computer Science and Engineering
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/CSE'}/>
                </div>
            </div>
            {/* section 1 */}
            <div className="mb-10 lg:w-3/4">
                <p className="text-justify lg:text-lg">
                The Department of Computer Science and Engineering offers courses
              leading to Bachelor of Technology in Computer Science and
              Engineering. The department has a very good infrastructure and
              faculty to provide excellent education. The curriculum is updated
              regularly to keep up with the growing demands and the changing
              trends of the software industry and research laboratories. The
              department provides a wide range of courses. The prominent among
              them includes Data Structures, Design and Analysis of Algorithms,
              System Programming, Computer Networks, Data Mining and
              Warehousing, Distributed and Parallel Computing, Mobile and
              Wireless Computing, Real-time Systems, Cryptography, Genetic
              Algorithm and Artificial Intelligence. Apart from these, students
              are also offered a wide variety of electives.
                </p>

            </div>
        </div>
    )
}
export default Page