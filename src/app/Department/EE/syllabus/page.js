
"use client";
import React, { useState } from "react";
import BackDepartment from "../../../components/department/BackDepartment";

const tabs = [
    { name: "UG PROGRAM", key: "ug" },
    { name: "Dual Degree PROGRAM", key: "dual" },
    { name: "PG PROGRAM", key: "pg" },
    { name: "PhD PROGRAM", key: "phd" },
];

const syllabusData = {
    ug: [
        {
            course: "B.Tech Course Structure (2021)",
            link: "https://drive.google.com/file/d/1A0l-C3vXUjL3qrV6dZutObFlQKiVhOuJ/view",
        },
        {
            course: "B.Tech Syllabus (2021)",
            link: "https://drive.google.com/file/d/1F6i7jfE9LzhGJM7M1SqbDhtDXd8dq9Dj/view?usp=drive_link",
        },
        {
            course: "B.Tech Course Structure (2022)",
            link: "https://drive.google.com/file/d/198DYWz6y1TK1lEeNX_V9eP01aNamRJtW/view",
        },
        {
            course: "B.Tech Syllabus (2022)",
            link: "https://drive.google.com/file/d/1FVrOsNGJdN09TRtKnvb9_rALJy8E5Dwz/view",
        },
        {
            course: "B.Tech Course Structure (2023) onwards",
            link: "https://drive.google.com/file/d/1gDzCfUQfjaUqFNP61z3YG-R6H_8K6y89/view",
        },
        {
            course: "B.Tech Syllabus (2023) onwards",
            link: "https://drive.google.com/file/d/131yWvyK8E7ZIju7abxcT76D3NfYXHvqR/view",
        },
    ],
    dual: [
        {
            course: "Dual Degree (B.Tech + M.Tech (PSE)) Course Structure (2022)",
            link: "https://drive.google.com/file/d/1R24uKKW9fxbtv6TlWzCfgIuqTydIN5ND/view",
        },
        {
            course: "Dual Degree (B.Tech + M.Tech (PSE)) Syllabus (2022)",
            link: "https://drive.google.com/file/d/1PlIaW0QziCXjOoMyy425vZocUJn9geuO/view",
        },
        {
            course: "Dual Degree (B.Tech + M.Tech (PSE)) Course Structure (2023) onwards",
            link: "https://drive.google.com/file/d/1D-JX5uoJ3Vf7tENlyq0Z3AEQKAAinfBo/view",
        },
        {
            course: "Dual Degree (B.Tech + M.Tech (PSE)) Syllabus (2023) onwards",
            link: "https://drive.google.com/file/d/1LJHJqsRSC8-V_P3zkAxu6wn5mdyWfu7m/view",
        },
    ],
    pg: [
        {
            course: "M.Tech (Intelligent Transport Systems) Course structure and Syllabus",
            link: "https://drive.google.com/file/d/1pES5tBVykgQJWu2TFNKkR-0BwrF5wtrW/view?usp=sharing",
        },
        {
            course: "M.Tech (Control System Engg and Power System Engg) Course structure",
            link: "https://drive.google.com/file/d/1HOzQYLI-96kpv4gT9NDoKqLItHsALVzS/view",
        },
        {
            course: "M.Tech- Control System Engg and Power System Engg) Syllabus",
            link: "https://drive.google.com/file/d/1xnaep1qftT-n8RMVEyTYXk-ASqBFcLAK/view",
        },
    ],
    phd: [
        {
            course: "Ph.D. in Electrical Engineering",
            link: "https://drive.google.com/file/d/1KdqphtQwIuWrC_gdYxjuAcG9TaxaUVf-/view",
        },
    ],
};

const SyllabusComp = ({ course, link }) => (
    <div className="flex flex-row items-center justify-between border-b py-2 px-2">
        <div className="font-semibold text-gray-800 text-base max-sm:text-sm">{course}</div>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline text-sm lg:text-base font-semibold"
        >
            View
        </a>
    </div>
);

export default function EESyllabusPage() {
    const [activeTab, setActiveTab] = useState("ug");
    return (
        <div className="flex flex-col p-10 max-sm:p-2 text-black">
                    <div className="flex flex-col mb-6 items-center">
                        <div>
                            <p className="text-red-900 text-3xl max-sm:text-2xl font-bold text-center">SYLLABUS</p>
                        </div>
                        <div className="mt-2">
                            <p className="text-gray-500 text-base font-semibold text-center">ELECTRICAL ENGINEERING</p>
                        </div>
                    </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                <div className="flex justify-center mb-8 flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`px-4 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none text-base max-sm:text-sm shadow ${
                                activeTab === tab.key
                                    ? "bg-red-900 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-red-100"
                            }`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="bg-white rounded-md shadow p-2">
                    {syllabusData[activeTab].map((item, idx) => (
                        <SyllabusComp key={idx} course={item.course} link={item.link} />
                    ))}
                </div>
            </div>
        </div>
    );
}
