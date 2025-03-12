import React from "react";

const President = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-md p-6">
        <div className="absolute inset-0">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full opacity-20"></div>
        </div>
        <div className="relative flex flex-col items-center text-center">
          <img
            className="w-36 h-36 object-cover rounded-full border-4 border-gray-300 shadow-md"
            src="https://i.postimg.cc/G2Nx8Fnc/Screenshot-2024-07-01-172617.png"
            alt="President"
          />
          <p className="mt-4 text-gray-500 italic">Her Excellency Honourable</p>
          <h2 className="mt-2 text-xl font-semibold text-gray-800">
            Smt. Droupadi Murmu
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            The President of India is the ex officio visitor of the Institute.
          </p>

          <div className="mt-5 w-full">
            <a
              href="https://www.presidentofindia.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:scale-105 transition transform duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Hon’ble President of India
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default President;
