"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, UserCircle2 } from "lucide-react";

const carouselSlides = [
    { src: "/department/civil/labs/Hydraulics and Water Resources Engineering Lab/image2.jpeg", alt: "Civil Engineering Labs" },
    { src: "/department/civil/labs/Environmental Engineering Lab/image2.jpeg", alt: "Civil Engineering Labs" },
    { src: "/department/civil/labs/Transportation Engineering Lab/image1.png", alt: "Civil Engineering Labs" },
    { src: "/department/civil/labs/Computational Lab/image3.jpeg", alt: "Civil Engineering Labs" },
    { src: "/department/civil/labs/Heavy Structure Laboratory/image2.jpeg", alt: "Civil Engineering Labs" },
];

const mainLabSections = [
    {
        title: "Transportation Engineering Lab",
        pi: "Dr. S.K. Suman",
        description:
            "The Transportation Engineering Laboratory is equipped to cater to the academic and research needs of undergraduate and postgraduate students, as well as research scholars, working in the areas of highway materials, pavement evaluation, and traffic systems. It bridges theoretical background and practical fieldwork to ensure the design of safe, durable, and cost-effective transportation infrastructure. This lab provides hands-on instruction in assessing material quality utilising the physical, chemical, and mechanical properties of aggregates and binders, including rheological properties, in accordance with regulatory engineering standards such as IS/IRC/MoRTH/ASTM/EN, among others. This facility also offers non-destructive in-situ testing to evaluate the quality of the pavement structure. This lab is well equipped with instruments for undergraduates, postgraduates, and research scholars. This section also offers research and consulting services to the industries.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1LIoW1A0UiHSYEnLa5VOELhFkcX98-qPi/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Transportation Engineering Lab/image1.png", alt: "Transportation Engineering Lab" }
        ],
        align: "right",
    },
    {
        title: "Surveying Lab",
        pi: "Dr. Gopikrishnan T",
        description:
            "Surveying is the first step of any engineering project, as it provides the essential spatial and topographical information required for planning, design, construction, and monitoring. Accurate surveying ensures that engineering structures are properly aligned, located, and executed according to design specifications. To impart strong practical knowledge and hands-on experience, the department has a well-equipped Surveying Laboratory with a comprehensive range of modern and conventional surveying instruments. The laboratory effectively supports undergraduate courses in surveying and enables students to understand both the theoretical concepts and practical applications of surveying techniques.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1Jrj8AJOGYkxaBnVId0Jx9uc-lqvACLIY/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Surveying Laboratory/image1.png", alt: "Surveying Laboratory 1" },
        ],
        align: "left",
    },
    {
        title: "Hydraulics and Water Resources Engineering Lab",
        pi: "Dr. Roshni T",
        description:
            "UG-LAB: The Undergraduate Water Resources Engineering Laboratory provides practical experience in the fundamental principles of hydraulics, hydrology, and fluid mechanics. The laboratory enables students to perform experiments related to flow measurement, hydraulic machines, rainfall measurement, evaporation, infiltration, and open channel hydraulics. It develops experimental skills and analytical abilities necessary for understanding water resources systems and hydraulic structures.\n\nPG-LAB: The Postgraduate Water Resources Engineering Laboratory offers training in advanced hydrological measurements and hydraulic analysis. The laboratory provides facilities to perform experiments on Hydraulic Jump, Hydraulic Hump, Current Meter, and Double Ring Infiltrometer. It also supports computational analysis and modelling using software such as MATLAB, CROPWAT, and Watershed Modelling System (WMS).",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1C8kkMTZLrJc8zAs-IIC4gsqTxdrFXiIK/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Hydraulics and Water Resources Engineering Lab/image2.jpeg", alt: "Hydraulics Lab 1" },
            { src: "/department/civil/labs/Hydraulics and Water Resources Engineering Lab/image3.jpeg", alt: "Hydraulics Lab 2" }
        ],
        align: "right",
    },
    {
        title: "Environmental Engineering Lab",
        pi: "Prof. N. S. Maurya",
        description:
            "The Environmental Engineering Laboratory provides practical exposure to the principles and techniques used for monitoring and protecting the environment. Students perform experiments related to water and wastewater quality analysis, air and noise pollution assessment, and environmental monitoring. The laboratory develops technical competence, analytical thinking, and problem-solving skills while emphasizing sustainable environmental practices. It bridges theoretical knowledge with real-world applications, enabling students to understand and address contemporary environmental challenges through scientific and engineering approaches.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1f5WARb7h5Ke1gzJOrhuZD-i6vNZYPvQo/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Environmental Engineering Lab/image2.jpeg", alt: "Environmental Engineering Lab 1" },
            { src: "/department/civil/labs/Environmental Engineering Lab/image4.jpeg", alt: "Environmental Engineering Lab 2" }
        ],
        align: "left",
    },
    {
        title: "Computational Lab",
        pi: "Dr. S S Kumar",
        description:
            "The Computational Lab of Civil Engineering Department, NIT Patna, facilitates the regular hands-on training sessions for UG program in order to integrate the computational modeling on industry-standard software like STADD Pro, Geo Studio and MATLAB. This computation facility also encourages the interdisciplinary research projects for MTech and PhD students that combine numerical modeling with experimental investigations using the high-performance computing resources and software such as GMS, WMS, PLAXIS, ABAQUS, and SAP2000. Overall, it helps to promote the collaborative research projects with industry and other academic institutions to expose students to real-world engineering challenges.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1g4cx9d3mJjIXfD-IR9TsLW-0U2-8peTZ/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Computational Lab/image3.jpeg", alt: "Computational Lab 2" }
        ],
        align: "right",
    },
    {
        title: "Cement Concrete Lab",
        pi: "Dr. Gyani Jail Singh",
        description:
            "The Cement Concrete Lab offers facilities for studying the characteristics and performance of concrete and its constituent ingredients. Students learn how to evaluate physical and mechanical properties of cement, aggregates, fresh and hardened concrete, as well as mix design processes. The lab provides support for undergraduate and postgraduate courses, as well as structural engineering research projects, ensuring quality control and innovation in modern construction techniques.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/14UPnNW63RgYoD6HHgzTZJcBZhsaqbO6u/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Cement Concrete Lab/image1.jpeg", alt: "Cement Concrete Lab" }
        ],
        align: "left",
    },
    {
        title: "Heavy Structure Lab",
        pi: "Dr. Govind Mohan",
        description:
            "Heavy Structure Laboratory is a specialized facility established to support teaching, research, and consultancy in structural engineering with a focus on the evaluation, monitoring, and performance assessment of civil engineering structures. The laboratory provides excellent facilities for undergraduate and postgraduate teaching, advanced research in earthquake engineering, structural health monitoring, durability assessment, non-destructive testing, rehabilitation of existing structures, and performance-based structural engineering. It is equipped with advanced testing and diagnostic instruments such as a 500 kN Servo Hydraulic Universal Testing Machine, an advanced Servo Hydraulic Shake Table, and an Ultrasonic Pulse Velocity (UPV) Testing Machine.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1F3mjyuR1UapAx4ydHCmOcoTrbaxsaV17/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Heavy Structure Laboratory/image2.jpeg", alt: "Heavy Structure Laboratory" }
        ],
        align: "right",
    },
    {
        title: "Material Testing Lab",
        pi: "Prof. S S Mishra",
        description:
            "UG Lab: The Material Testing Laboratory of the Civil Engineering Department is a well-equipped facility for experimental evaluation of the mechanical and physical properties of engineering materials. The laboratory provides students, researchers, and industry professionals with hands-on experience in conducting standardized material tests and understanding the behaviour of materials under various loading conditions. The laboratory is designed to support undergraduate, postgraduate, and research activities by enabling experimental investigations in material characterization, quality assessment, and structural performance. It also serves as a platform for consultancy services, industrial testing, and research projects in the fields of civil, mechanical, and materials engineering.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1L8XVcvuho4mqGQjMgwm8eL_WGGdXYP5b/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Material Testing Lab/image1.jpeg", alt: "Material Testing Lab" }
        ],
        align: "left",
    },
    {
        title: "Geotechnical Engineering Lab",
        pi: "Prof. (Dr.) Sunita Kumari",
        description:
            "The Geotechnical Engineering Laboratory is equipped with modern facilities to perform a wide range of basic characterization tests and advanced geotechnical investigations on soils, rocks, and other geomaterials. The laboratory provides comprehensive testing capabilities to determine the physical, chemical, engineering properties of geomaterials, as well as industrial by-products such as fly ash, bottom ash, slag, and recycled construction materials. These properties are essential for understanding the engineering behavior of geomaterials under different loading and environmental conditions.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1W4JEXcHKMsUNzu4jP78mf38CUVxfa58x/view?usp=sharing",
            }
        ],
        images: [
            { src: "/department/civil/labs/Geotechnical Engineering Laboratory/image1.png", alt: "Geotechnical Engineering Laboratory 1" },
            { src: "/department/civil/labs/Geotechnical Engineering Laboratory/image2.jpeg", alt: "Geotechnical Engineering Laboratory 2" }
        ],
        align: "right",
    }
];

function LabSection({ title, pi, description, image, imageAlt, attachments, align = "right", groups, images }) {
    const isImageLeft = align === "left";
    const imageList = images?.length ? images : image ? [{ src: image, alt: imageAlt || title }] : [];

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
                    
                    <p className="whitespace-pre-line text-justify text-sm leading-7 text-slate-700 sm:text-base pt-2">{description}</p>
                    {attachments?.length ? (
                        <div className="grid gap-3 sm:grid-cols-2 pt-2">
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
                                    key={group}
                                    className="rounded-2xl border border-rose-100 bg-rose-50/60 px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm"
                                >
                                    {group}
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

export default function CivilLabsPage() {
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
                </div>
            </div>
        </div>
    );
}