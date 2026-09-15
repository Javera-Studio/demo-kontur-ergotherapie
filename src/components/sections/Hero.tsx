import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { KonturLine } from "@/components/ui/KonturLine";
import { practice } from "@/lib/data/practice";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-offwhite">
      <Container className="grid gap-10 pb-16 pt-14 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16 lg:pb-24 lg:pt-28">
        <div>
          <p
            className="hero-in mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-lime"
            style={{ animationDelay: "0ms" }}
          >
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-lime" />
            Zentrum für Ergotherapie · Berlin
          </p>
          <h1
            className="hero-in font-heading text-[2.5rem] font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
            {practice.claim}
          </h1>
          <p
            className="hero-in mt-6 max-w-xl text-base leading-relaxed text-offwhite/75 sm:text-lg"
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
        </div>

        <ImagePlaceholder
          aspect="4/3"
          dark
          label="Moderner Praxisraum mit Therapiegeräten"
          futurePath="/images/kontur-hero.webp"
          className="hero-in lg:aspect-[4/5]"
          style={{ animationDelay: "160ms" }}
        />
      </Container>

      <KonturLine className="mx-auto max-w-7xl px-5 pb-2 sm:px-8" />
    </section>
  );
}
