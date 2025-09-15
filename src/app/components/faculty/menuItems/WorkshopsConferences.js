import React from "react";

const WorkshopsConferences = ({ data }) => {
  const sortedData = [...data].sort(
    (a, b) => new Date(b.start_date) - new Date(a.start_date)
  );

  const formatDate = (dateStr) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  return (
    <div className="p-6 border border-purple-600 rounded-lg text-black bg-purple-100 shadow-lg">
      <h2 className="text-xl font-bold text-purple-800 border-b-2 border-purple-500 pb-2 mb-4">
        Workshops & Conferences
      </h2>
      <ul className="space-y-4">
        {sortedData.map((event, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <p className="text-gray-800 leading-relaxed">
              Served as{" "}
              <span className="font-semibold text-purple-700">
                {event.role}
              </span>{" "}
              for the{" "}
              <span className="font-semibold text-blue-700">
                {event.event_type}
              </span>{" "}
              titled{" "}
              <span className="italic text-black">
                “{event.event_name}”
              </span>
              , sponsored by{" "}
              <span className="font-semibold text-gray-700">
                {event.sponsored_by}
              </span>
              , held from{" "}
              <span className="text-gray-900 font-medium">
                {formatDate(event.start_date)}
              </span>{" "}
              to{" "}
              <span className="text-gray-900 font-medium">
                {formatDate(event.end_date)}
              </span>.
              {/* , with{" "}
              <span className="text-gray-900 font-semibold">
                {event.participants_count}
              </span>{" "}
              participants. */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkshopsConferences;
