import React from "react";

const Patents = ({ data }) => {
  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Patents
      </h2>
      <ul className="space-y-4">
        {data.map((patent, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-purple-700">
              {patent.title}
            </h3>
            <p className="text-gray-800">
              <strong>Description:</strong> {patent.description}
            </p>
            <p className="text-gray-800">
              <strong>Patent Date:</strong>{" "}
              {new Date(patent.patent_date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patents;
