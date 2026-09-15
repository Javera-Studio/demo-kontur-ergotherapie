import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const schritte = [
  {
    title: "Verordnung & Anfrage",
    text: "Sie kontaktieren uns mit Ihrer ärztlichen Verordnung – telefonisch, per E-Mail oder über das Kontaktformular.",
  },
  {
    title: "Erstgespräch & Befund",
    text: "Im persönlichen Gespräch erfassen wir Ihre Situation und die relevanten funktionellen Aspekte.",
  },
  {
    title: "Individueller Therapieplan",
    text: "Wir legen gemeinsam realistische Ziele fest und planen die passenden Therapieschritte.",
  },
  {
    title: "Regelmäßige Therapie",
    text: "In festen Terminen arbeiten wir kontinuierlich an Ihren Zielen und passen den Plan bei Bedarf an.",
  },
];

export function Ablauf() {
  return (
    <section id="ablauf" aria-labelledby="ablauf-heading" className="scroll-mt-20 border-t border-silver bg-ice py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ablauf"
          title="Vom Erstkontakt zum Therapieplan."
          description="Ein klarer, nachvollziehbarer Ablauf – von der Verordnung bis zur laufenden Behandlung."
        />

        <ol className="mt-12 grid gap-px overflow-hidden border border-silver bg-silver sm:grid-cols-2 lg:grid-cols-4">
          {schritte.map((schritt, index) => (
            <li key={schritt.title} className="bg-offwhite p-6">
              <span className="font-heading text-3xl font-semibold text-cobalt">0{index + 1}</span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-ink">{schritt.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{schritt.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
