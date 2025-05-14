import React from "react";

const InternationalJournalReviewer = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-6 border border-yellow-600 rounded-lg bg-yellow-100 text-yellow-800">
        No International Journal Reviewer data available.
      </div>
    );
  }

  const sortedReviewers = [...data].sort(
    (a, b) => new Date(b.from_date) - new Date(a.from_date)
  );

  return (
    <div className="p-6 border border-yellow-600 rounded-lg text-black bg-yellow-100 shadow-lg">
      <h2 className="text-xl font-bold text-yellow-800 border-b-2 border-yellow-500 pb-2 mb-4">
        International Journal Reviewer
      </h2>
      <ul className="space-y-4">
        {sortedReviewers.map((reviewer, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {reviewer.name}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalJournalReviewer;
