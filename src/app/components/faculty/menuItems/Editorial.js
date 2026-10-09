import React from "react";

const isContinue = (val) =>
  typeof val === "string" && val.trim().toLowerCase() === "continue";

const isValidDate = (d) => {
  if (!d || d === "null" || d === "undefined" || d === "0000-00-00") return false;
  const parsed = new Date(d);
  return !isNaN(parsed.getTime()) && parsed.getFullYear() > 1970;
};

const EditorialBoards = ({ data }) => {
  const sortedBoards = [...(Array.isArray(data) ? data : [])].sort((a, b) => {
    const isAContinue = isContinue(a?.end_date);
    const isBContinue = isContinue(b?.end_date);

    if (isAContinue && !isBContinue) return -1;
    if (isBContinue && !isAContinue) return 1;

    const getCompareDate = (item) => {
      if (isValidDate(item?.end_date)) return new Date(item.end_date);
      if (isValidDate(item?.start_date)) return new Date(item.start_date);
      return new Date(0);
    };

    const dateA = isAContinue
      ? (isValidDate(a?.start_date) ? new Date(a.start_date) : new Date(0))
      : getCompareDate(a);
    const dateB = isBContinue
      ? (isValidDate(b?.start_date) ? new Date(b.start_date) : new Date(0))
      : getCompareDate(b);

    return dateB - dateA;
  });

  return (
    <div className="p-6 border border-green-600 rounded-lg text-black bg-green-100 shadow-lg">
      <h2 className="text-xl font-bold text-green-800 border-b-2 border-green-500 pb-2 mb-4">
        Editorial Boards
      </h2>
      <ul className="space-y-4">
        {sortedBoards.map((board, index) => {
          const hasStart = isValidDate(board.start_date);
          const isOngoing = isContinue(board.end_date);
          const hasEnd = isValidDate(board.end_date);

          const startFormatted = hasStart
            ? new Date(board.start_date).toLocaleDateString()
            : null;
          const endFormatted = hasEnd
            ? new Date(board.end_date).toLocaleDateString()
            : null;

          return (
            <li
              key={index}
              className="p-4 border border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300"
            >
              <p className="text-black">
                <span className="text-lg font-semibold text-green-700">
                  {board.position} at {board.journal_name}
                </span>
                {hasStart ? (
                  <>
                    {", "}It started on {startFormatted}
                    {isOngoing && " and is currently ongoing."}
                    {!isOngoing && hasEnd && ` and ended on ${endFormatted}.`}
                    {!isOngoing && !hasEnd && "."}
                  </>
                ) : (
                  <>
                    {isOngoing && ", is currently ongoing."}
                    {!isOngoing && hasEnd && `, ended on ${endFormatted}.`}
                    {!isOngoing && !hasEnd && "."}
                  </>
                )}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EditorialBoards;
