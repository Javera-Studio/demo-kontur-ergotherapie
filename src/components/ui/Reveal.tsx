"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type RevealStyle = CSSProperties & { "--fly-in-x"?: string; "--reveal-y"?: string };

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
  distance,
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
  /**
   * Überschreibt die Standarddistanz (px) des gewählten Effekts, z. B. für
   * dezentere Bewegung in kompakten Grids. Positiv für "fly-up"/"default"
   * (Weg von unten), Vorzeichen bei "fly-left"/"fly-right" ist bereits durch
   * die Variante festgelegt.
   */
  distance?: number;
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

  const distanceStyle: RevealStyle | undefined =
    distance === undefined
      ? undefined
      : variant === "fly-right"
        ? { "--fly-in-x": `${distance}px` }
        : variant === "fly-left"
          ? { "--fly-in-x": `-${distance}px` }
          : { "--reveal-y": `${distance}px` };

  const style: RevealStyle | undefined = visible ? { animationDelay: `${delay}ms`, ...distanceStyle } : distanceStyle;

  return (
    <div ref={ref} className={`${variantClass[variant]} ${visible ? "is-visible" : ""} ${className}`} style={style}>
      {children}
    </div>
  );
}
