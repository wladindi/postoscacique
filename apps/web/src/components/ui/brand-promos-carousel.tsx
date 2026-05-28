"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type BrandPromosCarouselProps = {
  children: ReactNode[];
  intervalMs?: number;
  mobileBreakpoint?: number;
};

export function BrandPromosCarousel({
  children,
  intervalMs = 4500,
  mobileBreakpoint = 980
}: BrandPromosCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = children.length;

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [mobileBreakpoint]);

  useEffect(() => {
    if (!isMobile || paused || total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs, isMobile, paused, total]);

  const goTo = useCallback(
    (next: number) => setIndex(((next % total) + total) % total),
    [total]
  );

  const onTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? index + 1 : index - 1);
    }
    touchStartX.current = null;
    window.setTimeout(() => setPaused(false), 4000);
  };

  if (!isMobile) {
    return <div className="brand-promos__grid">{children}</div>;
  }

  return (
    <div
      aria-label="Marcas Rede Cacique"
      aria-roledescription="carousel"
      className="brand-promos__carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchEnd={onTouchEnd}
      onTouchStart={onTouchStart}
    >
      <div className="brand-promos__viewport">
        <div
          className="brand-promos__track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {children.map((child, i) => (
            <div
              aria-hidden={i !== index}
              className="brand-promos__slide"
              key={i}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      {total > 1 && (
        <div className="brand-promos__dots" role="tablist">
          {children.map((_, i) => (
            <button
              aria-label={`Ir para o card ${i + 1}`}
              aria-selected={i === index}
              className={`brand-promos__dot ${i === index ? "is-active" : ""}`}
              key={i}
              onClick={() => goTo(i)}
              role="tab"
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
}
