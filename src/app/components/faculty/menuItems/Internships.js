import React from "react";

const Internships = ({ data }) => {
  // Sort internships by start date (latest first)
  const sortedData = [...data].sort(
    (a, b) => new Date(b.end_date) - new Date(a.end_date)
  );

  return (
    <div className="p-6 border border-green-600 rounded-lg text-black bg-green-100 shadow-lg">
      <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-500 pb-2 mb-4">
        Internships
      </h2>
      <ul className="space-y-4">
        {sortedData.map((internship, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-green-700">
              {internship.project_title}
            </h3>
            <p className="text-gray-800">
              <strong>Student Name:</strong> {internship.student_name}
            </p>
            <p className="text-gray-800">
              <strong>Qualification:</strong> {internship.qualification}
            </p>
            <p className="text-gray-800">
              <strong>Affiliation:</strong> {internship.affiliation}
            </p>
            <p className="text-gray-800">
              <strong>Student Type:</strong> {internship.student_type}
            </p>
            <p className="text-gray-800">
              <strong>Start Date:</strong> {new Date(internship.start_date).toLocaleDateString()}
            </p>
            <p className="text-gray-800">
              <strong>End Date:</strong> {new Date(internship.end_date).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Internships;