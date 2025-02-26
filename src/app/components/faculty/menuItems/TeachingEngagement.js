import React from "react";

const TeachingEngagement = ({ data }) => {
  // Sort the courses by years_offered (latest first)
  const sortedData = [...data].sort((a, b) => b.years_offered - a.years_offered);

  // console.log(sortedData);

  // Group courses by level first, then by year
  const groupedCourses = { UG: {}, PG: {} };

  sortedData.forEach((course) => {
    const { level, years_offered } = course;
    if (!groupedCourses[level]) {
      groupedCourses[level] = {}; // Ensure the level is defined
    }
    if (!groupedCourses[level][years_offered]) {
      groupedCourses[level][years_offered] = [];
    }
    groupedCourses[level][years_offered].push(course);
  });

  const getCourseType = (course) => {
    const { lectures, lab_hours } = course;
    if (lectures > 0 && lab_hours > 0) {
      return "(Theory and Laboratory)";
    } else if (lectures > 0) {
      return "(Theory)";
    } else if (lab_hours > 0) {
      return "(Laboratory)";
    }
    return "";
  };

  return (
    <div className="p-6 border border-blue-600 rounded-lg text-black bg-blue-100 shadow-lg">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-4">
        Teaching Engagements
      </h2>
      {Object.keys(groupedCourses)
        .filter((level) => Object.keys(groupedCourses[level]).length > 0) // Only show levels with courses
        .map((level) => (
          <div key={level} className="mb-6">
            <h3 className="text-2xl mb-2 font-bold text-gray-900">{level} LEVEL</h3>
            {Object.keys(groupedCourses[level])
              .sort((a, b) => b - a)
              .map((year) => (
                <div key={year} className="mb-6">
                  <h4 className="text-lg font-bold text-white bg-blue-500 px-4 py-1 rounded-lg">
                    {year}
                  </h4>
                  <ul className="space-y-4 mt-2">
                    {groupedCourses[level][year].map((course, index) => (
                      <li key={index} className="text-lg mt-2 font-semibold text-gray-800">
                        {course.course_number} -
                        <span className="text-black font-semibold"> {course.course_title}</span>
                        {getCourseType(course)}, Semester {course.semester}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
    </div>
  );
};

export default TeachingEngagement;