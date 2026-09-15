import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { practice } from "@/lib/data/practice";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Platzhalter-Impressum dieser Demo-Website.",
};

export default function ImpressumPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <div className="mb-8 border border-dashed border-cobalt/40 bg-ice px-5 py-4 text-sm text-ink">
          <strong className="font-semibold">Hinweis:</strong> Dies ist ein Platzhalter innerhalb einer fiktiven
          Demo-Website und keine rechtliche Vorlage.
        </div>

        <h1 className="font-heading text-4xl font-semibold text-ink">Impressum</h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/75">
          <div>
            <h2 className="text-lg font-semibold text-ink">Angaben gemäß § 5 DDG (Platzhalter)</h2>
            <p className="mt-2">
              {practice.name}
              <br />
              {practice.addressLine}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Kontakt (Platzhalter)</h2>
            <p className="mt-2">
              Telefon: {practice.phoneDisplay}
              <br />
              E-Mail: {practice.email}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Vertretungsberechtigte Person (Platzhalter)</h2>
            <p className="mt-2">Merle Wagner (fiktive Praxisleitung dieser Demo-Website)</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Berufsrechtliche Angaben (Platzhalter)</h2>
            <p className="mt-2">
              Angaben zu Berufsbezeichnung, zuständiger Kammer und berufsrechtlichen Regelungen sind für ein reales
              Projekt zu ergänzen.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
