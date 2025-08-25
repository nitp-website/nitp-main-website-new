import BackDepartment from "../../../components/department/BackDepartment"
import { Download } from 'lucide-react';


function Page() {
    const data = [
        {
            name: "Mechanical Deptartment Time Table for the Class july - dec 2025 (Odd Semster)",
            link: "https://drive.google.com/drive/folders/1xmzjiMCca2Fzt0X3mpaGQgpg_7WZr4dQ"
        },
        {
            name: "Mechanical Deptartment Time Table for the Class Jan - June 2025 (Even Semster)",
            link: "https://drive.google.com/file/d/1m8ICMWNLR5QsNc-isckAnmVW7zulZxly/view"
        }
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