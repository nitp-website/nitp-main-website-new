import React from "react";

const TeachingEngagement = ({ data }) => {

  const uniqueCoursesMap = new Map();

  data.forEach((course) => {
    const key = `${course.course_number.trim()}-${course.course_title.trim()}`;
    if (!uniqueCoursesMap.has(key)) {
      uniqueCoursesMap.set(key, course);
    }
  });

  const uniqueCourses = Array.from(uniqueCoursesMap.values());

  const sortedData = [...uniqueCourses].sort(
    (a, b) => Number(b.years_offered) - Number(a.years_offered)
  );

  const groupedCourses = { UG: {}, PG: {} };

  sortedData.forEach((course) => {
    const { level, years_offered } = course;

    if (!groupedCourses[level]) {
      groupedCourses[level] = {};
    }

    if (!groupedCourses[level][years_offered]) {
      groupedCourses[level][years_offered] = [];
    }

    groupedCourses[level][years_offered].push(course);
  });

  const getCourseType = (course) => {
    const { lectures, lab_hours } = course;
    if (lectures > 0 && lab_hours > 0) return " (Theory and Laboratory)";
    if (lectures > 0) return " (Theory)";
    if (lab_hours > 0) return " (Laboratory)";
    return "";
  };

  return (
    <div className="p-6 border border-blue-600 rounded-lg text-black bg-blue-100 shadow-lg">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-4">
        Teaching Engagements
      </h2>

      {Object.keys(groupedCourses)
        .filter((level) => Object.keys(groupedCourses[level]).length > 0)
        .map((level) => (
          <div key={level} className="mb-6">
            <h3 className="text-2xl mb-2 font-bold text-gray-900">
              {level} LEVEL
            </h3>

            {Object.keys(groupedCourses[level])
              .sort((a, b) => b - a)
              .map((year) => (
                <div key={year} className="mb-6">
                  <h4 className="text-lg font-bold text-white bg-blue-500 px-4 py-1 rounded-lg">
                    {year}
                  </h4>

                  <ul className="space-y-4 mt-2">
                    {groupedCourses[level][year].map((course, index) => (
                      <li
                        key={index}
                        className="text-lg mt-2 font-semibold text-gray-800"
                      >
                        {course.course_number} -
                        <span className="text-black font-semibold">
                          {" "}
                          {course.course_title}
                        </span>
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
