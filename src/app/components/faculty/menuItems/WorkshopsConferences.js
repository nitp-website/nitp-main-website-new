import React from "react";

const WorkshopsConferences = ({ data }) => {
  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Workshops & Conferences
      </h2>
      <ul className="space-y-4">
        {data.map((event, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3>
              Event:{" "}
              <span className="text-black font-semibold">
                {event.event_type}
              </span>{" "}
              Role:{" "}
              <span className="text-gray-700 font-semibold">{event.role},</span>{" "}
              Title:{" "}
              <span className="text-blue-700 font-semibold">
                {event.event_name}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkshopsConferences;
