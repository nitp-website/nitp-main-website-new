import React from "react";

const Startups = ({ data }) => {
  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Startups
      </h2>
      <ul className="space-y-4">
        {data.map((startup, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-purple-700">
              {startup.startup_name}
            </h3>
            <p className="text-gray-800">
              <strong>Owners/Founders:</strong> {startup.owners_founders}
            </p>
            <p className="text-gray-800">
              <strong>Incubation Place:</strong> {startup.incubation_place}
            </p>
            <p className="text-gray-800">
              <strong>Registration Date:</strong>{" "}
              {new Date(startup.registration_date).toLocaleDateString()}
            </p>
            <p className="text-gray-800">
              <strong>Annual Income:</strong> ₹{startup.annual_income}
            </p>
            <p className="text-gray-800">
              <strong>PAN Number:</strong> {startup.pan_number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Startups;
