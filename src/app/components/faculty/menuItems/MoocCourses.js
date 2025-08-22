import React from "react";

const MoocCourses = ({ data }) => {

  const sortedCourses = [...data].sort((a, b) => {
    const isAContinue = a.end_date === "Continue";
    const isBContinue = b.end_date === "Continue";

    if (isAContinue && !isBContinue) return -1;
    if (isBContinue && !isAContinue) return 1;

    const dateA = isAContinue ? new Date(a.start_date) : new Date(a.end_date);
    const dateB = isBContinue ? new Date(b.start_date) : new Date(b.end_date);
    return dateB - dateA;
  });

  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        MOOC Courses
      </h2>
      <ul className="space-y-4">
        {sortedCourses.map((course, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <p className="text-black">
              <span className="text-lg font-semibold text-purple-700">
                {course.course_name} ({course.course_code})
              </span>,It started on{" "}
              {new Date(course.start_date).toLocaleDateString()} and{" "}
              {course.end_date === "Continue"
                ? "is currently ongoing."
                : `ended on ${new Date(course.end_date).toLocaleDateString()}.`}
              <br />
              Current status of the course is <span className="font-semibold">{course.status}</span>.
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoocCourses;
