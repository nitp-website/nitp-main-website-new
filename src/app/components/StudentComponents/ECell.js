"use client"
import { useState } from "react";
import { FaHome, FaUsers } from "react-icons/fa";

const ECell = () => {
  const [state, setState] = useState("Home");
  const tags = ["Home", "People"];

  return (
    <div>
      {/* ✅ Mobile Layout */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap justify-center items-center">
            {tags.map((item, i) => (
              <span
                key={i}
                className={`m-2 p-2 cursor-pointer rounded-lg ${
                  state === item
                    ? "bg-red-300 text-black"
                    : "bg-red-700 text-white"
                }`}
                onClick={() => setState(item)}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col">
            {state === "Home" && (
              <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold text-black leading-relaxed">
                Entrepreneurship Cell, NIT Patna is a non-profit college club
                run by students of NIT Patna, founded in 2013 with the objective
                of increasing the spirit of Entrepreneurship among students of
                National Institute of Technology Patna. <br /> <br />
                Entrepreneurship Cell NIT Patna helps the aspiring entrepreneurs
                to start and grow their businesses by creating a pathway of
                various opportunities like interactive sessions with
                professionals and founders, business competitions, business
                quizzes and financial awareness programs. This helps foster
                entrepreneurial thinking, promote business knowledge and
                increase confidence in students. <br /> <br />
                Our vision is to help students who have an idea, product and
                burning desire by providing convincing skills, market exposure
                and investors for their start-up. This cell helps students to
                understand the business world by actually working in a start-up.
              </div>
            )}

            {state === "People" && (
              <div className="border shadow-xl w-full h-[70vh] p-3 text-md font-semibold flex justify-center items-center text-black">
                <div className="border shadow-2xl p-5 text-center">
                  <span className="text-lg font-semibold">Prof.-In-Charge</span>
                  <span className="text-2xl font-bold text-red-800 block mt-2">
                    Dr. Om Ji Shukla
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Desktop Layout */}
      <div className="hidden md:flex">
        {/* Sidebar */}
        <aside className="md:w-64 min-h-screen bg-gradient-to-b from-white via-red-50 to-red-100 shadow-xl rounded-xl p-4 md:p-6 flex flex-col">
          <h2 className="text-xl md:text-2xl font-extrabold mb-8 tracking-tight text-red-800 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-red-700 rounded-full mr-2"></span>
            E-Cell
          </h2>
          <nav className="flex-1">
            <ul className="space-y-2">
              <li>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                    state === "Home"
                      ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg"
                      : "hover:bg-red-100 text-red-900"
                  }`}
                  onClick={() => setState("Home")}
                >
                  <FaHome className="text-lg" />
                  Home
                </button>
              </li>
              <li>
                <button
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-base ${
                    state === "People"
                      ? "bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg"
                      : "hover:bg-red-100 text-red-900"
                  }`}
                  onClick={() => setState("People")}
                >
                  <FaUsers className="text-lg" />
                  People
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <div className="ml-8 flex flex-col flex-1">
          {state === "Home" && (
            <div className="border shadow-xl w-full flex flex-col md:flex-row gap-6 h-[60vh] p-3 text-md font-semibold leading-relaxed text-black">
              <div className="flex-1">
                Entrepreneurship Cell, NIT Patna is a non-profit college club
                run by students of NIT Patna, founded in 2013 with the objective
                of increasing the spirit of Entrepreneurship among students of
                National Institute of Technology Patna.
                Entrepreneurship Cell NIT Patna helps the aspiring entrepreneurs
                to start and grow their businesses by creating a pathway of
                various opportunities like interactive sessions with
                professionals and founders, business competitions, business
                quizzes and financial awareness programs. This helps foster
                entrepreneurial thinking, promote business knowledge and
                increase confidence in students.
                Our vision is to help students who have an idea, product and
                burning desire by providing convincing skills, market exposure
                and investors for their start-up. This cell helps students to
                understand the business world by actually working in a start-up.
              </div>
            </div>
          )}

          {state === "People" && (
            <div className="border shadow-xl w-full h-[60vh] p-3 text-md font-semibold text-black">
              <div className="border shadow-2xl p-5 text-black flex flex-col">
                <span className="text-lg font-semibold">Prof.-In-Charge</span>
                <span className="text-2xl font-bold text-red-800">
                  Dr. Om Ji Shukla
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ECell;
