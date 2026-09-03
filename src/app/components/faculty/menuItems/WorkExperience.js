import React from "react";
import { FaChalkboardTeacher, FaCalendarAlt, FaUniversity, FaBriefcase } from "react-icons/fa";
import formatDate from "../../../../utils/formatDate";
import { getExperience } from "../../../../utils/experienceCalculator";

const WorkExperience = ({ data }) => {
  // Sort experiences by start date (latest first)
  const sortedData = Array.isArray(data) ? [...data].sort(
    (a, b) => new Date(b.start_date || b.start) - new Date(a.start_date || a.start)
  ) : [];

  const totalExperience = getExperience(null, data);

  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Work Experience
      </h2>
      {totalExperience && (
        <div className="mb-4 p-3 bg-purple-200 border border-purple-300 rounded-md text-purple-950 font-semibold text-sm flex items-center gap-2 shadow-sm">
          <FaBriefcase className="text-purple-800 w-4 h-4 shrink-0" />
          <span>Total Calculated Experience: {totalExperience}</span>
        </div>
      )}
      <ul className="space-y-4">
        {sortedData.map((experience, index) => {
          const startDate = experience.start_date;
          const endDate = experience.end_date || "Ongoing"; // Handle ongoing cases

          return (
            <li
              key={index}
              className="flex items-center space-x-4 p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Professor Icon */}
              <FaChalkboardTeacher className="text-purple-700 w-6 h-6" />

              {/* Work Details */}
              <div>
                <h3 className="text-lg">
                  <span className="text-purple-700 font-semibold">{experience.work_experiences}</span> at <span className="text-black font-semibold"><FaUniversity className="inline-block w-5 h-5 mr-1" />{experience.institute}</span>
                </h3>

                {/* Start & End Dates with Calendar Icon */}
                <p className="text-gray-800 flex items-center">
                  <FaCalendarAlt className="w-4 h-4 mr-2 text-gray-600" />
                  {formatDate(startDate,endDate)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkExperience;
