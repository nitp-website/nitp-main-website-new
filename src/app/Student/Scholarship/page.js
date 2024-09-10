import React from 'react';

const scholarships = [
  { slNo: 1, type: 'Minority-1', authority: 'Minority Commission, Ranchi', amount: '₹17000' },
  { slNo: 2, type: 'Ex-seerviceman-1', authority: 'Uttar Pradesh Sainik Kalyan', amount: '₹2500' },
  { slNo: 3, type: 'SC-2', authority: 'ST & SC Development Deptt. Orrissa', amount: '₹49760' },
  { slNo: 4, type: 'SC-1', authority: 'Indian Oil, New Delhi', amount: '₹12000' },
  { slNo: 5, type: 'SC-3', authority: 'Indian Oil, New Delhi', amount: '₹108000' },
  { slNo: 6, type: 'ST-2', authority: 'ST & SC Development Deptt. Orrissa', amount: '₹49760' },
  { slNo: 7, type: 'Gen-1', authority: 'SitaRam Jindal Foundation, New Delhi', amount: '₹2400' },
  { slNo: 8, type: 'SC-1', authority: 'Indian Oil, New Delhi', amount: '₹12000' },
  { slNo: 9, type: 'SC-2', authority: 'ST & SC Development Deptt. Orrissa', amount: '₹41600' },
  { slNo: 10, type: 'ST-3', authority: 'Director of Tech. Edn., Itanagar', amount: '₹17800' },
  { slNo: 11, type: 'BCE-1', authority: 'BC Welfare, WB', amount: '₹15880' },
  { slNo: 12, type: 'SC-2', authority: 'Welfare of SC, Assam', amount: '₹27368' },
  { slNo: 13, type: 'SC-1', authority: 'Tech. Edn., HP', amount: '₹6000' },
  { slNo: 14, type: 'SC-1', authority: 'Social Welfare Dept., Karnataka', amount: '₹50000' },
  { slNo: 15, type: 'Minority-1', authority: 'Director of Tech. Edn., Thiruvanthpuran', amount: '₹20000' },
  { slNo: 16, type: 'OBC-1', authority: 'ST Dept. Chhattisgarh, Raipur', amount: '₹13260' },
  { slNo: 17, type: 'SC-1', authority: 'Director of Tech. Edn., H.P.', amount: '₹6000' },
  { slNo: 18, type: 'ST-2', authority: 'Engineers India, New Delhi', amount: '₹18000' },
  { slNo: 19, type: 'ST-1', authority: 'ST Development, U.P.', amount: '₹15300' },
  { slNo: 20, type: 'Gen-1', authority: 'Director of Tech. Edn., Tripura', amount: '₹4500' },
  { slNo: 21, type: 'OBC-1', authority: 'District Welfare Nagpur, M.P.', amount: '₹21060' },
  { slNo: 22, type: 'Gen-1', authority: 'Director of Tech. Edn., Assam', amount: '₹10600' },
  { slNo: 23, type: 'ST-1', authority: 'Director of Tech. Edn., Assam', amount: '₹14630' },
  { slNo: 24, type: 'Gen-2', authority: 'Director of Tech. Edn., Tripura', amount: '₹18000' },
  { slNo: 25, type: 'ST-2', authority: 'Engineers India, New Delhi', amount: '₹18000' },
  { slNo: 26, type: 'ST-3', authority: 'Director of Tech. Edn., Kohima', amount: '₹34800' },
  { slNo: 27, type: 'ST-1', authority: 'Director of Tech. Edn., Andhra Pradesh', amount: '₹10600' },
  { slNo: 28, type: 'SC-1', authority: 'Social welfare, Krishna Dist. A.P.', amount: '₹17044' },
  { slNo: 29, type: 'SC-2', authority: 'District Welfare U.P.', amount: '₹24510' },
  { slNo: 30, type: 'Gen-1', authority: 'Director of Tech. Edn., Tripura', amount: '₹3600' },
  { slNo: 31, type: 'SC-158', authority: 'District Welfare, Patna', amount: '₹3165600' },
  { slNo: 32, type: 'ST-53', authority: 'District Welfare, Patna', amount: '₹857000' },
  { slNo: 33, type: 'OBC-21', authority: 'District Welfare, Patna', amount: '₹490810' },
  { slNo: 34, type: 'Minority-14', authority: 'Bihar State Minority Fin. Corp., Patna', amount: '₹39500' },
];

const ScholarshipTable = () => {
  return (

    <div className="containerschlor mx-auto p-4 px-2 md:px-20">
        <h1 className="text-3xl font-bold text-center mb-14 text-red-800">
        Scholarship
       </h1>
      <div className="overflow-x-auto">
        <div className='relative'>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-red-200 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">SL No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">Scholarship/Stipends</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-900  uppercase tracking-wider">Awarding Authority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-red-900 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-xs md:text-base divide-gray-200 text-neutral-700">
            {scholarships.map((item) => (
              <tr key={item.slNo}>
                <td className="px-6 py-4 whitespace-nowrap">{item.slNo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.authority}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
    // <div className="container mx-auto p-4 px-2 md:px-20">
    //     <h1 className="text-3xl font-bold text-center mb-14 text-red-800">
    //     Scholarship
    //   </h1>
    //   <table className="min-w-full divide-y divide-gray-200">
    //     <thead className="bg-gray-50">
    //       <tr>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL No.</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scholarship/Stipends</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Awarding Authority</th>
    //         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white divide-y divide-gray-200 text-neutral-700">
    //       {scholarships.map((item) => (
    //         <tr key={item.slNo}>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.slNo}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.authority}</td>
    //           <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default ScholarshipTable;
