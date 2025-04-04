import React from "react";
import { Phone } from "lucide-react";

const EmuHelplinePage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-md w-full text-center border border-blue-500">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">EMU Helpline</h2>
        <div className="bg-blue-100 p-4 rounded-lg">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Phone className="text-blue-600" />
            <p className="text-lg font-semibold text-gray-800">Landline:</p>
          </div>
          <p className="text-lg font-semibold text-blue-800">0612-2371715</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg mt-4">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <Phone className="text-green-600" />
            <p className="text-lg font-semibold text-gray-800">
              Extension No.:
            </p>
          </div>
          <p className="text-lg font-semibold text-green-800">130</p>
        </div>
      </div>
    </div>
  );
};

export default EmuHelplinePage;
