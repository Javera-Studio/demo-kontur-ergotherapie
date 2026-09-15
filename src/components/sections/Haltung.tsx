import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { haltung } from "@/lib/data/practice";

/**
 * Sticky-Scroll-Section über die volle Bildbreite: Auf Desktop (`lg:`) wird
 * das Bild `position: sticky` und bleibt nur innerhalb dieser Section
 * stehen (Section-Höhe > Bildhöhe, kein `background-attachment: fixed`).
 * Der Text liegt darüber als eigene, absolut positionierte Ebene und läuft
 * beim Scrollen über das stehende Bild – Eyebrow/Headline/Intro sowie jeder
 * der vier Grundsätze bekommt dafür einen eigenen, gleich großen
 * Scroll-Abschnitt (5 Flex-Slots über die Gesamthöhe der Section).
 *
 * Auf Mobile entfällt `lg:sticky`/`lg:absolute` ersatzlos: Dieselbe Markup-
 * Struktur wird dann zu normalem Blockfluss (Bild im Querformat, danach
 * Text/Grundsätze untereinander) – bewusst ohne doppelten Text im DOM.
 */
export function Haltung() {
  return (
    <section
      id="ansatz"
      aria-labelledby="ansatz-heading"
      className="relative scroll-mt-20 bg-ink text-offwhite lg:h-[300vh]"
    >
      <div className="aspect-[16/9] overflow-hidden lg:sticky lg:top-16 lg:aspect-auto lg:h-[calc(100vh-4rem)]">
        <div className="relative h-full w-full">
          <Image
            src="/images/parallax-alltag-erwachsene.jpg"
            alt="Ergotherapeutin unterstützt eine ältere Person beim Greifen einer Tasse"
            fill
            sizes="100vw"
            className="object-cover object-[70%_50%]"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-b from-ink/80 via-ink/45 to-ink/85 lg:block" aria-hidden="true" />
        </div>
      </div>

      <div className="lg:absolute lg:inset-0 lg:z-10">
        <Container className="py-20 sm:py-28 lg:flex lg:h-full lg:flex-col lg:py-0">
          <div className="lg:flex lg:flex-1 lg:items-center lg:justify-center">
            <Reveal className="lg:text-center">
              <SectionHeading eyebrow={haltung.eyebrow} title={haltung.title} description={haltung.text} light />
            </Reveal>
          </div>

          <div className="mt-16 flex flex-col gap-16 border-t border-offwhite/15 pt-12 lg:contents">
            {haltung.points.map((point) => (
              <div key={point.title} className="lg:flex lg:flex-1 lg:items-center lg:justify-center">
                <Reveal className="lg:max-w-md lg:text-center">
                  <p className="font-heading text-sm font-semibold text-lime">{point.number}</p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">{point.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-offwhite/70">{point.text}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
