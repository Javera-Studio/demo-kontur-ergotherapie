import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { KonturLine } from "@/components/ui/KonturLine";
import { practice } from "@/lib/data/practice";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink text-offwhite">
      <Image
        src="/images/hero.jpg"
        alt="Ergotherapeutisches Team des KONTUR Zentrums sitzt gemeinsam mit Trainingsmaterialien für die Handfunktion"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/40 to-ink/85" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32">
        <p
          className="hero-in mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-lime"
          style={{ animationDelay: "0ms" }}
        >
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-lime" />
          Zentrum für Ergotherapie · Berlin
        </p>
        <h1
          className="hero-in max-w-3xl font-heading text-[2.5rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "90ms" }}
        >
          {practice.claim}
        </h1>
        <p
          className="hero-in mt-6 max-w-xl text-base leading-relaxed text-offwhite/80 sm:text-lg"
          style={{ animationDelay: "180ms" }}
        >
          {practice.seoLine} Sechs fachliche Schwerpunkte, ein Team, ein
          klarer Blick auf das, was im Alltag wirklich zählt.
        </p>
        <div className="hero-in mt-9 flex flex-wrap gap-4" style={{ animationDelay: "270ms" }}>
          <Button href="/#kontakt" variant="on-dark">
            Termin buchen
          </Button>
          <Button href="/#leistungen" variant="secondary" className="border-offwhite/25 text-offwhite hover:border-offwhite hover:bg-offwhite/5">
            Leistungen entdecken
          </Button>
        </div>
      </Container>

      <KonturLine className="relative z-10 mx-auto max-w-7xl px-5 pb-2 sm:px-8" />
    </section>
  );
}
