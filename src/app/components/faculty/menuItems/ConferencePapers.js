import React from "react";

const ConferencePapers = ({ data }) => {
  // Sort publications by year (latest first)
  const sortedPapers = [...data].sort(
    (a, b) => b.conference_year - a.conference_year
  );

  // Group papers by year
  const groupedPapers = sortedPapers.reduce((acc, paper) => {
    const year = paper.conference_year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(paper);
    return acc;
  }, {});

  return (
    <div className="p-6 border border-red-600 rounded-lg text-black bg-blue-100 shadow-lg">
      <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-500 pb-2 mb-4">
        Conference Publications
      </h2>

      {Object.keys(groupedPapers)
        .sort((a, b) => b - a) // Sort years in descending order
        .map((year) => (
          <div key={year} className="mb-6">
            <h3 className="text-lg font-bold text-white bg-blue-700 px-4 py-2 rounded-lg">
              {year}
            </h3>
            <ul className="space-y-4 mt-2">
              {groupedPapers[year].map((paper, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                >
                  <p className="text-gray-800">
                    <span className="font-semibold">{paper.authors}</span>,{" "}
                    <span className="font-semibold text-blue-700">
                      "{paper.title}"
                    </span>
                    ,
                    <span className="text-gray-700 text-lg font-bold">
                      {" "}
                      {paper.conference_name}
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {" "}
                      Location: {paper.location}
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      ({paper.conference_year})
                    </span>
                  </p>
                  {paper.doi && (
                    <p className="text-blue-600 underline">
                      <a
                        href={paper.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DOI Link
                      </a>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default ConferencePapers;
