import React from "react";
import Link from "next/link";

export const AcadProgramCard = ({ program }) => {
  return (
    <div className="w-full px-2 mb-4 md:w-1/2">
      <div className="h-full bg-white border-2 border-red-800 rounded-xl shadow transition-shadow p-3 md:p-6 flex flex-col justify-between hover:shadow-lg shadow-gray-200">
        <div>
          {program.title && (
            <h3 className="text-lg sm:text-xl font-semibold text-start text-red-800 mb-2">
              {program.title}
            </h3>
          )}
          {program.degree && (
            <p className="text-base text-gray-600 mb-1">
              <strong>Degree:</strong>{" "}
              <span className="font-semibold text-black">{program.degree}</span>
            </p>
          )}
          {program.duration && (
            <p className="text-sm text-gray-600 mb-3">
              <strong>Duration:</strong>{" "}
              <span className="font-semibold text-black">
                {program.duration}
              </span>
            </p>
          )}
          {program.description && (
            <p className="text-gray-700 text-sm sm:text-base text-justify">
              {program.description}
            </p>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-between items-center">
          {program.syllabus && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${program.syllabus}`}
            >
              <button className="w-full sm:w-auto text-red-800 border border-red-800 px-3 py-2 text-sm rounded-md transition hover:bg-red-800 hover:text-white cursor-pointer">
                Curriculum / Syllabus
              </button>
            </a>
          )}

          {program.courseStructure && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${program.courseStructure}`}
            >
              <button className="w-full sm:w-auto text-red-800 border border-red-800 px-3 py-2 text-sm rounded-md transition hover:bg-red-800 hover:text-white cursor-pointer">
                Course Structure
              </button>
            </a>
          )}

          {program.from &&
            program.from.map((item, index) => (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={`${item.courseStructure}`}
              >
                <button className="w-full sm:w-auto text-red-800 border border-red-800 px-3 py-2 text-sm rounded-md transition hover:bg-red-800 hover:text-white cursor-pointer">
                  Curriculum {item.time}
                </button>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};
