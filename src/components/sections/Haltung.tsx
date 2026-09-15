import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { haltung } from "@/lib/data/practice";

export function Haltung() {
  return (
    <section id="ansatz" aria-labelledby="ansatz-heading" className="scroll-mt-20 bg-ink py-20 text-offwhite sm:py-28">
      <Container>
        <SectionHeading eyebrow={haltung.eyebrow} title={haltung.title} description={haltung.text} light />

        <div className="mt-14 grid gap-8 border-t border-offwhite/15 pt-10 sm:grid-cols-3">
          {haltung.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <p className="font-heading text-sm font-semibold text-lime">0{index + 1}</p>
              <h3 className="mt-3 font-heading text-xl font-semibold">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/70">{point.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
