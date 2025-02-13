import React from "react";

const ConsultancyProjects = ({ data }) => {
  // Sort projects by start_date in descending order (latest first)
  const sortedProjects = [...data].sort(
    (a, b) => new Date(b.start_date) - new Date(a.start_date)
  );

  return (
    <div className="p-6 border border-green-600 rounded-lg text-black bg-green-100 shadow-lg">
      <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-500 pb-2 mb-4">
        Consultancy Projects
      </h2>
      <ul className="space-y-6">
        {sortedProjects.map((project, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            {/* Project Title */}
            <h3 className="text-lg font-semibold text-blue-800">
              {project.project_title}
            </h3>

            {/* Role */}
            {project.role && (
              <p className="text-gray-700">
                <strong>Role:</strong> {project.role}
              </p>
            )}

            {/* Sponsor / Funding Agency */}
            <p className="text-gray-800">
              <strong>Sponsor:</strong> {project.funding_agency}
            </p>

            {/* Duration */}
            <p className="text-gray-700">
              <strong>Duration:</strong> {project.start_date} -{" "}
              {project.end_date}
            </p>

            {/* Financial Outlay */}
            <p className="text-gray-800">
              <strong>Project Cost (INR):</strong> ₹
              {parseFloat(project.financial_outlay).toLocaleString()}
            </p>

            {/* Status */}
            <p
              className={`text-lg font-semibold ${
                project.status === "Completed"
                  ? "text-green-800"
                  : "text-blue-600"
              }`}
            >
              <strong className="text-black font-normal">Status:</strong>{" "}
              {project.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConsultancyProjects;
