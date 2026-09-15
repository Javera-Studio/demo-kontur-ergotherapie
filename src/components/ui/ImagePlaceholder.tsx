const aspectClasses = {
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-video",
} as const;

type Aspect = keyof typeof aspectClasses;

/**
 * Hochwertiger, klar gekennzeichneter Bildplatzhalter, solange Fotos und
 * Logo noch fehlen. Rendert bewusst kein <img>/<Image> mit einem (noch)
 * nicht existierenden `src` – das würde ein kaputtes Bildsymbol erzeugen.
 * Sobald das echte Foto vorliegt, wird dieser Platzhalter 1:1 durch eine
 * next/image-Instanz mit dem hier genannten Dateipfad ersetzt.
 */
export function ImagePlaceholder({
  aspect,
  label,
  futurePath,
  className = "",
  dark = false,
}: {
  aspect: Aspect;
  /** Kurzbeschreibung, was später an dieser Stelle zu sehen sein wird. */
  label: string;
  /** Vorgesehener späterer Dateipfad, z. B. /images/kontur-hero.webp */
  futurePath: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    // Späteres Bild: {futurePath}
    <div
      role="img"
      aria-label={`Platzhalter: ${label}`}
      className={`relative flex w-full flex-col items-center justify-center gap-3 overflow-hidden border px-6 text-center ${
        dark ? "border-offwhite/20 bg-ink-soft" : "border-dashed border-silver bg-ice"
      } ${aspectClasses[aspect]} ${className}`}
    >
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className={`h-10 w-10 ${dark ? "text-cobalt" : "text-cobalt"}`}
        fill="none"
      >
        <rect x="4" y="8" width="40" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="19" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 34 16 24 24 30 32 20 42 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className={`text-sm font-medium ${dark ? "text-offwhite" : "text-ink"}`}>{label}</p>
      <p className={`font-mono text-xs ${dark ? "text-offwhite/50" : "text-ink/50"}`}>{futurePath}</p>
    </div>
  );
}
