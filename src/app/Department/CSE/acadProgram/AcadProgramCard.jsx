import React from "react";

export const AcadProgramCard = ({ program }) => {
  return (
    <div className="w-full mx-auto md:w-[48%] bg-white border-2 border-red-800 rounded-xl shadow transition-shadow p-2 md:p-6 flex flex-col justify-between mb-4 hover:shadow-lg shadow-gray-200">
      <div>
        <h3 className="text-xl font-semibold text-start text-red-800 mb-2">
          {program.title}
        </h3>
        <p className="text-base text-gray-600 mb-1">
          <strong>Degree:</strong>{" "}
          <span className="font-semibold text-black">{program.degree}</span>
        </p>
        <p className="text-sm text-gray-600 mb-3">
          <strong>Duration:</strong>{" "}
          <span className="font-semibold text-black">{program.duration}</span>
        </p>
        <p className="text-gray-700 text-base text-justify">
          {program.description}
        </p>
      </div>
      <div className="mt-4 flex justify-between">
        {program.courseStructure && (
          <a href={`${program.courseStructure}`}>
            <button className="text-red-800 border border-red-800 px-4 py-1 text-sm rounded-md  transition hover:bg-red-800 hover:text-white cursor-pointer">
              Curriculum
            </button>
          </a>
        )}

        {program.syllabus && (
          // <a href={`${program.syllabus}`}>
          <a href='/Department/CSE/syllabus' >
            <button className="text-red-800 border border-red-800 px-4 py-1 text-sm rounded-md  transition hover:bg-red-800 hover:text-white cursor-pointer">
              Syllabus
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
