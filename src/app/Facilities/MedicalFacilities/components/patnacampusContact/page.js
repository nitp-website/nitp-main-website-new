// import React from "react";
// import Sidebar from '../Sidebar.js';

// export default function PatnaContactPage() {
//   return (
//     <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-24 mt-10 w-full mb-8">
//       {/* Sidebar Section */}
//       <div className="mt-6 mb-12 md:mt-10 md:w-1/4">
//         <Sidebar />
//       </div>

//       {/* Content Section */}
//       <div className="mt-8 text-base text-gray-700 md:w-3/4">
//         {/* Title */}
//         <h3 className="font-bold text-red-700 text-xl md:text-2xl mb-6">
//          For Patna Campus
//         </h3>

//         {/* Subheading */}
//         <h4 className="text-lg font-semibold text-gray-800 mb-4">
//         Relevant Contact Details for availing medical services at Patna Campus:
//         </h4>

//         {/* Table */}
//         <div className="overflow-x-auto mb-8">
//           <table className="min-w-full table-auto border border-gray-300">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="border border-gray-300 px-4 py-2 text-left">Sl. No.</th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">Particulars</th>
//                 <th className="border border-gray-300 px-4 py-2 text-left">Contact Details</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-800">
//               {[
//                 ["1", "Dr. Santosh Kumar Sudhakar, Medical Officer", "+91 8540037005"],
//                 ["2", "Dr. Kanchan Priya, Medical Officer", "+91 7261873686"],
//                 ["3", "Dr. A. K. Arya, Medical Officer", "+91 7979756731"],
//                 ["4", "Ms. Saroj Verma, Counsellor", "+91 9431021375"],
//                 ["5", "Dr. Niranjan Kumar, Physiotherapist", "+91 8544029781"],
//                 ["6", "Dean, Student Welfare", "+91 9771005232"],
//                 ["7", "Chairman (HMC)", "+91 7895717492"],
//                 ["8", "Warden (Ganga Hostel)", "+91 9677142079"],
//                 ["9", "Warden (Kosi Hostel)", "+91 9410474827"],
//                 ["10", "Warden (Bagmati & Kosi Extension Hostel)", "+91 7840809129"],
//                 ["11", "Warden (Brahmaputra Hostel)", "+91 9410478242   +91 7978848747"],
//                 ["12", "Warden (Sone Hostel)", "+91 9691406125"],
//                 ["13", "Chief Proctor (Security)", "+91 7544006310"],
//                 ["14", "Ambulance (Priority)", "06122372715 - 555"],
//               ].map(([sl, person, contact]) => (
//                 <tr key={sl}>
//                   <td className="border border-gray-300 px-4 py-2">{sl}</td>
//                   <td className="border border-gray-300 px-4 py-2">{person}</td>
//                   <td className="border border-gray-300 px-4 py-2">{contact}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Subheading */}
//         <h4 className="text-lg font-semibold text-gray-800 mb-4">
//            Important Extension Numbers (Dial 06122372715, then extension):
//         </h4>

//         {/* Extension List */}
//         <ul className="list-disc list-inside text-lg space-y-2">
//           <li>
//             <span className="font-medium">Main Gate (Ambulance Priority):</span> 555
//           </li>
//           <li>
//             <span className="font-medium">Brahmaputra Hostel:</span> 610
//           </li>
//           <li>
//             <span className="font-medium">Kosi Hostel:</span> 611
//           </li>
//           <li>
//             <span className="font-medium">Sone Hostel:</span> 612
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import React from "react";
import Sidebar from "../Sidebar";

export default function PatnaContactPage() {
  return (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-24 mt-10 w-full mb-8">
      {/* Sidebar Section */}
      <div className="mt-6 mb-12 md:mt-10 md:w-1/4">
        <Sidebar />
      </div>

      {/* Content Section */}
      <div className="mt-8 text-base text-gray-700 md:w-3/4">
        {/* Title */}
        <h3 className="font-bold text-red-700 text-xl md:text-2xl mb-6">
        For Patna Campus
        </h3>

        {/* Subheading */}
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Relevant Contact Details for availing medical services at Patna Campus:
        </h4>

        {/* Table */}
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Sl. No.</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Particulars</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Contact Details</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {[
                ["1", "Dr. Santosh Kumar Sudhakar, Medical Officer", "+91 8540037005"],
                ["2", "Dr. Kanchan Priya, Medical Officer", "+91 7261873686"],
                ["3", "Dr. A. K. Arya, Medical Officer", "+91 7979756731"],
                ["4", "Ms. Saroj Verma, Counsellor", "+91 9431021375"],
                ["5", "Dr. Niranjan Kumar, Physiotherapist", "+91 8544029781"],
                ["6", "Dean, Student Welfare", "+91 9771005232"],
                ["7", "Chairman (HMC)", "+91 7895717492"],
                ["8", "Warden (Ganga Hostel)", "+91 9677142079"],
                ["9", "Warden (Kosi Hostel)", "+91 9410474827"],
                ["10", "Warden (Bagmati & Kosi Extension Hostel)", "+91 7840809129"],
                ["11", "Warden (Brahmaputra Hostel)", "+91 9410478242 / +91 7978848747"],
                ["12", "Warden (Sone Hostel)", "+91 9691406125"],
                ["13", "Chief Proctor (Security)", "+91 7544006310"],
                ["14", "Ambulance (Priority)", "06122372715 - 555"],
              ].map(([sl, person, contact], idx) => (
                <tr key={sl}>
                  <td className="border border-gray-300 px-4 py-2">{sl}</td>
                  <td className="border border-gray-300 px-4 py-2">{person}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {contact.split("/").map((num, i) => (
                      <span key={i}>
                        <a
                          href={`tel:${num.trim().replace(/[^+\d]/g, "")}`}
                          className="text-blue-600 hover:underline"
                        >
                          {num.trim()}
                        </a>
                        {i < contact.split("/").length - 1 && " / "}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Subheading */}
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
          9.1.2 Important Extension Numbers (Dial 06122372715, then extension):
        </h4>

        {/* Extension List */}
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <span className="font-medium">Main Gate (Ambulance Priority):</span>{" "}
            <a href="tel:06122372715" className="text-blue-600 hover:underline">
              06122372715 - 555
            </a>
          </li>
          <li>
            <span className="font-medium">Brahmaputra Hostel:</span>{" "}
            <a href="tel:06122372715" className="text-blue-600 hover:underline">
              06122372715 - 610
            </a>
          </li>
          <li>
            <span className="font-medium">Kosi Hostel:</span>{" "}
            <a href="tel:06122372715" className="text-blue-600 hover:underline">
              06122372715 - 611
            </a>
          </li>
          <li>
            <span className="font-medium">Sone Hostel:</span>{" "}
            <a href="tel:06122372715" className="text-blue-600 hover:underline">
              06122372715 - 612
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
