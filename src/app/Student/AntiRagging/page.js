import React from 'react';
import { Download } from 'lucide-react';

const scholarships = [
  {name: "Office Order_Anti Ragging Committee", link: "https://drive.google.com/file/d/1xHhiYd1qPxxMeI_QVQwM7y6L_scU6MjO/view?usp=drivesdk"},
  {name: "Notification_Anti Ragging Squad", link: "https://drive.google.com/file/d/1S0W5gZLyGZ_8oApw3MtIJCDf-f6DAt5W/view?usp=drivesdk"},
  {name: "Colleges, University, Institution_Website_Information", link: "https://drive.google.com/file/d/1luRKbPj5R8GI0QksvgXvZav7NwOIazev/view?usp=drivesdk"},
];

const ScholarshipTable = () => {
  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Anti Ragging
        </h1>

        <div className="overflow-hidden rounded-lg shadow-md bg-white">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#421010]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Notice
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {scholarships.map((item, index) => (
                  <tr 
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-red-50 transition-colors duration-200`}
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-900 text-white text-sm font-medium rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipTable;
