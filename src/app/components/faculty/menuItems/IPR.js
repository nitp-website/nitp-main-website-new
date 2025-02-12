import React from "react";

const IPR = ({ data }) => {
  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Intellectual Property Rights
      </h2>
      <ul className="space-y-4">
        {data.map((ipr, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-purple-700">
              {ipr.title} ({ipr.type})
            </h3>
            <p className="text-gray-800">
              <strong>Applicant:</strong> {ipr.applicant_name}
            </p>
            <p className="text-gray-800">
              <strong>Inventors:</strong> {ipr.inventors}
            </p>
            <p className="text-gray-800">
              <strong>Grant No.:</strong> {ipr.grant_no}
            </p>
            <p className="text-gray-800">
              <strong>Registration Date:</strong>{" "}
              {new Date(ipr.registration_date).toLocaleDateString()}
            </p>
            <p className="text-gray-800">
              <strong>Publication Date:</strong>{" "}
              {new Date(ipr.publication_date).toLocaleDateString()}
            </p>
            <p className="text-gray-800">
              <strong>Grant Date:</strong>{" "}
              {new Date(ipr.grant_date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IPR;
