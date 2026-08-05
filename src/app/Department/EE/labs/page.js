
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, UserCircle2, Download } from "lucide-react";

const carouselSlides = [
    { src: "/department/ee/ai.png", alt: "Electrical Engineering Labs" },
    { src: "/eelab1.jpg", alt: "Electrical Engineering Labs" },
    { src: "/eelab2.jpg", alt: "Electrical Engineering Labs" },
    { src: "/eelab3.jpg", alt: "Electrical Engineering Labs" },
    { src: "/eelab4.jpg", alt: "Electrical Engineering Labs" }
];
  
const mainLabSections = [
    {
        title: "Advanced Instrumentation Lab",
        documentLink: "https://drive.google.com/file/d/1p6jIwOlfCfHUi7HaRPtLEfaECbKFAY3Z/view?usp=sharing",
        description: "The Advanced Instrumentation Laboratory supports postgraduate coursework and research in computer-based instrumentation, data acquisition, and signal processing using LabVIEW. It is equipped with National Instruments DAQ cards and a wide range of test and measurement instruments for signal generation, acquisition, and analysis. The lab also serves as a research facility for developing advanced measurement systems, such as portable electronic tongues for quality assessment and general-purpose potentiostats.",
        images: [
            { src: "/department/ee/ai.png", alt: "Electrical Engineering Labs" },
        ],
        align: "right"
    },
    {
        title: "Electrical Measurement and Instrumentation Laboratory",
        documentLink: "https://drive.google.com/file/d/18eX8lb389-EwO9Snbrcn_-suXSMJO6oe/view?usp=sharing",
        description: "The Electrical Measurement and Instrumentation Laboratory provides comprehensive practical knowledge of electrical measurement techniques, instrumentation systems, bridge circuits, transducers, sensors, and calibration methods. Students perform experiments to measure various electrical parameters using both conventional bridge methods and modern electronic instrumentation like DSOs, CROs, and LVDT-based systems. It helps students bridge theoretical concepts with hands-on experimentation, preparing them for careers in industrial automation and advanced research.",
        images: [],
        align: "left"
    },
    {
        title: "Elements of Electrical Engineering Lab",
        documentLink: "https://drive.google.com/file/d/1lE-PSlT3zL79B5mkZxBxsd8m9BzNrwly/view?usp=sharing",
        description: "The Elements of Electrical Engineering Lab is an introductory laboratory course that builds the foundation of electrical engineering for first-semester students. It familiarizes students with basic components such as resistors, capacitors, and inductors, along with AC and DC supply systems. Students are trained to use common measuring instruments like voltmeters, ammeters, wattmeters, and CROs for practical observation. Through experiments on circuit laws, electrical measurements, and machine basics, students learn how electrical quantities behave in real systems, bridging theoretical concepts with application.",
        images: [
            { src: "/eelab1.jpg", alt: "Elements of Electrical Engineering Lab" }
        ],
        align: "right"
    },
    {
        title: "Industrial Drives and Control Laboratory",
        documentLink: "https://drive.google.com/file/d/1YECGTlVADO1XjrSM-0Y1_NiqmXgSOCL0/view?usp=sharing",
        description: "The Industrial Drives and Control Laboratory gives students hands-on experience with industrial motor drives and their control systems. It supports experiments related to AC and DC motor drives, thyristor-based control, chopper-fed DC motors, inverter-fed induction motors, V/f control, and braking methods. Outfitted with modern training setups such as PC/PLC-based drive systems and simulation tools, it helps students connect classroom theory with industrial practice.",
        images: [],
        align: "left"
    },
    {
        title: "Microprocessor and Microcontroller Laboratory",
        documentLink: "https://drive.google.com/file/d/1L2V_vSrXLwTyptEPLFq_5obFoLM-Q8SN/view?usp=sharing",
        description: "The Microprocessor and Microcontroller Laboratory is equipped with trainer kits, breadboard-based experimental setups, and peripheral interface modules that enable students to gain hands-on experience in programming and interfacing. Students perform experiments on the 8086 microprocessor and 8051 microcontroller using assembly language and C programming. The facility emphasizes bare-metal hardware programming, empowering students to develop practical skills in hardware implementation and low-level software design.",
        images: [
            { src: "/department/ee/micro1.png", alt: "Electrical Engineering Labs" },
            { src: "/department/ee/micro2.png", alt: "Electrical Engineering Labs" },

        ],
        align: "right"
    },
    {
        title: "Power System Protection Lab",
        documentLink: "https://drive.google.com/file/d/1i1oemj0JkodN-C96PLpm_EXRxuMuqR79/view?usp=sharing",
        description: "The Power System Protection (PSP) Laboratory provides hands-on training and practical exposure to various power system protection schemes. It houses dedicated hardware training setups for studying CT characteristics, directional overcurrent relay characteristics, transmission line distance protection, and differential protection. The laboratory is also equipped with modern numerical relays and simulation platforms, allowing students to study, analyze, and test different protection techniques comprehensively.",
        images: [],
        align: "left"
    },
    {
        title: "Power System Laboratory",
        documentLink: "https://drive.google.com/file/d/11pupIU1dJ4aU0YwkLLPvVFM0EC94ibiS/view?usp=sharing",
        description: "The Power System Engineering Laboratory integrates advanced simulation platforms with hands-on experimental hardware, providing practical exposure to modern electrical power systems. Equipped with industry-standard software like PowerWorld Simulator and MATLAB/Simulink, it allows students to study power flow, fault analysis, voltage stability, and renewable energy integration. The lab also features various hardware setups to validate theoretical models, preparing students for careers in power utilities and research.",
        images: [
            { src: "/department/ee/powerS.png", alt: "Electrical Engineering Labs" },
        ],
        align: "right"
    },
    {
        title: "Power Electronics Laboratory",
        documentLink: "https://drive.google.com/file/d/1Qk8ySt2sJREWqgHDSbL81hNu-x51Guh3/view?usp=sharing",
        description: "The Power Electronics Laboratory is a dedicated teaching and research facility for the study of power semiconductor devices, converters, and drive systems. It provides students with hands-on exposure to device characterization, controlled power conversion circuits, and motor drive control techniques. The lab also actively supports advanced project work and research in areas like renewable-energy interfacing and power quality improvement.",
        images: [],
        align: "left"
    },
    {
        title: "Electrical Machines Lab",
        description: "Students learn about different types of electrical machines, their construction, operation, and performance characteristics through experiments and demonstrations.",
        images: [
            { src: "/eelab2.jpg", alt: "Electrical Machines Lab" }
        ],
        align: "right"
    },
    {
        title: "Computer Lab",
        description: "The computer lab is equipped for simulation, analysis, and design of electrical systems using specialized software tools.",
        images: [],
        align: "left"
    },
    {
        title: "Network Theory Lab",
        description: "This lab helps students understand network theorems, circuit analysis, and synthesis through practical experiments.",
        images: [],
        align: "right"
    },
    {
        title: "Control System Lab",
        description: "Experiments in this lab involve modeling, analysis, and design of control systems using hardware and simulation tools.",
        images: [],
        align: "left"
    },
    {
        title: "High Voltage Lab",
        description: "This lab provides facilities for testing and studying high voltage phenomena, insulation, and breakdown mechanisms.",
        images: [],
        align: "right"
    },
    {
        title: "SCADA Lab",
        description: "Supervisory Control and Data Acquisition (SCADA) systems are studied and implemented for monitoring and controlling electrical networks.",
        images: [],
        align: "left"
    },
];

function LabSection({ title, pi, description, images, align = "right", groups, documentLink }) {
    const isImageLeft = align === "left";
    const imageList = images || [];

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
                    {documentLink && (
                        <div className="pt-4">
                            <a 
                                href={documentLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-800 bg-white px-6 py-2.5 text-sm font-medium text-red-800 transition-colors hover:bg-red-50 md:w-auto md:inline-flex"
                            >
                                <Download className="h-4 w-4" />
                                Details of equipment
                            </a>
                        </div>
                    )}

                    
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

export default function EELabsPage() {
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
