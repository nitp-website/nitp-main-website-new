import React from "react";

const BookChapters = ({ data }) => {
  // Sort book chapters by year (latest first)
  const sortedChapters = [...data].sort((a, b) => b.year - a.year);

  // Group chapters by year
  const groupedChapters = sortedChapters.reduce((acc, chapter) => {
    const year = chapter.year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(chapter);
    return acc;
  }, {});

  return (
    <div className="p-6 border border-blue-600 rounded-lg text-black bg-blue-100 shadow-lg">
      <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-500 pb-2 mb-4">
        Book Chapters
      </h2>

      {Object.keys(groupedChapters)
        .sort((a, b) => b - a) // Sort years in descending order
        .map((year) => (
          <div key={year} className="mb-6">
            <h3 className="text-lg font-bold text-white bg-blue-700 px-4 py-2 rounded-lg">
              {year}
            </h3>
            <ul className="space-y-4 mt-2">
              {groupedChapters[year].map((chapter, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
                >
                  <p className="text-gray-800">
                    Book Chapter,
                    <span className="font-semibold text-blue-700">
                      "{chapter.chapter_title}{" "}
                      <span className="text-gray-700">
                        ({chapter.book_title}
                      </span>
                      )"
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {" "}
                      ISBN: {chapter.isbn},
                    </span>
                    <span className="text-gray-800 font-semibold">
                      {" "}
                      Published By: {chapter.publisher},
                    </span>
                    <span className="font-semibold">
                      {" "}
                      Authors: {chapter.authors}
                    </span>
                    , Year:{" "}
                    <span className="text-gray-700">{chapter.year}</span>
                  </p>
                  {chapter.doi && (
                    <p className="text-blue-600 underline">
                      <a
                        href={chapter.doi}
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

export default BookChapters;
