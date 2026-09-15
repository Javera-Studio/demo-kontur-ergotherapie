"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { PracticeImage } from "@/components/ui/PracticeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

/**
 * Signature-Interaktion "Moderne Leistungsnavigation": große nummerierte
 * Behandlungsschwerpunkte, die beim Darüberfahren/Fokussieren Bild und
 * Akzentfarbe wechseln. Ersetzt austauschbare Standardkarten durch ein
 * editoriales Listenlayout, das zur dynamischen KONTUR-Markenwirkung passt.
 */
export function Schwerpunkte() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <section id="leistungen" aria-labelledby="leistungen-heading" className="scroll-mt-20 bg-offwhite py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Behandlungsschwerpunkte"
          title="Sechs Fachgebiete, ein System."
          description="Jede Leistung hat eine eigene Seite mit Zielen, Ablauf und häufigen Fragen – fachlich eigenständig, gestalterisch aus einem Guss."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ul className="border-t border-ink/10" role="list">
            {services.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <li key={service.slug} className="border-b border-ink/10">
                  <Reveal variant="fly-up" delay={index * 120}>
                    <Link
                      href={`/${service.slug}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      className="group flex items-center justify-between gap-6 py-5 sm:py-6"
                    >
                      <span className="flex items-baseline gap-4 sm:gap-6">
                        <span
                          className={`font-heading text-sm font-semibold tabular-nums transition-colors ${
                            isActive ? "text-lime" : "text-ink/30"
                          }`}
                        >
                          {service.number}
                        </span>
                        <span
                          className={`font-heading text-xl font-semibold transition-colors sm:text-2xl lg:text-3xl ${
                            isActive ? "text-cobalt" : "text-ink"
                          }`}
                        >
                          {service.navTitle}
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                          isActive ? "translate-x-1 text-cobalt" : "text-ink/40"
                        }`}
                        fill="none"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <PracticeImage key={active.slug} aspect="4/5" src={active.heroImage} alt={active.imageAlt} />
            <p className="mt-4 text-sm leading-relaxed text-ink/65">{active.teaser}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
