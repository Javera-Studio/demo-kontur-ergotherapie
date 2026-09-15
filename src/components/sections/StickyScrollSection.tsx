import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Scrollytelling-Section: Der äußere Container ist deutlich höher als der
 * Viewport (siehe `heightClassName`). Das Bild sitzt in einem `position:
 * sticky`-Element und bleibt exakt so lange am Bildschirm stehen, wie der
 * äußere Container durchgescrollt wird – danach löst es sich wieder aus dem
 * Bild heraus. Bewusst kein `background-attachment: fixed` und kein
 * `position: fixed`, damit sich das Bild niemals über andere Sections legt.
 *
 * Der Text liegt in einer zweiten, normal fließenden Ebene über dem Bild
 * (kein Kind des Sticky-Elements) und läuft dadurch beim Scrollen über das
 * stehende Bild hinweg. `top`/`height` des Sticky-Elements sind auf die
 * Höhe des Sticky-Headers (4rem) abgestimmt.
 */
export function StickyScrollSection({
  src,
  alt,
  objectPosition = "object-center",
  line1,
  line2,
  showButton = false,
}: {
  src: string;
  alt: string;
  /** Tailwind object-position Klassen, z. B. "object-[75%_50%] sm:object-center". */
  objectPosition?: string;
  line1: string[];
  line2: string[];
  showButton?: boolean;
}) {
  return (
    <section className="relative h-[150vh] sm:h-[185vh]">
      <div className="sticky top-16 h-[calc(100svh-4rem)] overflow-hidden">
        <Image src={src} alt={alt} fill priority={false} sizes="100vw" className={`object-cover ${objectPosition}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/30 to-ink/75" aria-hidden="true" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="mx-auto flex h-full max-w-7xl flex-col px-5 sm:px-8">
          <div className="flex flex-1 items-center justify-center text-center">
            <Reveal>
              <p className="max-w-[750px] font-heading text-3xl font-semibold leading-tight text-offwhite sm:text-5xl">
                {line1.map((row) => (
                  <span key={row} className="block">
                    {row}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-8 pb-16 text-center sm:items-end sm:pb-24 sm:text-right">
            <Reveal delay={120}>
              <p className="max-w-[750px] text-lg leading-relaxed text-offwhite/90 sm:text-xl">
                {line2.map((row) => (
                  <span key={row} className="block">
                    {row}
                  </span>
                ))}
              </p>
            </Reveal>

            {showButton ? (
              <Reveal delay={280} className="pointer-events-auto">
                <Button href="/#kontakt" variant="on-dark">
                  Termin anfragen
                </Button>
              </Reveal>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
