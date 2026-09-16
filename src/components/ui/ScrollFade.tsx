"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/**
 * Für lange Scrollytelling-Sections mit mehreren nacheinander folgenden
 * Textblöcken über einem stehenden Sticky-Bild: anders als `Reveal` (löst
 * einmalig aus und bleibt sichtbar) beobachtet `ScrollFade` dauerhaft weiter
 * und blendet den Block wieder dezenter, sobald er die mittlere
 * Bildschirmzone wieder verlässt – dadurch ist immer nur der gerade
 * "aktive" Schritt gut lesbar. Reines Opacity/Transform, respektiert
 * `prefers-reduced-motion` über CSS (siehe globals.css).
 */
export function ScrollFade({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "-38% 0px -38% 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`scroll-fade ${active ? "is-active" : ""} ${className}`}>
      {children}
    </div>
  );
}
