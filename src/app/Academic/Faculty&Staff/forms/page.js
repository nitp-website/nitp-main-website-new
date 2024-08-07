"use client";

import React from 'react';

const content = [
  {
    "Downloads": "Advance Form",
    "DLink": "https://drive.google.com/file/d/1_C08oxqao4yYfHsQo6q7tA9am99FIbpF/view?usp=drivesdk",
    "Office order": "Medical Notice",
    "OLink": "https://drive.google.com/file/d/1EwZ0Lsf2ASCbUKrJtQSrK_qLaqECGM0I/view?usp=drivesdk"
  },
  {
    "Downloads": "CEA Form",
    "DLink": "https://drive.google.com/file/d/133utXZl2AyKBzX-1h-cHXfOixHWgCugx/view?usp=drivesdk",
    "Office order": "Office Order",
    "OLink": "https://drive.google.com/file/d/1GlngSIeMQYW67OspVNhQ0MowHxyUUGo_/view?usp=drivesdk"
  },
  {
    "Downloads": "CL Application",
    "DLink": "https://drive.google.com/file/d/1tgRaUy-dOwX317GOhpTHE-LpUr3KdSQo/view?usp=drivesdk",
    "Office order": "Bills/PDA form",
    "OLink": "https://drive.google.com/file/d/12WJeTf291spsAq3Cu40i02nDcex5CQu4/view?usp=drivesdk"
  },
  {
    "Downloads": "Restricted Leave (RH)",
    "DLink": "https://drive.google.com/file/d/1HIQ-qcSpzOTwxixl1VUUQzFrRBtSESXs/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "El Form",
    "DLink": "https://drive.google.com/file/d/1XdOjVJjjQgJTUGpuwBTFy_jFCrUrDfdX/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Child Care Leave (CCL)",
    "DLink": "https://drive.google.com/file/d/1dhS2vd6kpp7ZG7jyc8NrbpHW_s-xTN1B/view?usp=drivesdk",
    "Office order": "Bill Format",
    "OLink": "https://drive.google.com/file/d/13LB_4cl49dLuZAmo6RrkR5hpQPqB6KUT/view?usp=drivesdk"
  },
  {
    "Downloads": "Commuted Leave",
    "DLink": "https://drive.google.com/file/d/1kmmqvoyWDsiv6-VWI75_R944HYfLmzwP/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Half Pay Leave (HPL)",
    "DLink": "https://drive.google.com/file/d/15IqlRuaWyh9TGbwBCholovTUY049eBHS/view?usp=drivesdk",
    "Office order": "Guest House Requisition Form",
    "OLink": "https://drive.google.com/file/d/1Wu8JtnAgpKUGXHQZ9XXLriiTHqHOZQNm/view?usp=drivesdk"
  },
  {
    "Downloads": "Maternity Leave",
    "DLink": "https://drive.google.com/file/d/1VvsiQMLQS15jvT8MAQA3Y_AdaCXbdAHw/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Paternity Leave",
    "DLink": "https://drive.google.com/file/d/1QwgUuYRv7ALfR9GN8MLO313MuoQNzEZU/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Leave Encashment (LTC)",
    "DLink": "https://drive.google.com/file/d/1dWXmpjqVtcUhzjOM_rkuEEv8s7mGQ_il/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "LTC Application Form",
    "DLink": "https://drive.google.com/file/d/1AYfw5ZIovBJmR0Y2BszAHRJwfvItrNMx/view?usp=drivesdk",
    "Office order": "LTC Claim Form",
    "OLink": "https://drive.google.com/file/d/1ZAHxlpCd7LCxdxb0JBLyZEbuhw6V2UI7/view?usp=drivesdk"
  },
  {
    "Downloads": "Medical Claim Form",
    "DLink": "https://drive.google.com/file/d/1Rx2FxIqoWBsxqFbmBTvWCl52ZLN_DfMy/view?usp=drivesdk",
    "Office order": "List of Hospitals",
    "OLink": "https://drive.google.com/file/d/1YC839XCnkbgAfpW9pFLqko6t135i1kD1/view?usp=drivesdk"
  },
  {
    "Downloads": "Medical Certificate (A)",
    "DLink": "https://drive.google.com/file/d/1pHaYlHR2PJW29pUAfaLTJ_fnoEOuu4Iv/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Medical Certificate (B)",
    "DLink": "https://drive.google.com/file/d/1hXLAzspVCDdoQt9pKQ9WuTCpOOQZPZTu/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Medical Emergency Certificate",
    "DLink": "https://drive.google.com/file/d/1K2Cjbiuhl9_X-vyvWwxqA324ry5ViiGX/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Medical Nursing Certificate",
    "DLink": "https://drive.google.com/file/d/1MUC3NgNuUT8ebaGbIx1qTRsJvMfp-KPG/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "NPS Registration Form",
    "DLink": "https://drive.google.com/file/d/1mU8pg2dtT4ujCSYeFgtcQDh1EYg80vxD/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "T.A. For Expert",
    "DLink": "https://drive.google.com/file/d/1J58gXeGKQ4SHjRGVi-zKjmCdJF0dQrHD/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Travel Bill For Tour",
    "DLink": "https://drive.google.com/file/d/1sNIeZaxqsmYDE5kFTXp13_QiXVPHRu1x/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Vehicle Permission Form",
    "DLink": "https://drive.google.com/file/d/1azIfinOBLGbKWTMekJKd6HDvm_Ox5tlJ/view?usp=drivesdk",
    "Office order": ""
  },
  {
    "Downloads": "Security Gate Pass",
    "DLink": "https://drive.google.com/file/d/167jo8PmiS5lR5bhe9fGDwbadWr-Lvb28/view?usp=drivesdk",
    "Office order": ""
  }
];

const DownloadsPage = () => {
  return (
    <div className="mx-auto p-4 text-neutral-600 bg-white/70">
      <h1 className="text-3xl font-bold mb-6 text-red-900 text-center">Staffs Claim Form</h1>
      <table className="table-auto border-collapse border border-gray-300 mx-0 md:mx-80">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 w-1/6">Name</th>
            <th className="border border-gray-300 px-4 py-2 w-1/12">Download Form</th>
            <th className="border border-gray-300 px-4 py-2 w-1/6">Name</th>
            <th className="border border-gray-300 px-4 py-2 w-1/12">Download Form</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 w-1/6">{item.Downloads}</td>
              <td className="border border-gray-300 px-4 py-2 w-1/12 text-center">
                {item.DLink ? (
                  <a href={item.DLink} target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                    Download
                  </a>
                ) : (
                 
                    <span></span>
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2 w-1/6">{item["Office order"]}</td>
              <td className="border border-gray-300 px-4 py-2 w-1/12 text-center">
                {item.OLink ? (
                  <a href={item.OLink} target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 md:text-xs text-xs">
                    Download
                  </a>
                ) : (
                  <span></span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DownloadsPage;
