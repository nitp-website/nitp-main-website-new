import React from 'react';

const scholarships = [
  {name:"Office Order_Anti Ragging Committee" , link:"https://drive.google.com/file/d/1xHhiYd1qPxxMeI_QVQwM7y6L_scU6MjO/view?usp=drivesdk" },
  {name:"Notification_Anti Ragging Squad" , link:"https://drive.google.com/file/d/1S0W5gZLyGZ_8oApw3MtIJCDf-f6DAt5W/view?usp=drivesdk" },
  {name:" Colleges, University, Institution_Website_Information", link: "https://drive.google.com/file/d/1luRKbPj5R8GI0QksvgXvZav7NwOIazev/view?usp=drivesdk"},
  
  
 
];

const ScholarshipTable = () => {
  return (

    <div className="containerschlor mx-auto p-4 px-2 md:px-20">
        <h1 className="text-3xl font-bold text-center mb-14 text-red-800">
        Anti Ragging
       </h1>
      <div className="overflow-x-auto">
        <div className='relative'>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-200 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">Notice</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">View</th>
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-xs md:text-base divide-gray-200 text-neutral-700">
            {scholarships.map((item) => (
              <tr key={item.slNo}>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-950 hover:text-red-800"><a href={item.link}>View Notice</a></td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>

  );
};

export default ScholarshipTable;
