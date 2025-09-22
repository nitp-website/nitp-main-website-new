"use client";

import React from 'react';
import { Download } from 'lucide-react';

const categorizedContent = {
  "Establishment Forms": [
    {
      name: "NPS Registration Form",
      dlink: "https://drive.google.com/file/d/1mU8pg2dtT4ujCSYeFgtcQDh1EYg80vxD/view?usp=drivesdk"
    },
    {
      name: "TA/DA/Hon. Bill of Non-Official Member Invited to Attend the Visiting/Meeting ",
      dlink: "https://drive.google.com/file/d/1J58gXeGKQ4SHjRGVi-zKjmCdJF0dQrHD/view?usp=drivesdk"
    },
    {
      name: "Travel Bill For Tour",
      dlink: "https://drive.google.com/file/d/1sNIeZaxqsmYDE5kFTXp13_QiXVPHRu1x/view?usp=drivesdk"
    },
    {
      name: "Vehicle Permission Form",
      dlink: "https://drive.google.com/file/d/1azIfinOBLGbKWTMekJKd6HDvm_Ox5tlJ/view?usp=drivesdk"
    },
    {
      name: "Security Gate Pass",
      dlink: "https://drive.google.com/file/d/167jo8PmiS5lR5bhe9fGDwbadWr-Lvb28/view?usp=drivesdk"
    },
     {
      name: "Guest House Booking ",
      dlink: "https://drive.google.com/file/d/1Wu8JtnAgpKUGXHQZ9XXLriiTHqHOZQNm/view?usp=sharing"
    },
     {
      name: "No Dues Certificate ",
      dlink: "https://drive.google.com/file/d/1FKbdV4pItx8jQJM_b9Lz0e-6Ruv-yKf4/view?usp=sharing"
    }
  ],
  "Finance and Account Forms": [
    {
      name: "Advance Form",
      dlink: "https://drive.google.com/file/d/1_C08oxqao4yYfHsQo6q7tA9am99FIbpF/view?usp=drivesdk"
    },
    {
      name: "Income Tax declaration form",
      dlink: "https://docs.google.com/spreadsheets/d/1852IWuph_vyjk61hVualmnDSh5Jdnl31/edit?usp=sharing"
    },
    {
      name: "Bill for Direct Payment By Finance & Account Section.",
      dlink: "https://drive.google.com/file/d/13LB_4cl49dLuZAmo6RrkR5hpQPqB6KUT/view?usp=sharing"
    }
  ],
  "Leave Forms": [
    {
      name: "Application for Casual(CL) / Restricted (RH) Leave",
      dlink: "https://drive.google.com/file/d/1tgRaUy-dOwX317GOhpTHE-LpUr3KdSQo/view?usp=drivesdk"
    },
    // {
    //   name: "Restricted Leave",
    //   dlink: "https://drive.google.com/file/d/1HIQ-qcSpzOTwxixl1VUUQzFrRBtSESXs/view?usp=drivesdk"
    // },
    {
      name: "Earned Leave",
      dlink: "https://drive.google.com/file/d/1XdOjVJjjQgJTUGpuwBTFy_jFCrUrDfdX/view?usp=drivesdk"
    },
    {
      name: "Child Care Leave",
      dlink: "https://drive.google.com/file/d/1dhS2vd6kpp7ZG7jyc8NrbpHW_s-xTN1B/view?usp=drivesdk"
    },
    {
      name: "Commuted Leave",
      dlink: "https://drive.google.com/file/d/1kmmqvoyWDsiv6-VWI75_R944HYfLmzwP/view?usp=drivesdk"
    },
    {
      name: "Half Pay Leave",
      dlink: "https://drive.google.com/file/d/15IqlRuaWyh9TGbwBCholovTUY049eBHS/view?usp=drivesdk"
    },
    {
      name: "Maternity Leave",
      dlink: "https://drive.google.com/file/d/1VvsiQMLQS15jvT8MAQA3Y_AdaCXbdAHw/view?usp=drivesdk"
    },
    {
      name: "Paternity Leave",
      dlink: "https://drive.google.com/file/d/1QwgUuYRv7ALfR9GN8MLO313MuoQNzEZU/view?usp=drivesdk"
    }
  ],
  "Medical Forms": [
    {
      name: "List of Hospitals",
      dlink: "https://drive.google.com/file/d/1YC839XCnkbgAfpW9pFLqko6t135i1kD1/view?usp=drivesdk"
    },
    {
      name: "Medical Claim Form",
      dlink: "https://drive.google.com/file/d/1Rx2FxIqoWBsxqFbmBTvWCl52ZLN_DfMy/view?usp=drivesdk"
    },
    {
      name: "Medical Certificate (A)",
      dlink: "https://drive.google.com/file/d/1pHaYlHR2PJW29pUAfaLTJ_fnoEOuu4Iv/view?usp=drivesdk"
    },
    {
      name: "Medical Certificate (B)",
      dlink: "https://drive.google.com/file/d/1hXLAzspVCDdoQt9pKQ9WuTCpOOQZPZTu/view?usp=drivesdk"
    },
    {
      name: "Medical Emergency Certificate",
      dlink: "https://drive.google.com/file/d/1K2Cjbiuhl9_X-vyvWwxqA324ry5ViiGX/view?usp=drivesdk"
    },
    {
      name: "Medical Nursing Certificate",
      dlink: "https://drive.google.com/file/d/1MUC3NgNuUT8ebaGbIx1qTRsJvMfp-KPG/view?usp=drivesdk"
    },
  ],
  "Child Education Allowances": [
    {
      name: "Bonafide Certificate from Head of Institution",
      dlink: "https://drive.google.com/file/d/1CCUdj2CHPs6I32VRtzjtTWT956p6i4qO/view?usp=sharing"
    },
    {
      name: "Proforma For Re-imbursement of Children Education Allowance/ Hostel Subsidy",
      dlink: "https://drive.google.com/file/d/1CjL3btTi0IlYLkh3Z7k4WGt5uf7lTKnd/view?usp=sharing" 
    }
  ],
  "Leave Travel Allowance": [
    {
      name: "LTC Application Form",
      dlink: "https://drive.google.com/file/d/1h6cPENor0JFXubpd1ymO9vsp-RKsNYLN/view?usp=sharing"
    },
    {
      name: "LTC Claim Form",
      dlink: "https://drive.google.com/file/d/1ZAHxlpCd7LCxdxb0JBLyZEbuhw6V2UI7/view?usp=drivesdk"
    },
    {
      name: "Leave Encashment (LTC)",
      dlink: "https://drive.google.com/file/d/1dWXmpjqVtcUhzjOM_rkuEEv8s7mGQ_il/view?usp=drivesdk"
    }
  ]
};

const DownloadsPage = () => {
  return (
    <div className="min-h-screen bg-white bg-opacity-50">
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-red-950 text-center">
          Staff Claims Form
        </h1>

        {Object.entries(categorizedContent).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h2 className="text-xl font-semibold text-red-800 border-b pb-2 mb-4">{category}</h2>
            <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white">
                  <thead>
                    <tr className="bg-[#421010] text-white">
                      <th className="text-left px-6 py-4 font-semibold">Form Name</th>
                      <th className="text-center px-6 py-4 font-semibold w-48">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                          index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }`}
                      >
                        <td className="text-left px-6 py-4 text-gray-800">{item.name}</td>
                        <td className="text-center px-6 py-4">
                          <a
                            href={item.dlink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors text-sm font-medium"
                          >
                            <Download className="w-4 h-4" />
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
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;
