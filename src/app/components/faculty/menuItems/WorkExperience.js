import React from "react";
import { FaChalkboardTeacher, FaCalendarAlt, FaUniversity } from "react-icons/fa";

const WorkExperience = ({ data }) => {
  // Sort experiences by start date (latest first)
  const sortedData = [...data].sort(
    (a, b) => new Date(b.start_date) - new Date(a.start_date)
  );

  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Work Experience
      </h2>
      <ul className="space-y-4">
        {sortedData.map((experience, index) => {
          const startDate = new Date(experience.start_date).toLocaleDateString();
          const endDate = experience.end_date
            ? new Date(experience.end_date).toLocaleDateString()
            : "Ongoing"; // Handle ongoing cases

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
                  {startDate} – {endDate}
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
