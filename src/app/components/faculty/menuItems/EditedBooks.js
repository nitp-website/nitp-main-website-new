import React, { useState } from "react";

const EditedBooks = ({ data }) => {
  const [error, setError] = useState(null);

  // console.log(data);

  return (
    <div className="p-6 border border-red-600 rounded-lg text-black bg-red-100 shadow-lg">
      <h2 className="text-xl font-bold text-red-800 border-b-2 border-red-500 pb-2 mb-4">
        Edited Books
      </h2>

      {error && <p className="text-red-500">Error: {error.message}</p>}
      <ul className="space-y-6">
        {data.length > 0 ? (
          data.map((book, index) => (
            <li
              key={index}
              className="p-5 border border-gray-200 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h6 className="text-xl text-black">
                <span className="text-gray-800 font-semibold">
                  {book.editors},
                </span>{" "}
                <span className="text-blue-600 font-semibold">
                  {book.title}
                </span>{" "}
                <span className="font-semibold text-black">
                  Published by {book.publisher}
                </span>
                <span className="ml-2">(ISBN: {book.isbn})</span>
                <span className="ml-2">{book.year}</span>
              </h6>
              <h3>
                {book.doi && (
                  <p className="text-gray-600">
                    <strong>DOI:</strong>{" "}
                    <a href={book.doi} className="text-blue-600 underline">
                      {book.doi}
                    </a>
                  </p>
                )}
              </h3>
            </li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>
    </div>
  );
};

export default EditedBooks;
