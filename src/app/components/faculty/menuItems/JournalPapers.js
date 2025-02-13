import React from "react";

const JournalPapers = ({ data }) => {
  // Sort publications by year (latest first)
  const sortedPapers = [...data].sort(
    (a, b) => b.publication_year - a.publication_year
  );

  // console.log(sortedPapers);

  // Group papers by year
  const groupedPapers = sortedPapers.reduce((acc, paper) => {
    const year = paper.publication_year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(paper);
    return acc;
  }, {});

  return (
    <div className="p-6 border border-red-600 rounded-lg text-black bg-blue-100 shadow-lg">
      <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-500 pb-2 mb-4">
        Journal Publications
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
                    {paper.authors && (
                      <span className="font-semibold">{paper.authors}</span>
                    )}
                    ,{" "}
                    {paper.title && (
                      <span className="font-semibold text-blue-700">
                        "{paper.title}"
                      </span>
                    )}
                    ,{" "}
                    {paper.journal_name && (
                      <span className="text-gray-700 text-lg font-semibold">
                        {paper.journal_name}
                      </span>
                    )}{" "}
                    {paper.journal_quartile && (
                      <span className="text-gray-700">
                        ({paper.journal_quartile})
                      </span>
                    )}{" "}
                    {paper.volume && (
                      <span className="text-gray-700">
                        Volume: {paper.volume}
                      </span>
                    )}{" "}
                    {paper.publication_year && (
                      <span className="text-gray-700">
                        Year: {paper.publication_year}
                      </span>
                    )}
                  </p>
                  {paper.doi_url && (
                    <p className="text-blue-600 underline">
                      <a
                        href={paper.doi_url}
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

export default JournalPapers;
