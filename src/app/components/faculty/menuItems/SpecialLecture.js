import React from "react";

const SpecialLectures = ({ data }) => {

  const sortedLectures = [...data].sort((a, b) => {
    const isAContinue = a.end_date === "Continue";
    const isBContinue = b.end_date === "Continue";

    if (isAContinue && !isBContinue) return -1;
    if (isBContinue && !isAContinue) return 1;

    const dateA = isAContinue ? new Date(a.start_date) : new Date(a.end_date);
    const dateB = isBContinue ? new Date(b.start_date) : new Date(b.end_date);
    return dateB - dateA;
  });

  return (
    <div className="p-6 border border-yellow-600 rounded-lg text-black bg-yellow-100 shadow-lg">
      <h2 className="text-xl font-bold text-yellow-800 border-b-2 border-yellow-500 pb-2 mb-4">
        Special Lectures
      </h2>
      <ul className="space-y-4">
        {sortedLectures.map((lecture, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <p className="text-black">
              <span className="text-lg font-semibold text-yellow-700">
                Lecture on "{lecture.topic}"
              </span> at{" "}
              <span className="font-semibold">{lecture.institute_name}</span>. <br />
              Financed by: <span className="font-semibold">{lecture.financed_by}</span>. <br />
              Lecture started on {new Date(lecture.start_date).toLocaleDateString()} and{" "}
              {lecture.end_date === "Continue"
                ? "is currently ongoing."
                : `ended on ${new Date(lecture.end_date).toLocaleDateString()}.`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpecialLectures;
