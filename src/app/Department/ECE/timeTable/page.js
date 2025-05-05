import BackDepartment from "../../../components/department/BackDepartment"
import { Download } from 'lucide-react';

function Page() {
  const data = [
    {
      name: "ECE Dept Time Table for the Class Jan- June 2025 (Even Semster)",
      link: "https://drive.google.com/file/d/1X_eDpLqfacN904yAgOiaYm-H8GlM5YKm/view"
    },
  ];
  return (
    <div className=" flex flex-col p-5 h-screen text-black">
      <div className="flex flex-col md:ml-10">
        <div>
          <p className="text-red-900 text-3xl font-bold">
            TIME TABLE
          </p>
        </div>
        <div className="mt-2">
          <p className="text-gray-500 text-xl font-semibold">
            Electronics And Communication Enginnering
          </p>
        </div>
        <div>
          <BackDepartment navigate={'/Department/ECE'} />
        </div>
      </div>
      <div className="mx-auto px-4 py-8 w-full">
        <div className="mx-auto overflow-x-auto rounded-lg">
          <table className="md:w-[80%] overflow-hidden rounded-lg mx-auto border-collapse bg-white">
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

  )
}
export default Page
