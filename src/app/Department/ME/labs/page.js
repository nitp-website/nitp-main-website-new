"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, UserCircle2, ExternalLink } from "lucide-react";


const carouselSlides = [
    { src: "/department/me/labs/images/Fitting_Shop/img_0.jpg", alt: "Fitting Shop" },
    { src: "/department/me/labs/images/Internal_Combustion_Engine_Lab/img_0.jpeg", alt: "Internal Combustion Engine Lab" },
    { src: "/department/me/labs/images/Machine_Shop/img_0.jpg", alt: "Machine Shop" },
    { src: "/department/me/labs/images/Carpentry_Shop/img_0.jpg", alt: "Renewable Energy Lab" },
    // { src: "/department/me/labs/images/RAC_LAB/img_0.jpg", alt: "RAC Lab" },
];

const mainLabSections = [
    {
        title: "Strength of Materials Lab",
        pi: "Dr. Sharifuddin Mondal",
        description: "Strength of Materials Lab is equipped with a variety of instruments dedicated to the mechanical behavior of various materials and samples. The laboratory provides an excellent platform to the undergraduate and postgraduate students to investigate the material properties such as Hardness, Toughness, torsion, fatigue, Tensile Strength, spring properties etc. This laboratory is dedicated to undergraduate and postgraduate students for the laboratory courses.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1u82TDotDRgBxJqDJ_PwbVa2vs8jI5QzZ/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/SOM_Lab_Cover_page/img_0.jpeg", alt: "Strength of Materials Lab 2" }
        ],
        align: "right"
    },
    {
        title: "Internal Combustion Engine Lab",
        pi: "Dr. Anmesh Kumar Srivastava",
        description: "The Internal Combustion Engine (I.C. Engine) Laboratory provides practical guidance for operating and conducting experiments on I.C. engines. The I.C. Engine Lab has experimental facilities to promote teaching, research, and innovation in the area of I.C. engines. The laboratory enables undergraduate, postgraduate and research scholars to get hands-on experience with I.C engines. Students also learn about the working principles, operation and how to conduct performance tests on I.C. engines. The lab consists of cut section model of C.I. engine, valve timing diagram setup, single cylinder and multi cylinder engine test setups for experimental study. This lab provides students with a thorough understanding of important concepts and prepares them for successful careers in the automotive and energy sectors.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1aCDDpzjqOY14sobRgmvvMkAeOwVCNq5z/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Internal_Combustion_Engine_Lab/image.jpeg", alt: "Internal Combustion Engine Lab 1" },
            { src: "/department/me/labs/images/Internal_Combustion_Engine_Lab/image2.jpeg", alt: "Internal Combustion Engine Lab 2" }
        ],
        align: "left"
    },
    {
        title: "Engine Testing Lab",
        pi: "Dr. Anmesh Kumar Srivastava",
        description: "Engine Testing Laboratory provides a facility for undergraduate, postgraduate, and research scholars to engage in experimental research in the areas of internal combustion (I.C.) engine performance, emission and combustion analysis. The testing and performance analysis of compression ignition (C.I.) engine and spark ignition (S.I.) engine under various operating conditions can be conducted in the laboratory. Exhaust Gas Measuring system measures the emissions such as CO, CO2, HC, NOx and smoke present in the engine exhaust. For measurement and analysis equipments like universal engine test bed, eddy current dynamometers, exhaust gas analyser, smoke meter, coolant conditioning system and computerised data acquisition systems are used.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/169-BsYlsTzt6peFSN0FAAZVVOpECTtqd/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Engine_Testing_Lab/img_0.png", alt: "Engine Testing Lab 1" },
        ],
        align: "right"
    },
    {
        title: "Heat and Mass Transfer Lab",
        pi: "Dr. Tanmoy Mondal",
        description: "The Heat and Mass Transfer Laboratory provides experimental facilities for undergraduate and postgraduate teaching in heat and mass transfer. The laboratory enables students to investigate fundamental modes of heat transfer, including conduction, natural and forced convection, and thermal radiation, along with heat exchanger performance and phase-change heat transfer. The experiments provide hands-on experience in temperature measurement, heat-transfer coefficient determination, thermal conductivity evaluation, fin performance analysis, and heat exchanger performance evaluation.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1AdLyydxNHJ4Fa7437jw90q60PCcYNGiM/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/web_page_HMT_lab_final/img_1.jpg", alt: "Heat and Mass Transfer Lab 2" }
        ],
        align: "left"
    },
    {
        title: "Applied Thermodynamics Lab",
        pi: "Dr. Md. Qaisar Raza",
        description: "The Applied Thermodynamics Laboratory provides students with practical knowledge of thermodynamic principles and their applications in thermal engineering systems. The laboratory is equipped with various experimental setups, including a fire-tube steam boiler, steam turbine, steam engine, and feed pump, which help students understand the working, construction, and performance of thermal equipment. It also has a real Cochran Boiler. Moreover, the lab features cut-section models of different boilers and steam engine components to aid in visual learning.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1xlBVYHeUMeGWVpeCHb4wvYaqiMAVkRQK/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Applied_Thermodynamics_Lab/img_0.jpeg", alt: "Applied Thermodynamics Lab 1" },
            { src: "/department/me/labs/images/Applied_Thermodynamics_Lab/img_1.jpeg", alt: "Applied Thermodynamics Lab 2" }
        ],
        align: "right"
    },
    {
        title: "Refrigeration and Air Conditioning Lab",
        pi: "Dr. Ravi Kumar",
        description: "The Refrigeration and Air-Conditioning (RAC) Laboratory is equipped with modern experimental facilities to support teaching, research, and innovation in refrigeration, air conditioning, and heat transfer systems. The laboratory caters to the academic and research needs of undergraduate (B.Tech.), postgraduate (M.Tech.), and Ph.D. scholars by providing hands-on experience with state-of-the-art experimental setups. The laboratory enables students to understand the principles of vapour compression and absorption refrigeration systems, thermoelectric cooling, heat exchangers, cooling towers, vortex tubes, and air-conditioning systems through practical experimentation. It also facilitates research in thermal system performance analysis, energy efficiency, and eco-friendly refrigerants.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1uw08BygbJ-JhuNTl366KwdQ5KKi3Yub_/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/RAC_LAB/img_1.jpg", alt: "Refrigeration and Air Conditioning Lab 2" }
        ],
        align: "left"
    },
    {
        title: "Fuel Cell Lab",
        pi: "Dr. Achinta Sarkar",
        description: "The Fuel Cell Laboratory provides a dedicated platform for hands-on learning, experimentation, and research in hydrogen energy and fuel cell technology, with particular emphasis on Proton Exchange Membrane (PEM) fuel cells. The laboratory is equipped with a 1000 W PEM fuel cell stack comprising 72 cells, an integrated air-supply fan, a metal-hydride hydrogen storage system, pressure regulators, and a dedicated control interface and software for system operation and data acquisition. The facility enables students and researchers to study the fundamental operating principles of PEM fuel cells and experimentally evaluate important performance parameters such as power density, polarization characteristics, and fuel-cell efficiency under different operating conditions. It serves as a bridge between electrochemical energy-conversion theory and practical hydrogen-based power generation, fostering technical competence and research innovation.",
        // attachments: [
        //     { label: "Details of equipment", href: "PASTE_DRIVE_LINK_HERE" }
        // ],
        images: [
            { src: "/department/me/labs/images/Fuel_Cell_Lab/img_0.png", alt: "Fuel Cell Lab" }
        ],
        align: "right"
    },
    {
        title: "Renewable Energy Lab",
        pi: "Dr. Achinta Sarkar",
        description: "The Renewable Energy Laboratory provides a comprehensive platform for hands-on learning, experimentation, and research in sustainable energy technologies, with a strong focus on solar and wind energy systems. The laboratory is equipped with a Wind Energy Training System, Wind Emulator, Solar Thermal Training System, Insight Solar PV Training and Research Kit, Thermal Energy Storage System, and Solar Grid-Tied Training System, enabling students and researchers to explore energy conversion, generation, storage, and grid integration. A range of precision measuring instruments, including a pyranometer, solar power meter, magnetic base angle finder, and anemometer, further supports experimental investigation, performance evaluation, and data-driven analysis. The laboratory serves as a bridge between theoretical knowledge and practical applications, fostering technical competence and research skills in renewable and sustainable energy technologies.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/10oYRnl2dzqwQb2InMVX7twtvFADvgm8P/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Renewable_Energy_Laboratory/img_0.png", alt: "Renewable Energy Lab 1" },
            { src: "/department/me/labs/images/Renewable_Energy_Laboratory/img_1.jpeg", alt: "Renewable Energy Lab 2" }
        ],
        align: "left"
    },
];

const mainWorkshopSections = [
    {
        title: "Central Workshop",
        pi: "Dr. Anil Kumar Das",
        description: "The Workshop Practice Laboratory provides first-year B.Tech. Students with hands-on training in fundamental manufacturing and fabrication processes. It serves as the foundation of engineering education by bridging theoretical concepts with practical skills. The laboratory is equipped with dedicated sections for Machine Shop, Welding Shop, Carpentry Shop, Fitting Shop, and Black Smithy Shop. Through practical exercises, students learn essential manufacturing techniques, safe handling of tools, and develop the confidence required for industrial environments.",
        attachments: [],
        images: [],
        align: "left"
    },
    {
        title: "Machine Shop",
        pi: "Dr. Vikas Upadhyay",
        description: "The Machine Shop introduces students to conventional machining operations used in manufacturing industries. Students learn the working principles, operation, and safety aspects of various machine tools and gain practical knowledge of material removal processes.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/13cE23wVw6r0pqOCcWN4B7VEufk7yI1oz/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Machine_Shop/img_0.jpg", alt: "Machine Shop 1" },
            { src: "/department/me/labs/images/Machine_Shop/img_1.jpg", alt: "Machine Shop 2" }
        ],
        align: "right"
    },
    {
        title: "Welding Shop",
        pi: "Dr. Anupam Das",
        description: "The Welding Shop provides practical training in permanent joining processes used in manufacturing, fabrication, construction, and automotive industries. Students learn different welding techniques along with safety practices and quality inspection.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1l3Fjhrg2N2Hlor-Z6N7zVyXqIVQ7Z6w4/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Welding_Shop/img_1.jpg", alt: "Welding Shop 2" }
        ],
        align: "left"
    },
    {
        title: "Carpentry Shop",
        pi: "Dr. Vikas Kumar Choubey",
        description: "The Carpentry Shop familiarizes students with woodworking tools, timber processing, and wood joint preparation. The laboratory develops accuracy, measurement skills, and craftsmanship through practical exercises.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1_sISW9Nn2O9Nd-dSwJzdoh56ct4REu3c/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Carpentry_Shop/img_1.jpg", alt: "Carpentry Shop 2" }
        ],
        align: "right"
    },
    {
        title: "Fitting Shop",
        pi: "Dr. Abhishek Singh",
        description: "The Fitting Shop develops precision engineering skills through manual operations such as filing, cutting, drilling, threading, and assembly. Students learn the importance of dimensional accuracy and tolerance in manufacturing.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1dYlqu8QMjTQHprqZ0_BcXohejZJRWZxe/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Fitting_Shop/img_0.jpg", alt: "Fitting Shop 1" },
        ],
        align: "left"
    },
    {
        title: "Black Smithy Shop",
        pi: "Dr. Sonu Rajak",
        description: "The Black Smithy Shop introduces students to traditional metal forging processes used for shaping metals through heating and hammering. The laboratory helps students understand material behavior at elevated temperatures and basic forging operations.",
        attachments: [
            { label: "Details of equipment", href: "https://drive.google.com/file/d/1AwYZAl0t0Pv0Wow7ERulHAvtf-yGBhcq/view?usp=drive_link" }
        ],
        images: [
            { src: "/department/me/labs/images/Blacksmithy_Shop/img_1.jpg", alt: "Black Smithy Shop 2" }
        ],
        align: "right"
    }
];

function LabSection({ title, pi, description, attachments, align = "right", groups, images }) {
    const isImageLeft = align === "left";
    const imageList = images?.length ? images : [];

    return (
        <section className="mb-12 rounded-3xl border border-red-100 bg-white/90 shadow-[0_18px_50px_rgba(127,29,29,0.08)] backdrop-blur-sm">
            <div className={`grid gap-8 px-5 py-6 sm:px-8 sm:py-6 lg:px-10 lg:py-8 ${imageList.length ? `lg:grid-cols-[1.15fr_0.85fr] ${isImageLeft ? "lg:[direction:rtl]" : ""}` : "grid-cols-1"}`}>
                <div className={`space-y-4 ${isImageLeft && imageList.length ? "lg:[direction:ltr]" : ""}`}>
                    {title && <h3 className="text-2xl font-bold text-red-900 sm:text-3xl">{title}</h3>}
                    
                    {pi && (
                        <div className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-800 shadow-sm">
                            <UserCircle2 className="mr-2 h-5 w-5 text-red-600" />
                            PI: {pi}
                        </div>
                    )}
                    
                    {description && <p className="whitespace-pre-line text-justify text-sm leading-7 text-slate-700 sm:text-base pt-2">{description}</p>}
                    
                    {attachments?.length ? (
                        <div className="flex flex-wrap gap-3 pt-2">
                            {attachments.map((attachment) => (
                                <a
                                    key={attachment.label}
                                    href={attachment.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center rounded-md border border-red-800 px-4 py-2 text-sm font-medium text-red-800 transition hover:bg-red-800 hover:text-white"
                                >
                                    <Download size={14} className="mr-2" />
                                    {attachment.label}
                                </a>
                            ))}
                        </div>
                    ) : null}

                    {groups?.length ? (
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                            {groups.map((group) => (
                                <div
                                    key={group.title}
                                    className="rounded-2xl border border-rose-100 bg-rose-50/60 px-4 py-4 text-sm font-medium leading-6 text-slate-700 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                                >
                                    <span>{group.title}</span>
                                    {group.href && (
                                        <a href={group.href} target="_blank" rel="noreferrer" className="text-red-700 hover:text-red-900 transition flex items-center gap-1 shrink-0">
                                            <span className="text-xs">View</span>
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>

                {imageList.length ? (
                    <div className={`flex items-center justify-center ${isImageLeft ? "lg:[direction:ltr]" : ""}`}>
                        <div className={`grid w-full gap-4 ${imageList.length > 1 ? "sm:grid-cols-2" : ""}`}>
                            {imageList.map((item) => (
                                <div key={item.src} className="relative w-full overflow-hidden rounded-2xl border border-red-100 bg-rose-50 shadow-lg">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={700}
                                        height={500}
                                        className="h-[240px] w-full object-cover sm:h-[300px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    );
}

export default function MELabsPage() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % carouselSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const previousSlide = () => {
        setActiveSlide((current) => (current === 0 ? carouselSlides.length - 1 : current - 1));
    };

    const nextSlide = () => {
        setActiveSlide((current) => (current + 1) % carouselSlides.length);
    };

    return (
        <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(243,244,246,0.92))] px-4 pb-10 pt-6 sm:px-8 lg:px-6">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 text-center">
                    <h1 className="mt-3 text-3xl font-black tracking-tight text-red-900 sm:text-5xl">Labs</h1>
                </div>

                <div className="mb-10 overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_24px_70px_rgba(127,29,29,0.14)]">
                    <div className="relative h-[260px] sm:h-[360px] lg:h-[470px]">
                        <Image
                            src={carouselSlides[activeSlide].src}
                            alt={carouselSlides[activeSlide].alt}
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                        <button
                            type="button"
                            onClick={previousSlide}
                            aria-label="Previous slide"
                            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/65"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            type="button"
                            onClick={nextSlide}
                            aria-label="Next slide"
                            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/65"
                        >
                            <ChevronRight size={28} />
                        </button>

                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                            <div className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-white backdrop-blur-sm sm:px-5">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-white/70">
                                        Image {activeSlide + 1} of {carouselSlides.length}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    {carouselSlides.map((slide, index) => (
                                        <button
                                            key={slide.src}
                                            type="button"
                                            onClick={() => setActiveSlide(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                            className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/60"}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-extrabold text-red-900 mt-8 mb-8 border-b-2 border-red-100 pb-2">Our Laboratories:</h2>

                    {mainLabSections.map((section) => (
                        <LabSection key={section.title} {...section} />
                    ))}
                    
                    <h2 className="text-3xl font-extrabold text-red-900 mt-16 mb-8 border-b-2 border-red-100 pb-2">Our Workshops:</h2>
                    
                    {mainWorkshopSections.map((section) => (
                        <LabSection key={section.title} {...section} />
                    ))}
                </div>
            </div>
        </div>
    );
}
