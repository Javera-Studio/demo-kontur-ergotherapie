"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Signature-Element aus dem Logo-Motiv (siehe LogoMark): eine dünne Linie,
 * die sich beim Erreichen ausgewählter Übergänge einmalig dezent nachzeichnet.
 * Bewusst sparsam eingesetzt (Hero-Übergang, Leistungsnavigation) statt an
 * jedem Section-Wechsel. `prefers-reduced-motion` wird über CSS respektiert
 * (siehe .kontur-line in globals.css).
 */
export function KonturLine({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 320 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`kontur-line h-6 w-full ${visible ? "is-visible" : ""} ${flip ? "scale-y-[-1]" : ""} ${className}`}
    >
      <path
        d="M0 20 L70 20 L100 4 L130 20 L320 20"
        fill="none"
        stroke="var(--color-cobalt)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
      />
    </svg>
  );
}
