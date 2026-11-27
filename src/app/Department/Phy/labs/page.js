"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const carouselSlides = [
  {
    src: "/apme-labs/carousel-1.jpg",
    alt: "APME lab carousel image 1",
  },
  {
    src: "/apme-labs/carousel-2.jpg",
    alt: "APME lab carousel image 2",
  },
  {
    src: "/apme-labs/carousel-3.jpg",
    alt: "APME lab carousel image 3",
  },
  {
    src: "/apme-labs/carousel-4.jpg",
    alt: "APME lab carousel image 4",
  },
  {
    src: "/apme-labs/carousel-5.jpg",
    alt: "APME lab carousel image 5",
  },
];

const labSections = [
  {
    title: "Engineering Physics Lab",
    description:
      "The Engineering Physics Lab at APME lays the foundation for experimental knowledge in physics. It enables students to learn fundamental concepts, ranging from measuring gravitational acceleration to determining various properties of materials through well-designed and conceptualized experiments. A specially designed dark room facility is dedicated to conducting optical experiments. It provides students with hands-on experience in studying fundamental phenomena such as interference and diffraction of light. Through various experimental techniques, students learn to determine the wavelengths of different light sources by analyzing interference and diffraction patterns. The laboratory experience enhances the analytical, observational, and problem-solving skills of undergraduate students while strengthening their understanding of theoretical principles through practical application.",
    images: [
      {
        src: "/apme-labs/teaching-1.jpg",
        alt: "Engineering physics lab image 1",
      },
      {
        src: "/apme-labs/research-1.jpg",
        alt: "Engineering physics lab image 2",
      },
    ],
  },
  {
    title: "Synthesis and Characterization Lab",
    description:
      "The synthesis and characterization lab is well equipped with a range of sophisticated instruments and advanced facilities for the synthesis and characterization of diverse materials and samples. The laboratory supports experimental research and practical learning in materials science, enabling detailed analysis of structural, electrical, thermal, and mechanical properties of materials. These state-of-the-art facilities are highly beneficial for undergraduate and postgraduate students, as well as research scholars, in carrying out academic projects, laboratory training, and advanced research activities. The laboratory is predominantly utilized by departmental PhD scholars for carrying out advanced research and experimental investigations in specialized areas of materials science and engineering.",
    image: "/apme-labs/teaching-2.jpg",
    imageAlt: "Synthesis and characterization lab image",
    align: "right",
    note: "List of instruments",
    noteHref: "https://drive.google.com/file/d/1uF6THgpKRUUhSKVjdac-6cKfZtofMjY9/view?usp=sharing",
  },
  {
    title: "Mechanical Behaviour of Materials Lab",
    description:
      "Mechanical Behaviour of Materials Lab is equipped with a variety of sophisticated instruments and advanced facilities dedicated to the mechanical behavior of various materials and samples. The laboratory provides an excellent platform for experimental research, enabling detailed investigation of material properties such as Hardness, Roughness, Tensile Strength and processing techniques. These facilities are highly beneficial for undergraduate materials engineering students, as well as research scholars, for academic learning, project work, and research activities.",
    image: "/apme-labs/carousel-5.jpg",
    imageAlt: "Mechanical behaviour of materials lab image",
    align: "left",
    note: "List of instruments",
    noteHref: "https://drive.google.com/file/d/12I75QhF9ZdgGXd1a7GCghcd4oWqPv1NC/view?usp=drive_link",
  }
];

const researchAreas = [
  "Prof. Samrat Mukherjee (Magnetism, Perovskites, Exchange Bias, Spintronics Lab)",
  "Dr. Dev Kumar Mahato (Smart materials, Bulk and nano-functional materials Lab)",
  "Dr. Shivendra Kumar Jaiswal (Nano-materials, Structure-Property correlations, Mixed ionic and electronic based ceramic membranes, Fuel cell technology, Multiferroics Lab)",
  "Dr. Anurag Sahay (Gravitation, Black hole Physics, String theory, Thermodynamic Information Geometry, Statistical Mechanics-Computation Lab)",
  "Dr. Subrata Majumder (Bio-Physics Lab): Functional Nanomaterials, Biophysics, Electrochemistry, Spin Filtration in 1D and 2D Nanomaterials, Chiral Molecules, Thin Films, and Nanomaterials",
  "Dr. Ram Narayan Chauhan (Oxide based nanostructures for optoelectronics devices: solar cells, light emitting diodes, photo-detectors Lab)",
  "Dr. Neeraj Shukla (Ion matter interaction and defect analysis using RBS, Channeling, SRIM. Ion beam induced micro and nano-fabrication, Magneto transport and DFT simulations Lab)",
  "Dr. Kanhu Charan Sahoo (High temperature deformation (Creep), Material Testing and Characterization Lab)",
  "Dr. Ankur Chaurasia (Atomistic Modelling, Polymer Composites, High Entropy Alloys, Bio-Materials and Dynamic analysis Lab)",
];

function LabSection({ title, description, image, imageAlt, images, align = "right", note, noteHref }) {
  const imageList = images?.length ? images : image ? [{ src: image, alt: imageAlt || title }] : [];
  const isImageLeft = align === "left";

  return (
    <section className="mb-12 rounded-3xl border border-red-100 bg-white/90 shadow-[0_18px_50px_rgba(127,29,29,0.08)] backdrop-blur-sm">
      <div className={`grid gap-8 px-5 py-6 sm:px-8 sm:py-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-8 ${isImageLeft ? "lg:[direction:rtl]" : ""}`}>
        <div className={`space-y-4 ${isImageLeft ? "lg:[direction:ltr]" : ""}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-red-900">{title}</h3>
          <p className="text-sm sm:text-base leading-7 text-slate-700 whitespace-pre-line text-justify">{description}</p>
          {note ? (
            <a
              href={noteHref || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-800 transition hover:border-red-300 hover:bg-red-100"
            >
              <Download size={16} />
              <span>{note}</span>
            </a>
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

export default function APMELabsPage() {
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
          {/* <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-700">Dept. of Applied Physics &amp; Materials Engineering</p> */}
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
                  {/* <p className="text-xs uppercase tracking-[0.35em] text-white/70">Image Carousel</p> */}
                  <p className="text-xs uppercase tracking-[0.35em] text-white/70">Image {activeSlide + 1} of {carouselSlides.length}</p>
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
          {labSections.map((section) => (
            <LabSection key={section.title} {...section} />
          ))}

          <section className="mb-6 rounded-3xl border border-red-100 bg-white/90 p-5 shadow-[0_18px_50px_rgba(127,29,29,0.08)] backdrop-blur-sm sm:p-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-900">Research Lab</h3>
              <div className="mt-3">
                <p className="text-sm leading-7 text-slate-700 text-justify">
                  The Research Lab provides comprehensive support for faculty members, research scholars, and students engaged in research projects across diverse areas of Physics and Materials Science. The laboratories are equipped with facilities for sample synthesis, sample preparation, analysis, advanced computation and advanced experimentation, enabling high-quality academic and research activities. It serves as a dynamic platform for innovation, interdisciplinary research, and the development of practical scientific skills through hands-on experimental work.
                </p>
              </div>

              <h3 className="mt-6 text-2xl sm:text-3xl text-red-900">Research Groups</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2 ">
                {researchAreas.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-rose-100 bg-rose-50/60 px-4 py-4 text-sm leading-6 text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
