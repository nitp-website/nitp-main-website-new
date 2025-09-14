import React from "react";


const BTechSyllabus = () => {
    const courses = [
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
    ];

    return (
        <>
            <div className="max-w-3xl mx-auto border rounded-lg shadow-md overflow-hidden">
                {courses.map((item, index) => (
                    <SyllabusComp key={index} course={item.course} link={item.link} />
                ))}
            </div>
        </>
    );
}

const MTechPowerDSSyllabus = () => {
    const courses = [
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
    ];

    return (
        <>
            <div className="max-w-3xl mx-auto border rounded-lg shadow-md overflow-hidden">
                {courses.map((item, index) => (
                    <SyllabusComp key={index} course={item.course} link={item.link} />
                ))}
            </div>
        </>
    );
}

const MTechCSESyllabus = () => {
    const courses = [
        // {
        //     course: "M.Tech (Intelligent Transport Systems) Course structure and Syllabus",
        //     link: "https://drive.google.com/file/d/1pES5tBVykgQJWu2TFNKkR-0BwrF5wtrW/view?usp=sharing",
        // },
        {
            course: "M.Tech (Control System Engg and Power System Engg) Course structure",
            link: "https://drive.google.com/file/d/1HOzQYLI-96kpv4gT9NDoKqLItHsALVzS/view",
        },
        {
            course: "M.Tech- Control System Engg and Power System Engg) Syllabus",
            link: "https://drive.google.com/file/d/1xnaep1qftT-n8RMVEyTYXk-ASqBFcLAK/view",
        },
    ];

    return (
        <>
            <div className="max-w-3xl mx-auto border rounded-lg shadow-md overflow-hidden">
                {courses.map((item, index) => (
                    <SyllabusComp key={index} course={item.course} link={item.link} />
                ))}
            </div>
        </>
    );
}

const PhDSyllabus = () => {
    const courses = [
        {
            course: "Ph.D. in Electrical Engineering",
            link: "https://drive.google.com/file/d/1KdqphtQwIuWrC_gdYxjuAcG9TaxaUVf-/view",
        },
    ];

    return (
        <>
            <div className="max-w-3xl mx-auto border rounded-lg shadow-md overflow-hidden">
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
        title: "B.Tech in Electrical Engineering",
        content: <BTechSyllabus />,
    },
    "mtech-power": {
        title: "M.Tech in Power Systems Engineering",
        content: <MTechPowerDSSyllabus />,
    },
    "mtech-control": {
        title: "M.Tech in Control Systems Engineering",
        content: <MTechCSESyllabus />,
    },
    "phd": {
        title: "Ph.D. in Electrical Engineering",
        content: <PhDSyllabus />,
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
