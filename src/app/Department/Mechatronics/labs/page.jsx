"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, UserCircle2 } from "lucide-react";

const carouselSlides = [
    { src: "/department/mechatronics/labs/carousel/image3.jpeg", alt: "Mechatronics Department" },
    { src: "/department/mechatronics/labs/carousel/image2.jpeg", alt: "Mechatronics Department" },
    { src: "/department/mechatronics/labs/carousel/image4.jpeg", alt: "Mechatronics Department" },
];

const mainLabSections = [
    {
        title: "Electronics Workshop",
        description: "The Electronics Workshop Laboratory provides practical exposure to the fundamentals of electronics, circuit design, testing, measurement, and troubleshooting. Students develop hands-on skills by assembling analog and digital circuits using modern test instruments. It supports experiments in semiconductor devices, operational amplifiers, and digital logic. The lab is equipped with advanced tools including digital oscilloscopes, arbitrary waveform generators, multi-output DC power supplies, soldering stations, and PCB prototyping tools, fostering practical learning and innovation.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1dqBweXQJQnWXGFDJj0iBclTGVwnoVg2O/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Electronics Workshop/image11.jpeg", alt: "Electronics Workshop 1" },
        //     { src: "/department/mechatronics/labs/Electronics Workshop/image14.jpeg", alt: "Electronics Workshop 2" }
        // ],
        align: "right",
    },
    {
        title: "Digital Electronics",
        description: "The Digital Electronics Laboratory provides practical knowledge of digital logic design, combinational and sequential circuits, and embedded hardware interfacing. Students verify fundamental concepts such as Boolean algebra, logic gates, multiplexers, flip-flops, and counters through hands-on experiments. The lab is well-equipped with digital trainer kits, programmable logic development platforms, logic analyzers, and FPGA/microcontroller boards, offering an excellent environment for designing, testing, and debugging modern digital systems.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1sud9KtQum_xS-aEYqPFMxX88TQEZnrb4/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Digital Electronics/image21.jpeg", alt: "Digital Electronics 1" },
        //     { src: "/department/mechatronics/labs/Digital Electronics/image22.jpeg", alt: "Digital Electronics 2" }
        // ],
        align: "left",
    },
    {
        title: "Fundamentals of Mechatronics and Autonomous Systems Lab",
        description: "This laboratory provides interdisciplinary hands-on training in mechatronics, robotics, additive manufacturing, and autonomous systems. It integrates mechanical systems, electronics, control engineering, AI, and digital manufacturing. Students gain practical experience in robotic manipulation, rapid prototyping, 3D printing, and smart automation. Advanced facilities include the xTerra Cobot C1, ADDVERB Industrial Robotic Arm, resin/FDM 3D printers, a laser cutting machine, and quadcopter drones, making it an excellent platform for Industry 4.0 applications.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1Ek_JBx2t7mt-m4xHsaHVaRXg7lydNRiP/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Fundamentals of Mechatronics and Autonomous Systems Lab/image23.jpeg", alt: "Cobot C1" },
        //     { src: "/department/mechatronics/labs/Fundamentals of Mechatronics and Autonomous Systems Lab/image26.png", alt: "3D Printer" }
        // ],
        align: "right",
    },
    {
        title: "Mechatronic Systems: Design, Modeling and Simulation",
        description: "This laboratory provides a comprehensive understanding of the modeling, analysis, simulation, and design of mechatronic systems using computational tools. It emphasizes the integration of mechanical, electrical, control, and computer engineering principles. Students develop mathematical models, simulate dynamic behaviors, and validate control strategies using the SciLab XCOS environment. Key learning areas include transfer function analysis, sensor/actuator modeling, DC motor modeling, and PID controller design.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/109uqJh50561qc9BOcaonyuLuM7mJuVOF/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Mechatronic Systems Design Modeling and Simulation/image35.png", alt: "Design, Modeling and Simulation 1" },
        //     { src: "/department/mechatronics/labs/Mechatronic Systems Design Modeling and Simulation/image36.png", alt: "Design, Modeling and Simulation 2" }
        // ],
        align: "left",
    },
    {
        title: "Actuators, Drives, and PLCs",
        description: "The Actuators, Drives, and PLC Laboratory imparts practical knowledge of industrial automation, programmable logic controllers, electro-pneumatic systems, and motor drives. Students gain hands-on experience in ladder logic programming, relay logic, HMI-based monitoring, and sequential control. The lab is equipped with FATEK PLCs, HMI training kits, pneumatic solenoid valves, and industrial sensors, developing crucial skills for Industry 4.0 and advanced manufacturing.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1mMnqk1aKjVOrGWdrU4o2pdgMyMm4BR8-/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Actuators Drives and PLCs/image41.jpeg", alt: "Actuators, Drives, and PLCs 1" },
        //     { src: "/department/mechatronics/labs/Actuators Drives and PLCs/image42.png", alt: "Actuators, Drives, and PLCs 2" }
        // ],
        align: "right",
    },
    {
        title: "Fluid Power Systems for Industrial Automation",
        description: "This laboratory provides practical knowledge of pneumatic and hydraulic systems used in modern industrial automation. Students gain hands-on experience designing, assembling, and troubleshooting pneumatic circuits using industry-standard components. Equipped with the Janatics Pneumatic Trainer Kit, the lab features pneumatic cylinders, directional and flow control valves, and electro-pneumatic modules. It enables experiments in sequential control, actuator force regulation, PLC interfacing, and factory automation.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1qdsQBRKIMnyaYoWVm0R3bYGL2E5qqahG/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Fluid Power Systems for Industrial Automation/image43.jpeg", alt: "Fluid Power Systems 1" },
        //     { src: "/department/mechatronics/labs/Fluid Power Systems for Industrial Automation/image44.jpeg", alt: "Fluid Power Systems 2" }
        // ],
        align: "left",
    },
    { 
        title: "Sensor Technologies for Mechatronics and Automation Systems",
        description: "This laboratory offers comprehensive practical knowledge of sensing technologies, measurement systems, signal conditioning, and sensor interfacing for modern automation. Students learn the operating principles and calibration of industrial sensors for temperature, displacement, and pressure. Equipped with trainer kits for Thermocouples, RTDs, LVDTs, and load cells, along with a 37-in-1 sensor kit and embedded platforms, the lab prepares students for real-world applications in robotics, IoT, and intelligent manufacturing.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1s7UzMUEEqh54lUgkXGGF25XwEps0ZSRv/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Sensor Technologies for Mechatronics and Automation Systems/image45.jpeg", alt: "Sensor Technologies 1" },
        //     { src: "/department/mechatronics/labs/Sensor Technologies for Mechatronics and Automation Systems/image46.jpeg", alt: "Sensor Technologies 2" }
        // ],
        align: "right",
    },
    {
        title: "Microprocessors and Microcontrollers",
        description: "This laboratory provides practical knowledge of microprocessor and microcontroller architecture, programming, interfacing, and embedded system development. Students explore fundamental concepts such as instruction execution, memory organization, interrupt handling, and real-time control. Equipped with 8086 and 8051 trainer kits, as well as digital I/O interfacing modules, the lab supports hands-on experiments in assembly language programming and hardware design for advanced automation and IoT systems.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1U3YRzB2wzFPTnex9a2LsYpOwckBxEQMl/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Microprocessors and Microcontrollers/image50.jpeg", alt: "Microprocessors 1" },
        //     { src: "/department/mechatronics/labs/Microprocessors and Microcontrollers/image51.jpeg", alt: "Microprocessors 2" }
        // ],
        align: "left",
    },
    {
        title: "Control of Mechatronic Systems",
        description: "The Control Systems Laboratory imparts practical knowledge of the analysis, modeling, simulation, and design of linear and nonlinear control systems. Students perform experiments on closed-loop systems, time response analysis, and PID controller design while investigating stability using Root Locus and Bode plots. Utilizing SciLab/XCOS for modeling, alongside Arduino/ESP32 boards and the NVIDIA Jetson AGX Orin Developer Kit with LiDAR, the lab provides a strong foundation for intelligent robotics and autonomous systems.",
        attachments: [{ label: "Details of equipment", href: "https://drive.google.com/file/d/1lNIsVonOXNcoiwx1Gt1LOXe4HI6JFxdN/view?usp=sharing" }],
        // images: [
        //     { src: "/department/mechatronics/labs/Control of Mechatronic Systems/image52.png", alt: "Control of Mechatronic Systems 1" },
        //     { src: "/department/mechatronics/labs/Control of Mechatronic Systems/image54.png", alt: "Control of Mechatronic Systems 2" }
        // ],
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

                {imageList.length > 0 ? (
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

export default function MechatronicsLabsPage() {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (carouselSlides.length === 0) return;
        const interval = setInterval(() => {
            setActiveSlide((current) => (current + 1) % carouselSlides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const previousSlide = () => {
        if (carouselSlides.length === 0) return;
        setActiveSlide((current) => (current === 0 ? carouselSlides.length - 1 : current - 1));
    };

    const nextSlide = () => {
        if (carouselSlides.length === 0) return;
        setActiveSlide((current) => (current + 1) % carouselSlides.length);
    };

    return (
        <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(243,244,246,0.92))] px-4 pb-10 pt-6 sm:px-8 lg:px-6">
            <div className="mx-auto w-full max-w-7xl">
                <div className="mb-8 text-center">
                    <h1 className="mt-3 text-3xl font-black tracking-tight text-red-900 sm:text-5xl">Labs</h1>
                </div>

                {carouselSlides.length > 0 && (
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
                )}

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
