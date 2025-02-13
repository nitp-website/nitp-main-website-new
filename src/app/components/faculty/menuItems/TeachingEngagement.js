import React from "react";

const TeachingEngagement = ({ data }) => {
  // Sort the courses by years_offered (latest first)
  const sortedData = [...data].sort(
    (a, b) => b.years_offered - a.years_offered
  );

  // Separate UG and PG courses
  const ugCourses = sortedData.filter((course) => course.level === "UG");
  const pgCourses = sortedData.filter((course) => course.level === "PG");

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
        Teaching Engagement
      </h2>

      {/* Render UG Courses First */}
      {ugCourses.length > 0 && (
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-gray-900">UG LEVEL</h3>
          {ugCourses.map((course, index) => (
            <li
              key={index}
              className="text-xl mt-2 font-semibold text-gray-800"
            >
              {course.course_number} -{" "}
              <span className="text-black font-semibold">
                {course.course_title}
              </span>{" "}
              {getCourseType(course)}, Semester {course.semester},{" "}
              {course.years_offered}
            </li>
          ))}
        </div>
      )}

      {/* Render PG Courses Next */}
      {pgCourses.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-gray-900">PG LEVEL</h3>
          {pgCourses.map((course, index) => (
            <li
              key={index}
              className="text-xl mt-2 font-semibold text-gray-800"
            >
              {course.course_number} -{" "}
              <span className="text-black font-semibold">
                {course.course_title}
              </span>{" "}
              {getCourseType(course)}, Semester {course.semester},{" "}
              {course.years_offered}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default TeachingEngagement;
