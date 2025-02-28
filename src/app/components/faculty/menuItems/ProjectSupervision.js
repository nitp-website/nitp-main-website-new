import React, { useState } from "react";

const ProjectSupervision = ({ data }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const today = new Date();
  const sortedProjects = [...data].sort(
    (a, b) => new Date(b.start_date) - new Date(a.start_date)
  );

  const getAcademicYear = (date) => {
    const year = new Date(date).getFullYear();
    return `${year}-${year + 1}`;
  };

  const getProjectCategory = (category) => {
    const ugDegrees = ["BTech", "B.Arch"];
    const pgDegrees = ["MTech", "M.Sc", "Int.M.Sc", "M.Arch", "MCA", "Int.Msc"];

    if (ugDegrees.includes(category)) return "UG";
    if (pgDegrees.includes(category)) return "PG";
    return "Other"; // Any other category
  };

  const groupedProjects = sortedProjects.reduce((acc, project) => {
    const category = getProjectCategory(project.category);
    const academicYear = getAcademicYear(project.start_date);
    const endDate = new Date(project.end_date);
    const isCompleted = endDate < today; // Check if project is completed

    if (!acc[category]) acc[category] = {};
    if (!acc[category][academicYear]) acc[category][academicYear] = [];

    acc[category][academicYear].push({ ...project, isCompleted });
    return acc;
  }, {});

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Project Supervision
      </h2>

      {["PG", "UG"].map((category) =>
        groupedProjects[category] ? (
          <div key={category} className="mb-4">
            <button
              className="w-full text-left text-lg font-bold bg-purple-700 text-white px-4 py-2 rounded-lg flex justify-between items-center"
              onClick={() => toggleDropdown(category)}
            >
              {category} Projects{" "}
              <span>{openDropdown === category ? "▲" : "▼"}</span>
            </button>

            {openDropdown === category && (
              <div className="mt-2 p-4 border shadow-lg rounded-lg bg-gray-200">
                {Object.keys(groupedProjects[category])
                  .sort((a, b) => b.localeCompare(a))
                  .map((year) => (
                    <div key={year} className="mt-4">
                      <h4 className="text-md font-bold bg-yellow-400 px-3 py-1 rounded-md">
                        {year}
                      </h4>
                      <ul className="space-y-4 mt-2">
                        {groupedProjects[category][year].map(
                          (project, index) => (
                            <li
                              key={index}
                              className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                            >
                              <h3 className="text-lg font-semibold text-purple-700">
                                {project.project_title}
                              </h3>
                              <p className="text-gray-800">
                                <strong>Student(s):</strong>{" "}
                                {project.student_details}
                              </p>
                              <p className="text-gray-800">
                                <strong>Year:</strong> {year}
                              </p>
                              <p className="font-semibold text-gray-800">
                                Status:{" "}
                                <span
                                  className={`text-lg font-semibold ${
                                    project.isCompleted
                                      ? "text-green-600"
                                      : "text-blue-600"
                                  }`}
                                >
                                  {project.isCompleted
                                    ? "Completed"
                                    : "Ongoing"}
                                </span>
                              </p>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
              </div>
            )}
          </div>
        ) : null
      )}
    </div>
  );
};

export default ProjectSupervision;
