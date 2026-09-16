import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { wegZurTherapie } from "@/lib/data/practice";

/**
 * Vollflächige Sticky-Scroll-Section (ersetzt die früheren Sections
 * "Verordnung & Termin" und "Ablauf"): Bild bleibt auf Desktop nur
 * innerhalb dieser Section stehen (`position: sticky`, kein `fixed`/
 * `background-attachment`), Intro, die vier Schritte und der Abschluss
 * laufen als eigene Ebene darüber – anders als bei "Haltung & Ansatz"
 * bleibt jeder Textblock per `ScrollFade` dauerhaft interaktiv: er wird
 * beim Erreichen der Bildschirmmitte prominent und dimmt danach wieder,
 * statt einmalig aufzutauchen und stehen zu bleiben.
 *
 * Einheitliches Markup für beide Breakpoints: ab `lg:` werden Bild und
 * Text sticky/absolut, darunter (Mobile) normaler Blockfluss mit
 * natürlichem Scrollen.
 */
export function WegZurTherapie() {
  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-heading"
      className="relative scroll-mt-20 bg-ink text-offwhite lg:h-[320vh]"
    >
      <div className="aspect-[4/3] overflow-hidden lg:sticky lg:top-0 lg:aspect-auto lg:h-[100svh]">
        <div className="relative h-full w-full">
          <Image
            src="/images/parallax-alltag-kinder.jpg"
            alt="Kinderhand übt gemeinsam mit einer Ergotherapeutin an einem therapeutischen Steckbrett"
            fill
            sizes="100vw"
            className="object-cover object-[58%_55%]"
          />

          {/* Mobile: gleichmäßiger Verlauf über die volle Breite. */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80 lg:hidden" aria-hidden="true" />

          {/* Desktop: links/mittig stärker abgedunkelt, Hände und Therapiematerial rechts bleiben sichtbar. */}
          <div
            className="absolute inset-0 hidden lg:block"
            aria-hidden="true"
            style={{
              background: "linear-gradient(90deg, rgba(8,15,30,0.88) 0%, rgba(8,15,30,0.72) 48%, rgba(8,15,30,0.35) 100%)",
            }}
          />

          {/* Sehr dezente zusätzliche Verläufe oben/unten. */}
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/45 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/45 to-transparent" aria-hidden="true" />
        </div>
      </div>

      <div className="lg:absolute lg:inset-0 lg:z-10">
        <Container className="py-20 sm:py-28 lg:flex lg:h-full lg:flex-col lg:py-0">
          <div className="lg:flex lg:flex-1 lg:items-center">
            <ScrollFade className="max-w-xl">
              <SectionHeading
                eyebrow={wegZurTherapie.eyebrow}
                title={wegZurTherapie.title}
                description={wegZurTherapie.text}
                light
              />
            </ScrollFade>
          </div>

          <div className="mt-14 flex flex-col gap-10 lg:contents">
            {wegZurTherapie.steps.map((step) => (
              <div key={step.number} className="lg:flex lg:flex-1 lg:items-center">
                <ScrollFade
                  className="max-w-[620px] border-l-2 border-cobalt bg-[rgba(8,15,30,0.65)] p-8 backdrop-blur-[8px] sm:p-10"
                >
                  <p className="font-heading text-sm font-semibold text-lime">{step.number}</p>
                  <h3 className="mt-3 font-heading text-2xl font-semibold sm:text-3xl">{step.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-offwhite/80">{step.text}</p>
                </ScrollFade>
              </div>
            ))}
          </div>

          <div className="mt-14 lg:mt-0 lg:flex lg:flex-1 lg:items-center">
            <ScrollFade className="max-w-xl">
              <p className="text-lg leading-relaxed text-offwhite/90">{wegZurTherapie.closingText}</p>
              <Button href="/#kontakt" variant="on-dark" className="mt-6">
                Termin anfragen
              </Button>
            </ScrollFade>
          </div>
        </Container>
      </div>
    </section>
  );
}
