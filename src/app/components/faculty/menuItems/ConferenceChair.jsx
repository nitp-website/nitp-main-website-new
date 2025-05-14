import React from "react";

const ConferenceChairs = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 border border-red-600 rounded-lg bg-red-100 text-red-800">
        No Conference Chair data available.
      </div>
    );
  }

  const sortedConferences = [...data].sort(
    (a, b) => new Date(b.from_date) - new Date(a.from_date)
  );

  const formatDateRange = (from, to) => {
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const options = { day: "2-digit", month: "long" };
    const yearOptions = { year: "numeric" };

    const sameMonth = fromDate.getMonth() === toDate.getMonth();
    const sameYear = fromDate.getFullYear() === toDate.getFullYear();

    if (sameMonth && sameYear) {
      return `${fromDate.getDate()}-${toDate.getDate()}, ${fromDate.toLocaleString("default", { month: "long" })} ${fromDate.getFullYear()}`;
    } else {
      const fromFormatted = fromDate.toLocaleDateString("en-US", options);
      const toFormatted = toDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      return `${fromFormatted} - ${toFormatted}`;
    }
  };

  return (
    <div className="p-6 border border-green-600 rounded-lg text-black bg-green-100 shadow-lg">
      <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-500 pb-2 mb-4">
        Conference Sessions Chaired
      </h2>
      <ul className="space-y-4">
        {sortedConferences.map((conf, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-black">
              <span className="text-lg font-semibold text-green-800">
                {conf.conference_name}
              </span>
              ,{" "}
              <span className="text-lg font-medium text-gray-800">
                {conf.institute_name}
              </span>
              ,{" "}
              <span className="text-gray-700">{conf.place}</span>,{" "}
              <span className="text-gray-900 italic">
                {formatDateRange(conf.from_date, conf.to_date)}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConferenceChairs;
