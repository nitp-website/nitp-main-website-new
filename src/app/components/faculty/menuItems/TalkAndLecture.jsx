import React from "react";

const TalksAndLecture = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 border border-red-600 rounded-lg bg-red-100 text-red-800">
        No Talks and Lectures data available.
      </div>
    );
  }

  const sortedLectures = [...data].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="p-6 border border-indigo-600 rounded-lg text-black bg-indigo-100 shadow-lg">
      <h2 className="text-xl font-bold text-indigo-800 border-b-2 border-indigo-500 pb-2 mb-4">
        Invited Talks & Lectures
      </h2>
      <ul className="space-y-4">
        {sortedLectures.map((lecture, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-black">
              <span className="text-lg font-semibold text-purple-700">
                Invited Talks
              </span>{" "}
              in{" "}
              <span className="text-lg font-semibold text-gray-700">
                {lecture.institute_name}
              </span>{" "}
              on{" "}
              <span className="text-lg font-semibold text-gray-900">
                {new Date(lecture.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "2-digit",
                })}
              </span>{" "}
              in{" "}
              <span className="italic text-black">
                {lecture.event_name}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalksAndLecture;
