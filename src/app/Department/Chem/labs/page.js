'use client'
import Image from "next/image";
import React from "react";

// Content from the Chemistry file
const labsData = [
    {
        name: "Teaching Lab",
        description:
            "The Teaching Lab is equipped for undergraduate and postgraduate practicals in Chemical Science and Technology, supporting core and elective courses with modern instrumentation and safety features.",
        image: "/tl_01.jpg",
        content:[
            "Lab 9, B.Tech Lab (Engineering Chemistry Lab)",
            "Lab 8, Chemical Technology Lab (Dual Degree) and PhD teaching Lab (Synthesis and Purification)",
            "Instrument Lab",
            "Heat Transfer Lab and Fluid Flow Operation Lab"
        ]
    },
    // {
    //     name: "Instrument Lab",
    //     description:
    //         "The Instrument Lab houses advanced analytical instruments for research and teaching, including spectrometers, chromatographs, and other essential chemical analysis tools.",
    //     image: "/il_01.jpg",
    // },
    {
        name: "Research Lab",
        description:
            "The Research Lab supports faculty and student research projects in various areas of chemistry, providing facilities for synthesis, analysis, and advanced experimentation.",
        image: "/rl_01.jpg",
        content:[
            "Green Synthesis Lab (Dr. Tasneem Parvin)",
            "Applied Chemistry Lab (Dr. Subrata Das)",
            "Biophysical Chemistry Lab (Dr. Niki Sweta Jha)",
            "Inorganic Lab (Dr. Mukesh Choudhary)",
            "Supramolecular Materials Lab (Dr. Suvankar Dasgupta)",
            "Synthetic Research Lab (Dr. Khursheed Ahmad)"
        ]
    },
    // {
    //     name: "Applied Chemistry Lab (Dr. Subrata Das)",
    //     description:
    //         "Focuses on applied aspects of chemistry including industrial and environmental applications.",
    //     image: "",
    // },
    // {
    //     name: "Bioorganic Lab (Dr. Rima Thakur)",
    //     description:
    //         "Specializes in bioorganic synthesis and analysis, supporting research in biomolecules and organic chemistry.",
    //     image: "",
    // },
    // {
    //     name: "Biophysical Chemistry Lab (Dr. Niki Sweta Jha)",
    //     description:
    //         "Conducts research in the physical principles underlying chemical systems, including spectroscopy and thermodynamics.",
    //     image: "",
    // },
    // {
    //     name: "Green Synthesis Lab (Dr. Tasneem Parvin)",
    //     description:
    //         "Dedicated to environmentally friendly chemical synthesis and green chemistry methodologies.",
    //     image: "",
    // },
    // {
    //     name: "Inorganic Lab (Dr. Mukesh Choudhary)",
    //     description:
    //         "Focuses on synthesis and characterization of inorganic compounds and materials.",
    //     image: "",
    // },
    // {
    //     name: "Supramolecular Materials Lab (Dr. Suvankar Dasgupta)",
    //     description:
    //         "Researches supramolecular assemblies and advanced materials for various applications.",
    //     image: "",
    // },
    // {
    //     name: "Synthetic Research Lab (Dr. Khursheed Ahmad)",
    //     description:
    //         "Engaged in the synthesis of novel organic and inorganic compounds for research and teaching.",
    //     image: "",
    // },
];

// UI from the CSE file
function Page() {
    return (
        <div>
            <div className="py-1 mt-2">
                <div className="w-full px-5 xs:px-0 md:w-[90%] mx-auto">
                    <div className="w-full">
                        <h2 className="text-center text-4xl text-red-700 mt-2">LABS</h2>
                    </div>
                    <div className="w-full mt-4">
                        {labsData.map((lab, index) => (
                            <div
                                key={index}
                                className="mb-12 flex flex-col lg:flex-row items-center lg:items-start mx-auto text-center lg:text-left max-w-6xl"
                            >
                                <div className="lg:w-2/3">
                                    <p className="text-red-900 font-bold text-2xl mb-4">
                                        {lab.name}:
                                    </p>
                                    <p className="text-gray-700 text-sm leading-relaxed px-6 lg:px-0">
                                        {lab.description}
                                    </p>

                                    {lab.content && (
                                    <ul className="list-disc pl-6 mt-3 text-gray-700 text-sm">
                                        {lab.content.map((value, idx) => (
                                        <li key={idx} className="mb-1">
                                            {value}
                                        </li>
                                        ))}
                                    </ul>
                                    )}
                                </div>

                                {lab.image && (
                                    <div className="mt-6 lg:mt-0 lg:ml-8 flex justify-center">
                                        <Image
                                            src={lab.image}
                                            alt={lab.name}
                                            width={300}
                                            height={300}
                                            className="rounded-lg shadow-lg border border-gray-300 bg-rose-100 p-2"
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Page;