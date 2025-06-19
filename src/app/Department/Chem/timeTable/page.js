// import BackDepartment from "../../../components/department/BackDepartment"


// function Page(){
//     return (
//         <div className=" flex flex-col p-5 h-screen text-black">  
//             <div className="flex flex-col md:ml-10">
//                 <div>
//                     <p className="text-red-900 text-3xl font-bold">
//                         TIME TABLE
//                     </p>
//                 </div>
//                 <div className="mt-2">
//                     <p className="text-gray-500 text-xl font-semibold">
//                     Chemical Science and Technology
//                     </p>
//                 </div>
//                 <div>
//                 <BackDepartment navigate={'/Department/Chem'}/>
//                 </div>
//             </div>
//             <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md h-screen">
//                 <div className='mt-14 '>
//                     {/* <a href={'https://www.dropbox.com/scl/fo/kmdu6u1erwn18lwo0qe4p/h?rlkey=rl1xo6nzihg0j5yc9zvfidfr0&dl=0'} className='lg:text-lg text-gray-500 font-semibold border-b-2 border-black hover:text-blue-500' target="_blank">
//                         Click here for the time table of CSED (for all semesters)
//                     </a> */}
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Page

import BackDepartment from "../../../components/department/BackDepartment"
import { Download } from 'lucide-react';


function Page() {
    const data = [
        {
            name: "Chemical Science and Technology Time Table",
            
            link: "https://www.dropbox.com/scl/fo/kmdu6u1erwn18lwo0qe4p/h?rlkey=rl1xo6nzihg0j5yc9zvfidfr0&dl=0"
        },
    ];
    return (
        <div className="bg-white text-black">
            <div className="py-1 mt-2">
                <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
                    <div className="w-full">
                        <h2 className="text-center text-4xl text-red-700 mt-2">Time Table</h2>
                    </div>
                    <div className="mx-auto px-4 py-8 w-full">
                        <div className="mx-auto overflow-x-auto rounded-lg">
                            <table className="md:w-[90%] overflow-hidden rounded-lg mx-auto border-collapse bg-white">
                                <thead>
                                    <tr className="bg-[#421010] text-white">
                                        <th className="text-left px-6 py-4 font-semibold">Document</th>
                                        <th className="text-center px-6 py-4 font-semibold w-48">Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.length > 0 ? (
                                        data.map((item, index) => (
                                            <tr
                                                key={index}
                                                className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                                    }`}
                                            >
                                                <td className="text-left px-6 py-4 text-gray-800">{item.name}</td>
                                                <td className="text-center px-6 py-4">
                                                    {
                                                        item.link ? (
                                                            <a
                                                                href={item.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                                                            >
                                                                <Download className="w-4 h-4" />
                                                                Download
                                                            </a>
                                                        ) : (
                                                            <p className="text-gray-500">Not Available</p>
                                                        )
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center px-6 py-4 text-gray-500">
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page