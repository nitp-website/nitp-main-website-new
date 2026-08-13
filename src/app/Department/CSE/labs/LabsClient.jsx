"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CAROUSEL_INTERVAL_MS = 5000;

const SECTION_CARD_CLASS =
  "mb-12 rounded-3xl border border-red-100 bg-white/90 shadow-[0_18px_50px_rgba(127,29,29,0.08)] backdrop-blur-sm";

const IMAGE_CARD_CLASS =
  "relative w-full overflow-hidden rounded-2xl border border-red-100 bg-rose-50 shadow-lg";

function LabSection({ title, description, images }) {
  return (
    <section className={SECTION_CARD_CLASS}>
      <div className="grid gap-8 px-5 py-6 sm:px-8 sm:py-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-red-900 sm:text-3xl">
            {title}
          </h3>

          <p className="whitespace-pre-line text-justify text-sm leading-7 text-slate-700 sm:text-base">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex w-full flex-col gap-4">
            {images.map((item, index) => (
              <div
                key={`${item.src}-${index}`}
                className={IMAGE_CARD_CLASS}
              >
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

function LabCarousel({
  slides,
  activeSlide,
  onPrevious,
  onNext,
  onSelectSlide,
}) {
  const currentSlide = slides[activeSlide] || {
    src: "",
    alt: "",
  };

  return (
    <div className="mb-10 overflow-hidden rounded-[2rem] border border-red-100 bg-white shadow-[0_24px_70px_rgba(127,29,29,0.14)]">
      <div className="relative h-[260px] sm:h-[360px] lg:h-[470px]">
        {currentSlide.src && (
          <>
            <Image
              src={currentSlide.src}
              alt={currentSlide.alt}
              fill
              priority={activeSlide === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
          </>
        )}

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
                  key={`${slide.src}-${index}`}
                  type="button"
                  onClick={() => onSelectSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-8 bg-white"
                      : "w-2.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LabsClient({ slides, labSections }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [slides.length]);

  const previousSlide = () => {
    if (slides.length === 0) return;

    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const nextSlide = () => {
    if (slides.length === 0) return;

    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(243,244,246,0.92))] px-4 pb-10 pt-6 sm:px-8 lg:px-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="mt-3 text-3xl font-black tracking-tight text-red-900 sm:text-5xl">
            Labs
          </h1>
        </div>

        {slides.length > 0 && (
          <LabCarousel
            slides={slides}
            activeSlide={activeSlide}
            onPrevious={previousSlide}
            onNext={nextSlide}
            onSelectSlide={setActiveSlide}
          />
        )}

        <div className="mx-auto max-w-7xl">
          {labSections.map((section) => (
            <LabSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}