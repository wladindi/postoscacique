"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "down" | "left" | "right" | "fade" | "zoom";
  threshold?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "up",
  threshold = 0.15
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`
  };

  return (
    <div
      className={[
        "reveal",
        `reveal--${variant}`,
        visible ? "is-visible" : undefined,
        className
      ]
        .filter(Boolean)
        .join(" ")}
      ref={ref}
      style={style}
    >
      {children}
    </div>
  );
}
