import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { practice } from "@/lib/data/practice";

export function Kontakt() {
  return (
    <section id="kontakt" className="scroll-mt-20 border-t border-silver bg-offwhite py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Kontakt & Termin"
              title="Wir nehmen uns Zeit für Ihre Fragen."
              description="Sie möchten einen Termin vereinbaren oder vorab etwas klären? Schreiben Sie uns oder rufen Sie uns während unserer Sprechzeiten an."
            />

            <div className="mt-8 border border-dashed border-cobalt/40 bg-ice px-5 py-4 text-sm text-ink">
              <strong className="font-semibold">Demo-Angaben:</strong> Adresse, Telefonnummer und E-Mail dieser Seite
              sind frei erfunden.
            </div>

            <dl className="mt-6 space-y-3 text-sm leading-relaxed text-ink/70">
              <div>
                <dt className="font-medium text-ink">Adresse</dt>
                <dd>{practice.addressLine}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Telefon</dt>
                <dd>{practice.phoneDisplay}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">E-Mail</dt>
                <dd>{practice.email}</dd>
              </div>
              <div>
                <dt className="font-medium text-ink">Sprechzeiten</dt>
                <dd>
                  {practice.hours.map((entry) => (
                    <span key={entry.label} className="block">
                      {entry.label}: {entry.value}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
