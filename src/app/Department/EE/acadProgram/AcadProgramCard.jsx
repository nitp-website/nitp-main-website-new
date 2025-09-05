import React from "react";
import Link from "next/link";

export const AcadProgramCard = ({ program }) => {
  return (
    <div className="w-full mx-auto md:w-[48%] bg-white border-2 border-red-800 rounded-xl shadow transition-shadow p-2 md:p-6 flex flex-col justify-between mb-4 hover:shadow-lg shadow-gray-200">
      <div>
        {
          program.title && (
            <h3 className="text-xl font-semibold text-start text-red-800 mb-2">
              {program.title}
            </h3>
          )
        }
        {
          program.degree && (
            <p className="text-base text-gray-600 mb-1">
              <strong>Degree:</strong>{" "}
              <span className="font-semibold text-black">{program.degree}</span>
            </p>
          )
        }
        {
          program.duration && (
            <p className="text-sm text-gray-600 mb-3">
              <strong>Duration:</strong>{" "}
              <span className="font-semibold text-black">{program.duration}</span>
            </p>
          )
        }
        {
          program.description && (
            <p className="text-gray-700 text-base text-justify">
              {program.description}
            </p>
          )
        }
      </div>
      <div className="mt-4 mx-auto">
        {program.syllabus && (
          <a href={`/Department/EE/syllabus/${program.syllabus}`} >
            <button className="text-red-800 border border-red-800 px-4 py-1 text-sm rounded-md  transition hover:bg-red-800 hover:text-white cursor-pointer">
              Curriculum / Syllabus
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
