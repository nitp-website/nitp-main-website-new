import React from "react";

const VisitsAbroad = ({ data }) => {

  const sortedVisits = [...data].sort((a, b) => {
    const isAContinue = a.end_date === "Continue";
    const isBContinue = b.end_date === "Continue";

    if (isAContinue && !isBContinue) return -1;
    if (isBContinue && !isAContinue) return 1;

    const dateA = isAContinue ? new Date(a.start_date) : new Date(a.end_date);
    const dateB = isBContinue ? new Date(b.start_date) : new Date(b.end_date);
    return dateB - dateA;
  });

  return (
    <div className="p-6 border border-blue-600 rounded-lg text-black bg-blue-100 shadow-lg">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-4">
        Visits Abroad
      </h2>
      <ul className="space-y-4">
        {sortedVisits.map((visit, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <p className="text-black">
              <span className="text-lg font-semibold text-blue-700">
                Visit to {visit.country}
              </span> for purpose:{" "}
              <span className="font-semibold">{visit.purpose}</span>. <br />
              Funded by: <span className="font-semibold">{visit.funded_by}</span>. <br />
              Visit started on {new Date(visit.start_date).toLocaleDateString()} and{" "}
              {visit.end_date === "Continue"
                ? "is currently ongoing."
                : `ended on ${new Date(visit.end_date).toLocaleDateString()}.`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisitsAbroad;
