"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, UserCircle2 } from "lucide-react";

const carouselSlides = [
    { src: "/department/ece/labs/image-1.jpg", alt: "ECE labs" },
    { src: "/department/ece/labs/image-2.jpg", alt: "ECE labs" },
    { src: "/department/ece/labs/image-3.jpg", alt: "ECE labs" },
    { src: "/department/ece/labs/image-4.jpg", alt: "ECE labs" },
];
  
const mainLabSections = [
    {
        title: "Electronics Devices and Circuit Laboratory & Semiconductor Device Laboratory",
        description:
            "The Electronic Devices and Circuits (EDC) Laboratory at the National Institute of Technology Patna (Patna Campus) is a foundational laboratory that supports undergraduate teaching in the Department of Electronics and Communication Engineering. It primarily caters to the students of the Electronics and Communication Engineering (ECE) and Electrical Engineering (EE) programs through laboratory courses such as Elements of Electronics Engineering, Semiconductor Devices, and Electronics Workshop. The laboratory is designed to bridge the gap between theoretical concepts and practical implementation by providing hands-on training in semiconductor devices, analog electronic circuits, electronic measurements, and hardware design. Equipped with modern instruments and experimental setups, the laboratory enables students to develop fundamental skills in circuit analysis, electronic testing, troubleshooting, and prototyping, thereby establishing a strong foundation for advanced studies in electronics and related disciplines.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1w-lYg5_y5cc6hMjkigDZ4afkCa3bDI2k/view?usp=sharing", 
            }
        ],
        // groups: [
        //     "Digital Storage Oscilloscopes (DSOs)", "Function Generators", "Regulated DC Power Supplies", "Digital Multimeters", "Breadboards", "Soldering equipment", "Electronic components", "Hall effect apparatus/setup", "Study of PN junction and Energy band gap"
        // ],
        align: "right",
    },
    {
        title: "Digital Electronics Lab & Microprocessor & Microcontroller Lab",
        description:
            "The Digital Electronics and Microprocessor & Microcontroller Laboratory provides students with hands-on training in digital system design, embedded systems, and hardware implementation. The laboratory supports undergraduate courses by bridging theoretical concepts with practical applications through experiments in digital logic design, microprocessor programming, and microcontroller-based system development. Students gain practical experience in the design and analysis of combinational and sequential logic circuits, timing circuits, ADC/DAC interfacing, and digital circuit simulation using industry-standard software tools. The laboratory also offers comprehensive training in programming and interfacing with 8085/8086 microprocessors, 8051 microcontrollers, ARM-based controllers, and peripheral devices such as LCDs, keyboards, stepper motors, timers, counters, and communication interfaces. Equipped with modern embedded system development platforms including Arduino Leonardo, Raspberry Pi 5, ARM Cortex-M3, NVIDIA Jetson Nano, and the PYNQ FPGA Development Kit, the laboratory enables students to work on Internet of Things (IoT), embedded Linux, FPGA-based system design, Artificial Intelligence (AI), robotics, and intelligent edge computing. The laboratory fosters innovation through project-based learning and research, preparing students with the practical skills required for careers and advanced studies in digital electronics, embedded systems, computer architecture, VLSI, and smart technologies.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1WHHcEIVjI6XcPRSpjp3WiV2DHvK4hjXv/view?usp=sharing", // Add Google Drive link here
            }
        ],
        // groups: [
        //     "Microprocessor 8085 & 8086 Trainer Kits", "Microcontroller Trainer Kit (8051)", "ARM Processor Development Kit", "Microcontroller Flash Programmer (LT-1270)", "Various Interface Cards (8255, 8279, 8251, 8253, DMA-8257)", "DC Power Supply (Keysight)", "Digital Storage Oscilloscope (DSO)", "Desktop PCs", "Digital IC Trainer Kit", "Multiplexer/Demultiplexer Trainer Kits", "Flip-Flop & Shift Register Trainer Kits", "Binary Counter Trainer Kit", "Parity Generator and Checker Trainer Kit", "ADC / DAC Trainer Kits", "Astable Multivibrator Trainer Kit", "PID & PLC Controllers", "Traffic Light & Temperature Controllers using PLC", "Elevator Controller using PLC"
        // ],
        align: "left",
    },
    {
        title: "Digital Signal Processing Laboratory",
        description:
            "The Digital Signal Processing Laboratory provides students with hands-on experience in the analysis, processing, and implementation of digital signal processing (DSP) techniques. The laboratory supports undergraduate, postgraduate, and research activities by bridging theoretical concepts with practical applications through software simulation and real-time hardware implementation. The laboratory enables students to analyze discrete-time signals and systems, perform spectral analysis using Fourier and Z-transforms, and design and implement FIR and IIR digital filters. Students gain practical experience in real-time signal processing using DSP development platforms, MATLAB, Code Composer Studio (CCS), and Python. Equipped with high-performance computing systems, Digital Storage Oscilloscopes (DSOs), Texas Instruments TMS320C6xxx DSP development boards, programmable logic devices (PLDs), CCD cameras, biometric sensors, function generators, and industry-standard software tools, the laboratory facilitates experimentation in digital signal processing, embedded system design, and real-time algorithm development. The laboratory also supports project-based learning and research in telecommunications, biomedical signal processing, audio and speech processing, image and video processing, wireless communication, and intelligent signal analysis, preparing students for advanced studies and careers in signal processing and related technologies.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1jSiAnQ6GM1oAcaKwuae1Ql2bB-zddwRC/view?usp=sharing", // Add Google Drive link here
            }
        ],
        // groups: [
        //     "DSP Starter Kits: TMS320C-6416T, TMS320C6748", "DSP Processor Trainer Kit: TM5320C6713", "Digital Signal Oscilloscope & Mixed Signal Oscilloscope", "Waveform/Signal Generator", "Thermal Printer", "Spectrum Analyzer", "ARM Cortex M3 kit: LPC1768", "Educational Practice board for TMS320C6748", "Finger Print Sensor & RFID Interfacing Kits", "General Purpose IO Board", "WIFI Module: RN174 & Zigbee interfacing kit", "High performance workstation"
        // ],
        align: "right",
    },
    {
        title: "VLSI Design Laboratory",
        description:
            "The VLSI Design Laboratory provides students with hands-on training in integrated circuit (IC) design, semiconductor device modeling, and electronic design automation (EDA). The laboratory supports undergraduate, postgraduate, and research activities by bridging the gap between theoretical concepts and practical implementation of analog, digital, and mixed-signal integrated circuits. The laboratory enables students to gain practical experience in CMOS circuit design, logic synthesis, transistor-level simulation, layout design, physical verification, FPGA-based prototyping, and semiconductor device simulation. Students are trained using industry-standard EDA tools for the complete VLSI design flow, from circuit design and verification to implementation and performance analysis. Equipped with advanced software platforms including Cadence Design Systems, Synopsys, Xilinx (AMD), and Silvaco TCAD, the laboratory facilitates education and research in analog and digital IC design, FPGA-based system development, System-on-Chip (SoC) design, semiconductor device modeling, and VLSI verification. The laboratory promotes project-based learning and research, preparing students for careers and advanced studies in microelectronics, semiconductor technology, and VLSI system design.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1KcZGadNtHDHYpOLwU28EQyTETCh8QbYE/view?usp=sharing", // Add Google Drive link here
            }
        ],
        // groups: [
        //     "High performance workstation", "Cadence Design Systems software", "Synopsys Software", "Xilinx (AMD) Software", "Silvaco Software", "Digilent ZedBoard", "Xilinx Zynq-7000 AP SoC ZC702 Evaluation Kit", "Zynq Ultrascale MPSoC ZCU102 Evaluation Kit", "Digilent Arty Z7", "Digilent Basys 3", "CPLD Developer Kit", "FPGA Trainer Kit", "KEYSIGHT Logic Analyzer 16862A", "Analog Discovery 2 / Design Kit"
        // ],
        align: "left",
    },
    {
        title: "VLSI Fabrication Laboratory",
        description:
            "The VLSI Fabrication Laboratory provides students and researchers with hands-on experience in semiconductor device fabrication, microfabrication processes, and integrated circuit (IC) manufacturing. The laboratory supports undergraduate, postgraduate, and research activities by bridging theoretical concepts with practical semiconductor processing and device characterization. The laboratory enables students to gain practical experience in wafer preparation, photolithography, thin-film deposition, oxidation, chemical etching, ion implantation, metallization, and semiconductor process integration. It also provides training in the characterization and testing of fabricated devices using advanced electrical and material analysis techniques. Equipped with state-of-the-art microfabrication and characterization facilities, the laboratory supports research in semiconductor process technology, MEMS, nanoelectronics, advanced materials, and VLSI fabrication. The laboratory also facilitates device characterization through structural, material, and electrical analysis using modern metrology and semiconductor testing equipment. By promoting project-based learning and interdisciplinary research, the laboratory prepares students for careers and advanced studies in semiconductor manufacturing, microelectronics, nanotechnology, and integrated circuit fabrication.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1CSWYnADZoDIKiNY-kZaxVAhIx3Kqxc7c/view?usp=sharing", // Add Google Drive link here
            }
        ],
        // groups: [
        //     "RF/DC Sputtering Setup", "Spin Coater Setup", "Magnetic Stirrer", "Four Probe Station", "Probe Sonicator", "Tungsten Halogen Light Source", "Spectrometer", "Fume Hood"
        // ],
        align: "right",
    },
    {
        title: "Microwave Engineering Laboratory",
        description:
            "The Microwave Engineering Laboratory is designed to provide students with practical exposure to the generation, transmission, measurement, and analysis of microwave signals and components. The laboratory supports hands-on learning in microwave engineering by enabling students to perform experiments related to waveguides, microwave junctions, directional couplers, active microwave devices, and network analysis. The students begin by familiarizing themselves with the Microwave Test Bench and frequency measurement techniques using a frequency meter. The laboratory then introduces the measurement of important waveguide parameters and the performance evaluation of microwave components such as multi-hole directional couplers, E-Plane Tee, H-Plane Tee, and Magic Tee. The laboratory also includes the study of Reflex Klystron characteristics, where students observe the variation of output power and operating frequency with repeller potential. Experiments on the Gunn Diode help students understand the I-V characteristics of microwave semiconductor devices. Further, the laboratory provides training in S-parameter measurement of microwave filters and antennas using a Network Analyser. Modern computational tools and electromagnetic simulators are also used to study TE and TM modes in rectangular waveguides, allowing students to correlate theoretical concepts with simulated field distributions. Overall, the Microwave Engineering Laboratory equips students with practical knowledge of microwave devices, wave propagation, component characterization, and measurement techniques, thereby strengthening their understanding of microwave communication systems and high-frequency engineering applications.",
        attachments: [
            {
                label: "Details of equipment",
                href: "https://drive.google.com/file/d/1W-AAfVOHPnhl23svLyUnZBX7D9dPqYHi/view?usp=sharing", // Add Google Drive link here
            }
        ],
        // groups: [
        //     "Microwave Test Bench (X-Band)", "Vector Network Analyzer (VNA) with Spectrum Analyzer", "Signal Generator", "Microwave Power Meter with Sensor", "Klystron & Gunn Power Supply Units", "Reflex Klystron Mount with Tube", "Gunn Oscillator & VSWR Meter", "Frequency Meters & Tunable Detectors", "PIN Modulator & Variable Attenuators", "Multi-Hole & Cross Directional Couplers", "Magic, E-Plane & H-Plane Tees", "Ferrite Circulator & Isolators", "Antenna & Transmission Line Trainer Kits", "Motorized Antenna Positioner with Software", "Digital Storage Oscilloscope / CRO", "Desktop Computers"
        // ],
        align: "left",
    },
    {
        title: "Advanced Communication Engineering Lab",
        description:
            "The Advanced Communication Lab provides students and researchers with hands-on training in modern communication technologies, including wireless communication, microwave engineering, optical fiber communication, and antenna systems. The laboratory supports undergraduate, postgraduate, and research activities by bridging theoretical concepts with practical experimentation, measurement, and system design. Students gain practical experience in RF and microwave measurements, antenna characterization, optical communication systems, fiber optic components, communication signal generation and analysis, and PCB prototyping. The laboratory also facilitates project-based learning and research in wireless communication, microwave circuits, antenna design, RF systems, and optical fiber communication, preparing students for advanced studies and careers in communication engineering.",
        // groups: [
        //     "Vector Network Analyzer (PNA, 2-Port, Keysight/Agilent N5222A)", "Signal Analyzer (Keysight/Agilent N9020A-526)", "PSG Analog Signal Generator (Keysight/Agilent E8257D)", "Microwave Source (Amitec MAT-04A)", "Microwave Signal Analyzer with Power Meter", "Matched Dual Ridge Horn Antennas", "Stepper Motor Controller & Regulated DC Power Supply", "PCB Prototyping Machine (MITS-11)", "Soldering/Desoldering Station (I-CON VARIO-4)", "CWDM & EDFA Training Systems (Akademika)", "OTDR & Optical Network Building Block System", "Fiber Optics Physics Training System", "LightRunner Premium Optical Fiber Training System"
        // ],
        align: "right",
    },
    {
        title: "Internet of Things (IoT) Lab",
        description:
            "The Internet of Things (IoT) Laboratory is designed to provide students with practical knowledge of IoT technologies by integrating hardware, software, networking, and cloud computing concepts. The lab begins with familiarization with Arduino and Raspberry Pi platforms, including software installation, operating system setup, and hardware configuration. Students learn to connect Raspberry Pi with a laptop and understand GPIO programming for controlling external devices. The experiments focus on interfacing various sensors and actuators such as LEDs, IR sensors, PIR sensors, temperature sensors, humidity sensors, smoke sensors, relays, motors, LCDs, and servos. Students develop programs to monitor sensor inputs, control outputs, perform PWM-based motor speed control, and implement real-time automation applications. The laboratory also introduces wireless communication by configuring Wi-Fi modules and connecting embedded devices to cloud platforms. Students gain hands-on experience with IoT protocols, particularly MQTT, for publishing and retrieving sensor data from cloud services. The final experiments involve implementing real-world IoT applications such as smart lighting, environmental monitoring, water quality monitoring, and smart agriculture systems. Overall, the IoT Laboratory equips students with the skills required to design, develop, and deploy intelligent connected systems by combining embedded programming, sensor interfacing, networking, cloud computing, and automation technologies.",
        // groups: [
        //     "Desktop Computers", "High-End Workstation", "Raspberry Pi 5 (4 GB RAM)", "Arduino Development Boards", "ESP32-S3 Development Boards", "Various Sensors"
        // ],
        align: "left",
    },
    {
        title: "Communication Engineering Lab",
        description:
            "A Communication Engineering Laboratory is a specialized laboratory where students gain practical experience with the principles, techniques, and equipment used in analog and digital communication systems. It bridges the gap between theoretical concepts taught in the classroom and their real-world implementation through hands-on experiments. The laboratory enables students to study the generation, transmission, reception, and processing of electrical and electromagnetic signals. Using trainer kits, measuring instruments, and software-defined radio platforms, students perform experiments on modulation and demodulation techniques, multiplexing, signal sampling, analog-to-digital and digital-to-analog conversion, pulse modulation, and digital communication schemes. They also learn to analyze signals using oscilloscope, function generator, and digital Multimeter.",
        align: "right",
    },
    {
        title: "5G Lab",
        description:
            "The 5G Laboratory is an advanced research, innovation, and skill development facility that provides a complete end-to-end 5G Standalone (SA) network environment. The laboratory enables students, researchers, faculty members, startups, and industry professionals to design, deploy, test, and optimize next-generation wireless communication systems. It integrates 5G Core, Radio Access Network (gNodeB), Multi-access Edge Computing (MEC), AI/ML, IoT devices, network virtualization, cybersecurity, and application development platforms to facilitate real-time experimentation and prototype development. The lab serves as a platform for developing indigenous 5G technologies and use case, validating new communication protocols, building intelligent IoT applications, and supporting interdisciplinary research aligned with Industry 4.0 and Digital India initiatives.",
        // groups: [
        //     "5G Core Server", "High-performance Servers", "5G gNodeB (gNB)", "Baseband Unit (BBU) & Radio Unit (RU)", "MEC Server", "OpenStack Platform & Kubernetes Cluster", "Network Switches & Enterprise Router", "Next Generation Firewall", "Wireshark", "Network Management System (NMS)", "5G Evaluation Boards/SDK", "5G IoT Gateway & Indoor CPE", "Programmable 5G SIM Cards", "5G Smartphones/User Equipment (UE)", "XR/AR/VR Headsets", "5G Camera & 5G Drone", "AI/ML Workstation", "IoT Sensors", "GPS Modules", "Edge AI Devices"
        // ],
        align: "left",
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

export default function ECELabsPage() {
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
