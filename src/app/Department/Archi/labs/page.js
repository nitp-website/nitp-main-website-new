"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download, UserCircle2 } from "lucide-react";

const carouselSlides = [
    { src: "/department/archi/labs/Art Court.jpg", alt: "Art Court" },
    { src: "/department/archi/labs/Building Services Lab.JPG", alt: "Building Services Lab" },
    { src: "/department/archi/labs/Computer Lab.JPG", alt: "Computer Lab" },
    { src: "/department/archi/labs/Landscape Lab.jpg", alt: "Landscape Lab" },
    { src: "/department/archi/labs/Building Construction Lab.png", alt: "Building Construction Lab" },
];
 
const mainLabSections = [
    {
        title: "Construction Yard / Building Construction Lab",
        pi: "",
        description:
            "A dynamic, open-air workshop where students transition from drawing boards to physical creation. Students gain hands-on experience in mortar preparation, concrete mixing, traditional and modern brick construction, and casting PCC blocks. This facility provides a deep, tactile understanding of structural integrity, masonry, and finishing work.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Architectural Workshop.jpg", alt: "Architectural Workshop" },
            { src: "/department/archi/labs/Building Construction Lab.png", alt: "Building Construction Lab" }
        ],
        align: "right",
    },
    {
        title: "Building Services Lab",
        pi: "",
        description:
            "This facility provides a practical understanding of essential building services through demonstrative physical models and instructional panels. It covers water supply systems, sanitation and drainage components, solid waste handling, and fire-fighting installations. By bridging theoretical instruction with visual understanding, the lab helps students master service integration, routing, and maintenance considerations essential for architectural planning.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Building Services Lab.JPG", alt: "Building Services Lab" }
        ],
        align: "left",
    },
    {
        title: "Climatology Lab",
        pi: "",
        description:
            "Dedicated to research in urban microclimates, pedestrian thermal comfort, and climate-responsive design, this lab is equipped with advanced instruments to measure environmental parameters. Using tools like RayMan Pro and weather-monitoring systems, it supports field and simulation-based studies for sustainable urban design and heatwave analysis in composite climatic regions.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Climatology Lab.png", alt: "Climatology Lab" }
        ],
        align: "right",
    },
    {
        title: "Computer Lab",
        pi: "",
        description:
            "A well-equipped facility with 30 high-performance computers supporting architectural drafting, 3D modelling, visualisation, and documentation. All systems feature industry-standard software such as AutoCAD, SketchUp, Revit, and Photoshop, providing a modern digital learning environment to enhance students' design skills and complete complex studio assignments.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Computer Lab.JPG", alt: "Computer Lab" }
        ],
        align: "left",
    },
    {
        title: "Landscape Lab",
        pi: "",
        description:
            "An outdoor experimental facility comprising shaded and sun-exposed garden sections to study diverse microclimatic conditions. Spanning over 700 m², it houses a wide collection of tagged plant species, from groundcovers to mature trees, serving as a living repository for landscape design and ecology.\n\nEquipped with essential horticultural and surveying instruments, the lab provides students with hands-on training in plant identification, ecological monitoring, and experimental research.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Landscape Lab.jpg", alt: "Landscape Lab" }
        ],
        align: "right",
    },
    {
        title: "Material Museum",
        pi: "",
        description:
            "Serving as a repository of construction components and building materials, the museum acts as a bridge between theoretical knowledge and practical understanding. It features organized displays of bricks, stones, timber, metals, glass, flooring systems, and eco-friendly alternatives.\n\nBy allowing students to physically observe and analyse these materials, the facility enhances their technical awareness and sensitivity towards sustainable construction and interior systems.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Material Museum.jpg", alt: "Material Museum" }
        ],
        align: "left",
    },
    {
        title: "Department Library",
        pi: "",
        description:
            "A dedicated academic resource centre housing around 750 carefully selected titles covering architecture, urban planning, design, construction, and sustainability. The library offers a quiet, well-organized reading environment, providing students and faculty with easy access to quality reference materials to support regular academic exploration and research activities.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Library.jpg", alt: "Department Library" }
        ],
        align: "right",
    },
    {
        title: "Research Lab (PG/PhD)",
        pi: "",
        description:
            "A dedicated collaborative workspace for postgraduate students and doctoral scholars, equipped with 30 technology-enabled workstations. It facilitates advanced research in sustainable architecture, urban development, heritage conservation, climate-responsive design, and spatial analysis.\n\nThe lab provides the necessary digital tools and computing infrastructure for complex simulations, data analysis, thesis work, and academic publications, fostering an environment of innovation and critical inquiry.",
        attachments: [],
        images: [
            { src: "/department/archi/labs/Research (PGPHD) Lab.jpg", alt: "Research Lab" }
        ],
        align: "left",
    },
    {
        title: "Resource Centre",
        pi: "",
        description:
            "An essential academic support facility providing access to professional drafting and measurement equipment. The centre offers measuring wheels, T-scales, parallel bars, levellers, and more, assisting students with technical drafting, model preparation, and field measurements to enhance precision in their studio work.",
        attachments: [
            { label: "Details of equipment", href: "#" }
        ],
        images: [],
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

export default function ArchiLabsPage() {
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