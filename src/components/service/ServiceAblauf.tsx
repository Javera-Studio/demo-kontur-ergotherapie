import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AblaufSchritt } from "@/lib/data/services";

export function ServiceAblauf({ ablauf }: { ablauf: AblaufSchritt[] }) {
  return (
    <section className="border-t border-silver bg-ice py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Möglicher Ablauf" title="So kann die Therapie aussehen." />

        <ol className="mt-10 grid gap-px overflow-hidden border border-silver bg-silver sm:grid-cols-2 lg:grid-cols-4">
          {ablauf.map((schritt, index) => (
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
