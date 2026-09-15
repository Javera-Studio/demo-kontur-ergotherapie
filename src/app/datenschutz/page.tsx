import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Platzhalter-Datenschutzerklärung dieser Demo-Website.",
};

export default function DatenschutzPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container className="max-w-3xl">
        <div className="mb-8 border border-dashed border-cobalt/40 bg-ice px-5 py-4 text-sm text-ink">
          <strong className="font-semibold">Hinweis:</strong> Dies ist ein Platzhalter innerhalb einer fiktiven
          Demo-Website und keine rechtliche Vorlage.
        </div>

        <h1 className="font-heading text-4xl font-semibold text-ink">Datenschutz</h1>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/75">
          <div>
            <h2 className="text-lg font-semibold text-ink">Verantwortliche Stelle (Platzhalter)</h2>
            <p className="mt-2">
              Angaben zur verantwortlichen Stelle gemäß Art. 4 Nr. 7 DSGVO werden für ein reales Projekt ergänzt.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Kontaktformular</h2>
            <p className="mt-2">
              Das Kontaktformular dieser Demo-Website ist eine reine Demo-Funktion. Es werden keine Formulardaten
              übermittelt, gespeichert oder verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-ink">Hinweis</h2>
            <p className="mt-2">
              Diese Seite dient ausschließlich der Darstellung innerhalb einer Demo-Website und ersetzt keine
              rechtliche Beratung.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
