import React from "react";


const BTechSyllabus = () => {
    const courses = [
        {
            course: "B.Tech Syllabus First Year (2025 onwards)",
            link: "https://drive.google.com/file/d/1uafY-S8oA_dDbVdxtJyQMtRlG7sZVVK8/view",
        },
        {
            course: "B.Tech Course Structure 2025 onwards",
            link: "https://drive.google.com/file/d/1mI_2HOM9yvt43Zg7LjKuQledSiTAfNXU/view",
        },
        {
            course: "B.Tech Course Syllabus 2025 onwards",
            link: "https://drive.google.com/file/d/1fOkqigOLxh9Wyz5QfxaofiM604CbbbkG/view",
        },
        {
            course: "B.Tech Course Structure 2022 onwards - (2024 April update)",
            link: "https://drive.google.com/file/d/1xEnUsHvSnrt3YZw3TAp7jtc6Kegzv7gc/view",
        },
        {
            course: "B.Tech Detailed Syllabus 3rd Semester Onwards",
            link: "https://drive.google.com/file/d/1pvAJ83EWECcfZwEGFLobwDr6Wj9QUs_J/view",
        },
        {
            course: "UG Syllabus B.Tech First Year",
            link: "https://drive.google.com/file/d/1cVV-UIgrYRqzNQqN45SHIRhxqjnEAki2/view",
        },
    ];

    return (
        <>
            <div className="max-w-5xl mx-auto border rounded-lg shadow-md overflow-hidden">
                {courses.map((item, index) => (
                    <SyllabusComp key={index} course={item.course} link={item.link} />
                ))}
            </div>
        </>
    );
}

const DualDegreeSyllabus = () => {
    const courses = [
        {
            course: "Dual Degree in Manufacturing and Industrial Training First Year Syllabus (2025 onwards)",
            link: "https://drive.google.com/file/d/1uafY-S8oA_dDbVdxtJyQMtRlG7sZVVK8/view",
        },
        {
            course: "Dual Degree in Manufacturing and Industrial Training Course Structure (2025 onwards)",
            link: "https://drive.google.com/file/d/1Ju_AfZuxqMZ-wbnbBeMQhq8CW0GGc0wb/view",
        },
        {
            course: "Dual Degree in Manufacturing and Industrial Training Course Syllabus (2025 onwards)",
            link: "https://drive.google.com/file/d/1r5x8-UCpkzbiZxW4TqI-Kti3ePMk2u6G/view",
        },
        {
            course: "Dual Degree in Manufacturing and Industrial Training Course Structure (2022)",
            link: "https://drive.google.com/file/d/1L5qTBi_cuLJ0RhBPIRp6bYNb7jfQeI9d/view",
        },
        {
            course: "Dual Degree in Manufacturing and Industrial Training Course Syllabus (2022)",
            link: "https://drive.google.com/file/d/1qeKZ5b7lvsQivN7oXQmS8rOnt88qYIt0/view",
        },
    ];

    return (
        <>
            <div className="max-w-5xl mx-auto border rounded-lg shadow-md overflow-hidden">
                {courses.map((item, index) => (
                    <SyllabusComp key={index} course={item.course} link={item.link} />
                ))}
            </div>
        </>
    );
}



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


const syllabusMap = {
    "btech": {
        title: "B.Tech in Mechanical Engineering",
        content: <BTechSyllabus />,
    },
    "dual": {
        title: "B.Tech and M.Tech Dual Degree ",
        content: <DualDegreeSyllabus />,
    },
};

export default function SyllabusPage({ params }) {
    const { course } = params;
    const syllabus = syllabusMap[course];

    return (
        <div className="max-w-7xl mx-auto px-4 mt-10 text-center">
            <h1 className="text-3xl font-bold text-red-800 mb-6">
                {syllabus.title} – Syllabus
            </h1>
            {syllabus.content && (
                syllabus.content
            )}
        </div>
    );
}
