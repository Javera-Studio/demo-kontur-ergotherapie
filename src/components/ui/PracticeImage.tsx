import Image from "next/image";
import type { CSSProperties } from "react";

const aspectClasses = {
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-video",
} as const;

type Aspect = keyof typeof aspectClasses;

/**
 * Echtes Praxis-/Teamfoto per next/image (fill + object-cover), damit jede
 * Aspect-Ratio unabhängig von den tatsächlichen Bildmaßen sauber greift.
 * `unoptimized: true` (next.config.ts, statischer Export) liefert die
 * Quelldatei unverändert aus – Dateien daher vorab passend zuschneiden.
 */
export function PracticeImage({
  src,
  alt,
  aspect,
  className = "",
  style,
  priority = false,
  dark = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  aspect: Aspect;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  /** Für Bilder auf dunklem Grund (z. B. Hero). */
  dark?: boolean;
  sizes?: string;
}) {
  return (
    <div
      style={style}
      className={`relative w-full overflow-hidden border ${dark ? "border-offwhite/15" : "border-silver"} ${aspectClasses[aspect]} ${className}`}
    >
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
