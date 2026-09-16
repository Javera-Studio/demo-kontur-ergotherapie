import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { KonturLine } from "@/components/ui/KonturLine";
import { practice } from "@/lib/data/practice";

/**
 * Kompakter Vollbild-Hero mit fester Zielhöhe auf Desktop (statt 100svh),
 * damit Text und Buttons ohne Scrollen sichtbar sind. Einheitliches Markup
 * für beide Breakpoints: Textblock und Signaturlinie sind auf Mobile
 * normaler Blockfluss (treibt die Section-Höhe, darf natürlich scrollen)
 * und werden ab `lg:` zu absolut positionierten Ebenen innerhalb der dann
 * fix hohen Section – so endet der Hero exakt nach der Linie, ohne
 * zusätzlichen Leerraum.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-offwhite lg:h-[clamp(720px,86vh,780px)]">
      <Image
        src="/images/hero.jpg"
        alt="Ergotherapeutisches Team des KONTUR Zentrums sitzt gemeinsam mit Trainingsmaterialien für die Handfunktion"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[85%_38%] lg:object-[68%_38%]"
      />

      {/* Mobile: gleichmäßiger, kräftigerer Verlauf über die volle Breite. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/45 to-ink/80 lg:hidden" aria-hidden="true" />

      {/* Desktop: gerichteter Verlauf – dunkel hinter dem Text links, zu den Personen rechts hin transparent. */}
      <div
        className="absolute inset-0 hidden lg:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, rgba(10,16,30,0.90) 0%, rgba(10,16,30,0.72) 42%, rgba(10,16,30,0.18) 72%, rgba(10,16,30,0.08) 100%)",
        }}
      />

      {/* Sehr dezenter zusätzlicher Verlauf am unteren Bildrand, beide Breakpoints. */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 flex min-h-[560px] flex-col justify-center px-6 py-14 sm:min-h-[620px] sm:px-8 sm:py-16 lg:absolute lg:inset-0 lg:min-h-0 lg:px-14 lg:py-0">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-[760px]">
            <p
              className="hero-in mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-lime"
              style={{ animationDelay: "0ms" }}
            >
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-lime" />
              Zentrum für Ergotherapie · Berlin
            </p>
            <h1
              className="hero-in font-heading text-[clamp(3.4rem,5.2vw,5.8rem)] font-semibold leading-[0.98] tracking-tight"
              style={{ animationDelay: "90ms" }}
            >
              {practice.claimLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="hero-in mt-6 max-w-[650px] text-sm leading-[1.5] text-offwhite/85 sm:text-base"
              style={{ animationDelay: "180ms" }}
            >
              {practice.heroTextLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div
              className="hero-in mt-8 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center"
              style={{ animationDelay: "270ms" }}
            >
              <Button href="/#kontakt" variant="on-dark">
                Termin buchen
              </Button>
              <Button
                href="/#leistungen"
                variant="secondary"
                className="border-offwhite/30 text-offwhite hover:border-offwhite hover:bg-offwhite/10"
              >
                Leistungen entdecken
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-6 sm:px-8 sm:pb-8 lg:absolute lg:inset-x-0 lg:bottom-3 lg:px-14 lg:pb-0">
        <KonturLine className="mx-auto max-w-7xl" />
      </div>
    </section>
  );
}
