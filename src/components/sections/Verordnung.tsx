import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { verordnung } from "@/lib/data/practice";

export function Verordnung() {
  return (
    <section aria-labelledby="verordnung-heading" className="bg-offwhite py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SectionHeading eyebrow={verordnung.eyebrow} title={verordnung.title} description={verordnung.text} />

        <ol className="grid gap-5 border-t border-ink/10 pt-8 sm:grid-cols-2">
          {verordnung.steps.map((step, index) => (
            <li key={step}>
              <Reveal delay={index * 90} className="flex gap-4">
                <span className="font-heading text-2xl font-semibold text-cobalt">0{index + 1}</span>
                <span className="pt-1 text-sm leading-relaxed text-ink/75">{step}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
