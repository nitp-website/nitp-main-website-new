"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_INTERVAL_MS = 5000;
const SECTION_CARD_CLASS =
  "mb-12 rounded-3xl border border-red-100 bg-white/90 shadow-[0_18px_50px_rgba(127,29,29,0.08)] backdrop-blur-sm";
const IMAGE_CARD_CLASS =
  "relative w-full overflow-hidden rounded-2xl border border-red-100 bg-rose-50 shadow-lg";

const carouselSlides = [
  {
    src: "https://i.postimg.cc/VN6tChMF/Whats-App-Image-2026-08-12-at-01-21-48.jpg",
    alt: "Computing Lab image 1",
  },
  {
    src: "https://i.postimg.cc/0241vMng/Whats-App-Image-2026-08-12-at-01-31-01.jpg",
    alt: "Computing Lab image 2",
  },
  {
    src: "https://i.postimg.cc/bvBtHRH6/f8eda39d-7af5-4d85-8e3c-51b339eecb97.jpg",
    alt: "Computing Lab image 3",
  },
  {
    src: "https://i.postimg.cc/NF0ZqBrK/Whats-App-Image-2026-08-12-at-01-15-07.jpg",
    alt: "Computing Lab image 4",
  },
  {
    src: "https://i.postimg.cc/13DCdfYn/Whats-App-Image-2026-08-12-at-01-25-24.jpg",
    alt: "Computing Lab image 5",
  },
];

const labSections = [
  {
    title: "Computing Lab-1 (CSE, Bihta Campus)",
    description:
      "Computing Lab- 1 is located on the first floor of the Department of Computer Science and Engineering, Bihta Campus, and is equipped with 113 desktop computers to support practical sessions, programming, project work, and research activities. The laboratory comprises eighty-five Acer Veriton X4240G systems with AMD Ryzen 7 processors, 16 GB DDR4 RAM, 500 GB storage, Acer V227Q monitors, and Windows 11 Home, twenty-one Acer Veriton X4240G systems with AMD Ryzen 3 processors, 8 GB RAM, 500 GB storage, Acer V227Q monitors, and Windows 11 Home, six Acer S2690G systems featuring Intel Core i7 processors, 8 GB RAM, 1 TB storage, Acer V227Q LCD monitors, and Windows 11 Home, and one Acer M200-P500 system configured with an AMD Ryzen 7 processor, 8 GB RAM, 1 TB storage, an Acer V227Q LCD monitor, and Windows 11 Home.\n\nThe laboratory provides students with a modern computing environment to acquire practical knowledge through hands-on experiments, programming, database development, web application design, data analysis, and cybersecurity practices. It bridges the gap between theoretical learning and practical implementation by enabling students to develop analytical thinking, technical proficiency, and problem-solving skills using contemporary software tools and technologies. Computing Lab- 1 supports practical courses such as Database Management Systems (DBMS), Data Analytics, Web Technology, Applied Cryptography, and Operating Systems. The laboratory facilitates experiments in database design, SQL programming, database administration, data preprocessing, visualization and analytical techniques, web application development using front-end and back-end technologies, and the implementation of cryptographic algorithms and security mechanisms. It also provides basic exposure to operating system concepts through experiments on process management, memory management, and file system operations. In addition, the laboratory supports course assignments, mini-projects, major projects, demonstrations, and research-oriented activities, thereby enhancing students' practical competencies and preparing them for industry and research careers.",
    images: [
      {
        src: "https://i.postimg.cc/VN6tChMF/Whats-App-Image-2026-08-12-at-01-21-48.jpg",
        alt: "Computing Lab-1 image 1",
      },
      {
        src: "https://i.postimg.cc/0241vMng/Whats-App-Image-2026-08-12-at-01-31-01.jpg",
        alt: "Computing Lab-1 image 2",
      },
    ],
  },
  {
    title: "Computing Lab-2 (CSE, Bihta Campus)",
    description:
      "Computing Lab- 2 is located on the second floor of the Department of Computer Science and Engineering (Bihta Campus). The laboratory is equipped with 94 desktop computers to support practical sessions, programming exercises, software development, and research activities. Of these, 92 desktop computers are Acer Veriton M200 P500 systems featuring AMD Ryzen 7 processors with Radeon Graphics, 16 GB RAM, 1 TB HDD, and Windows 11 Home operating system. The remaining two desktop computers are HP ProDesk systems equipped with Intel Core i7 processors, 8 GB RAM, 1 TB HDD, and Windows 11 Pro operating system.\n\nThis laboratory provides a state-of-the-art computing environment designed to equip students with practical exposure to intelligent computing, software development, algorithm design, data-driven problem solving, and secure computing practices. The laboratory supports both undergraduate and postgraduate programmes by offering a hands-on learning platform that effectively bridges theoretical concepts with real-world applications, fostering innovation, analytical thinking, and research-oriented learning.\n\nThe laboratory supports practical courses such as Machine Learning, Software Engineering, Design and Analysis of Algorithms, Information Security, Natural Language Processing (NLP), and Bioinformatics. Students gain practical experience in implementing machine learning models, software design and testing methodologies, algorithm development and performance analysis, cryptographic techniques and secure computing practices, natural language processing applications, and computational methods for biological data analysis. The laboratory also facilitates course assignments, laboratory experiments, mini-projects, major projects, research activities, and the use of modern software tools and frameworks, thereby enhancing students' technical competencies and preparing them for careers in industry, research, and academia.",
    images: [
      {
        src: "https://i.postimg.cc/bvBtHRH6/f8eda39d-7af5-4d85-8e3c-51b339eecb97.jpg",
        alt: "Computing Lab-2 image 1",
      },
      {
        src: "https://i.postimg.cc/NF0ZqBrK/Whats-App-Image-2026-08-12-at-01-15-07.jpg",
        alt: "Computing Lab-2 image 2",
      },
      {
        src: "https://i.postimg.cc/13DCdfYn/Whats-App-Image-2026-08-12-at-01-25-24.jpg",
        alt: "Computing Lab-2 image 3",
      },
    ],
  },
];

function LabSection({ title, description, images }) {
  return (
    <section className={SECTION_CARD_CLASS}>
      <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-red-900 sm:text-3xl">{title}</h3>
          <p className="whitespace-pre-line text-justify text-sm leading-7 text-slate-700 sm:text-base">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col gap-4">
            {images.map((item) => (
              <div key={item.src} className={IMAGE_CARD_CLASS}>
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
      </div>
    </section>
  );
}

function LabCarousel({ slides, activeSlide, onPrevious, onNext, onSelectSlide }) {
  const currentSlide = slides[activeSlide];

  return (
    <div className="mb-10 overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_24px_70px_rgba(127,29,29,0.14)]">
      <div className="relative h-[260px] sm:h-[360px] lg:h-[470px]">
        <Image
          src={currentSlide.src}
          alt={currentSlide.alt}
          fill
          priority={activeSlide === 0}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

        <button
          type="button"
          onClick={onPrevious}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/65"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          type="button"
          onClick={onNext}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/65"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl border border-white/20 bg-black/35 px-4 py-3 text-white backdrop-blur-sm sm:px-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              Image {activeSlide + 1} of {slides.length}
            </p>

            <div className="flex gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  onClick={() => onSelectSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-white" : "w-2.5 bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CSELabPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselSlides.length);
    }, CAROUSEL_INTERVAL_MS);

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

        <LabCarousel
          slides={carouselSlides}
          activeSlide={activeSlide}
          onPrevious={previousSlide}
          onNext={nextSlide}
          onSelectSlide={setActiveSlide}
        />

        <div className="mx-auto max-w-7xl">
          {labSections.map((section) => (
            <LabSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}
