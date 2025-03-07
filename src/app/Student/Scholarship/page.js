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
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Scholarship
        </h1>

        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#421010] text-white">
                  <th className="text-left px-6 py-4 font-semibold">SL No.</th>
                  <th className="text-left px-6 py-4 font-semibold">Scholarship/Stipends</th>
                  <th className="text-left px-6 py-4 font-semibold">Awarding Authority</th>
                  <th className="text-left px-6 py-4 font-semibold">Amount</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((item, index) => (
                  <tr
                    key={item.slNo}
                    className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="text-left px-6 py-4 text-gray-800">
                      {item.slNo}
                    </td>
                    <td className="text-left px-6 py-4 text-gray-800">
                      {item.type}
                    </td>
                    <td className="text-left px-6 py-4 text-gray-800">
                      {item.authority}
                    </td>
                    <td className="text-left px-6 py-4 text-gray-800">
                      {item.amount}
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
