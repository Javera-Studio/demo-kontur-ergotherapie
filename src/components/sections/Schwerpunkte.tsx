import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

/**
 * Leistungsübersicht als großzügige, typografische Editorial-Liste statt
 * Karten: kein Bild, abwechselnd links/rechts ausgerichtete Zeilen, feine
 * Trennlinien. Reiner Server-Component-Markup – die Hover- und
 * Scroll-Interaktion läuft komplett über CSS (:hover/group) bzw. die
 * client-seitige Reveal-Komponente je Zeile.
 */
export function Schwerpunkte() {
  return (
    <section id="leistungen" aria-labelledby="leistungen-heading" className="scroll-mt-20 bg-offwhite py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Behandlungsschwerpunkte"
          title="Sechs Fachgebiete, ein System."
          description="Jede Leistung hat eine eigene Seite mit Zielen, Ablauf und häufigen Fragen – fachlich eigenständig, gestalterisch aus einem Guss."
        />

        <ul className="mt-14 divide-y divide-silver border-t border-silver" role="list">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;

            return (
              <li key={service.slug}>
                <Reveal variant={isLeft ? "fly-left" : "fly-right"} delay={index * 90}>
                  <Link
                    href={`/${service.slug}`}
                    className={`group flex w-full items-baseline justify-start gap-4 py-5 sm:gap-6 sm:py-6 ${
                      isLeft ? "" : "sm:justify-end"
                    }`}
                  >
                    <span className="inline-flex max-w-full items-baseline gap-4 sm:gap-6">
                      <span className="font-heading text-sm font-semibold tabular-nums text-ink/30 transition-colors group-hover:text-lime">
                        {service.number}
                      </span>
                      <span className="font-heading text-xl font-semibold leading-tight text-ink transition-colors group-hover:text-cobalt sm:text-2xl lg:text-3xl">
                        {service.navTitle}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 self-center text-ink/40 transition-all duration-200 group-hover:translate-x-1 group-hover:text-lime"
                        fill="none"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
