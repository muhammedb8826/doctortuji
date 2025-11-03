"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type Slide = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

interface CarouselProps {
  slides: Slide[];
  intervalMs?: number;
  className?: string;
}

export function Carousel({ slides, intervalMs = 5000, className }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const id = setInterval(goNext, intervalMs);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intervalMs, slides.length, isPaused]);

  return (
    <div
      className={cn(
        "relative w-screen overflow-hidden bg-gray-100",
        "h-[70vh] min-h-[420px] md:h-[80vh]",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === index ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              priority={i === index}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            {slides[index]?.title && (
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
                {slides[index].title}
              </h1>
            )}
            {slides[index]?.description && (
              <p className="mt-5 text-base sm:text-lg opacity-90">
                {slides[index].description}
              </p>
            )}
            {(slides[index]?.ctaHref || slides[index]?.ctaLabel) && (
              <div className="mt-8">
                <a href={slides[index].ctaHref ?? "#"}>
                  <Button className="shadow-lg">{slides[index].ctaLabel ?? "Learn more"}</Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/90 text-white hover:bg-blue-700 shadow-lg"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600/90 text-white hover:bg-blue-700 shadow-lg"
          >
            ›
          </button>
          <div className="absolute left-0 right-0 bottom-4 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-white/70",
                  i === index ? "bg-white" : "bg-white/30"
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


