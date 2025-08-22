import React from "react";

const EditorialBoards = ({ data }) => {

  const sortedBoards = [...data].sort((a, b) => {
    const isAContinue = a.end_date === "Continue";
    const isBContinue = b.end_date === "Continue";

    if (isAContinue && !isBContinue) return -1;
    if (isBContinue && !isAContinue) return 1;

    const dateA = isAContinue ? new Date(a.start_date) : new Date(a.end_date);
    const dateB = isBContinue ? new Date(b.start_date) : new Date(b.end_date);
    return dateB - dateA;
  });

  return (
    <div className="p-6 border border-green-600 rounded-lg text-black bg-green-100 shadow-lg">
      <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-500 pb-2 mb-4">
        Editorial Boards
      </h2>
      <ul className="space-y-4">
        {sortedBoards.map((board, index) => (
          <li
            key={index}
            className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
          >
            <p className="text-black">
              <span className="text-lg font-semibold text-green-700">
                {board.position} at {board.journal_name}</span>,It started on{" "}
              {new Date(board.start_date).toLocaleDateString()} and{" "}
              {board.end_date === "Continue"
                ? "is currently ongoing."
                : `ended on ${new Date(board.end_date).toLocaleDateString()}.`}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EditorialBoards;
