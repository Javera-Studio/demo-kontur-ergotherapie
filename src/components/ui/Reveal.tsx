"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/**
 * Dezentes Scroll-Reveal für einzelne inhaltliche Blöcke (nicht für jede
 * Überschrift/jeden Absatz einzeln). Respektiert prefers-reduced-motion über
 * CSS (siehe globals.css) und lässt Inhalte ohne JavaScript unverändert
 * sichtbar (kein serverseitiges Ausblenden).
 */
const variantClass = {
  default: "js-reveal",
  "fly-up": "js-fly-up",
  "scale-in": "js-scale-in",
  "fly-left": "js-fly-left",
  "fly-right": "js-fly-right",
} as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "default",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /**
   * "fly-up": langsamerer, weiterer Weg von unten – für Aufzählungen/Listen.
   * "scale-in": dezentes Auftauchen aus leichtem Zoom – für Bild-/Portraitraster.
   * "fly-left"/"fly-right": seitliches Einfliegen für abwechselnd
   * ausgerichtete Editorial-Listen (Distanz per CSS, siehe globals.css).
   */
  variant?: keyof typeof variantClass;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
