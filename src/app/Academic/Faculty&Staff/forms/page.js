"use client";

import React from 'react';
import { Download } from 'lucide-react';

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
    "DLink": "https://drive.google.com/file/d/1h6cPENor0JFXubpd1ymO9vsp-RKsNYLN/view?usp=sharing",
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
  },
  {
    "Downloads": "Income Tax declaration form",
    "DLink": "https://docs.google.com/spreadsheets/d/1852IWuph_vyjk61hVualmnDSh5Jdnl31/edit?usp=sharing&ouid=111684243091520260943&rtpof=true&sd=true",
    "Office order": ""
  }
];

const DownloadsPage = () => {
  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Staff Claims Form
        </h1>

        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#421010] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Form Name</th>
                  <th className="text-center px-6 py-4 font-semibold w-48">Download</th>
                  <th className="text-left px-6 py-4 font-semibold">Office Order</th>
                  <th className="text-center px-6 py-4 font-semibold w-48">Download</th>
                </tr>
              </thead>
              <tbody>
                {content.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="text-left px-6 py-4 text-gray-800">
                      {item.Downloads}
                    </td>
                    <td className="text-center px-6 py-4">
                      {item.DLink && (
                        <a
                          href={item.DLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      )}
                    </td>
                    <td className="text-left px-6 py-4 text-gray-800">
                      {item["Office order"] || ''}
                    </td>
                    <td className="text-center px-6 py-4">
                      {item.OLink ? (
                        <a
                          href={item.OLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      ) : (
                        <span className="text-gray-100">N/A</span>
                      )}
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

export default DownloadsPage;
