import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion, type AccordionEntry } from "@/components/ui/Accordion";

export function Faq({
  items,
  title = "Häufige Fragen",
  eyebrow = "FAQ",
  description,
}: {
  items: AccordionEntry[];
  title?: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 bg-offwhite py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Accordion items={items} />
      </Container>
    </section>
  );
}
