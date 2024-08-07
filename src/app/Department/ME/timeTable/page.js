import BackDepartment from "../../../../components/BackDepartment"


function Page(){
    return (
        <div className=" flex flex-col p-5 h-screen">  
            <div className="flex flex-col md:ml-10">
                <div>
                    <p className="text-red-900 text-3xl font-bold">
                        TIME TABLE
                    </p>
                </div>
                <div className="mt-2">
                    <p className="text-gray-500 text-xl font-semibold">
                    MECHANICAL ENGINEERING
                    </p>
                </div>
                <div>
                <BackDepartment navigate={'/Department/ME'}/>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md h-screen">
                <div className='mt-14 '>
                    {/* <a href={'https://www.dropbox.com/scl/fo/kmdu6u1erwn18lwo0qe4p/h?rlkey=rl1xo6nzihg0j5yc9zvfidfr0&dl=0'} className='lg:text-lg text-gray-500 font-semibold border-b-2 border-black hover:text-blue-500' target="_blank">
                        Click here for the time table of CSED (for all semesters)
                    </a> */}
                </div>
            </div>
        </div>

    )
}
export default Page