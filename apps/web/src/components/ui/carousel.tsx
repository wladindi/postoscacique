"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type CarouselItem = {
  src: string;
  alt: string;
};

type CarouselProps = {
  items: CarouselItem[];
  autoPlay?: boolean;
  intervalMs?: number;
  ariaLabel?: string;
};

export function Carousel({
  items,
  autoPlay = true,
  intervalMs = 4500,
  ariaLabel = "Galeria"
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!autoPlay || paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [autoPlay, intervalMs, paused, total]);

  if (total === 0) return null;

  return (
    <div
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel__viewport">
        <ul
          className="carousel__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <li
              aria-hidden={i !== index}
              className="carousel__slide"
              key={item.src}
            >
              <Image
                alt={item.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 980px) 100vw, 1000px"
                src={item.src}
              />
            </li>
          ))}
        </ul>
      </div>

      {total > 1 && (
        <>
          <button
            aria-label="Imagem anterior"
            className="carousel__nav carousel__nav--prev"
            onClick={prev}
            type="button"
          >
            <ChevronLeft aria-hidden="true" size={20} strokeWidth={2.5} />
          </button>
          <button
            aria-label="Próxima imagem"
            className="carousel__nav carousel__nav--next"
            onClick={next}
            type="button"
          >
            <ChevronRight aria-hidden="true" size={20} strokeWidth={2.5} />
          </button>

          <div className="carousel__dots" role="tablist">
            {items.map((item, i) => (
              <button
                aria-label={`Ir para a imagem ${i + 1}`}
                aria-selected={i === index}
                className={`carousel__dot ${i === index ? "is-active" : ""}`}
                key={item.src}
                onClick={() => goTo(i)}
                role="tab"
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
