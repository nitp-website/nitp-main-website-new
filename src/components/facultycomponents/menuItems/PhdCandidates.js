import React, { useState } from "react";

const PhdCandidates = ({ data }) => {
  // console.log(data);

  const [error, setError] = useState(null);

  // Categorizing PhD candidates by status
  const ongoingStatuses = [
    "Admission",
    "Comprehension",
    "Presubmission",
    "Thesis Submitted",
    "Ongoing",
  ];
  const completedStatuses = ["Awarded", "Completed"];

  const ongoingProjects = data?.filter((candidate) =>
    ongoingStatuses.includes(candidate.current_status)
  );
  const completedProjects = data?.filter((candidate) =>
    completedStatuses.includes(candidate.current_status)
  );

  return (
    <div className="p-6 border border-red-600 rounded-lg text-black bg-blue-100 shadow-lg">
      <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-500 pb-2 mb-4">
        PhD Candidates
      </h2>

      {/* Error State */}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      {/* Ongoing Projects */}
      {ongoingProjects?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-700">Ongoing</h3>
          <ul className="space-y-4 mt-2">
            {ongoingProjects.map((candidate, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-semibold text-blue-700 hover:text-red-500 transition-colors duration-300">
                      {candidate.student_name}
                    </h4>
                    <p className="text-gray-800">{candidate.research_area}</p>
                  </div>
                  <p className="text-gray-800 font-bold">
                    {candidate.registration_year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Completed Projects */}
      {completedProjects?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-blue-700">Completed</h3>
          <ul className="space-y-4 mt-2">
            {completedProjects.map((candidate, index) => (
              <li
                key={index}
                className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
              >
                <div className="flex justify-between items-center">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-lg font-semibold text-blue-700 hover:text-red-500 transition-colors duration-300">
                      {candidate.student_name}
                    </h4>
                    <p className="text-gray-800">{candidate.research_area}</p>
                  </div>
                  <p className="text-gray-800 font-bold">
                    {candidate.registration_year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhdCandidates;
