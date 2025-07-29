import React from "react";
import Sidebar from "../Sidebar";





export default function BihtaCampusContact() {
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
         For Bihta Campus
        </h3>

        {/* Subheading */}
        <h4 className="text-lg font-semibold text-gray-800 mb-4">
        Relevant Contact Details for availing medical services:
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
                ["1", "Dr. Vikas Kumar Raj, Sr. Medical Officer, Health Centre (Bihta Campus)", "+91 9999654977"],
                ["2", "Dr. Manoj Kumar, Medical Officer", "+91 9334186102"],
                ["3", "Dr. Anubhuti Sharma, Medical Officer", "+91 9128674439"],
                ["4", "Tinku Kumar, Counsellor", "+91 9315692128"],
                ["5", "Chief Proctor (Security)", "+91 7544006310"],
                ["6", "Dean, Student Welfare", "+91 9771005232"],
                ["7", "Chairman (HMC)", "+91 7895717492"],
                ["8", "Dr. J.P. Singh, Campus Coordinator (Bihta)", "+91 8521159014"],
                ["9", "Dr. Gayadhar Pradhan, Campus Co – Coordinator (Bihta)", "+91 9546823280"],
                ["10", "Warden (Kadambini Hostel – Bihta Campus)", "+91 8544401016"],
                ["11", "Warden (Aryabhatta Hostel – Bihta Campus)", "+91 9580559699"],
                ["12", "Warden (Kautilya Hostel – Bihta Campus)", "+91 7752957828"]
              ].map(([sl, person, contact]) => (
                <tr key={sl}>
                  <td className="border border-gray-300 px-4 py-2">{sl}</td>
                  <td className="border border-gray-300 px-4 py-2">{person}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <a
                      href={`tel:${contact.replace(/[^+\d]/g, "")}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
