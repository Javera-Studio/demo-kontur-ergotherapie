import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServiceListSection({
  eyebrow,
  title,
  items,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  items: string[];
  tone?: "light" | "ice";
}) {
  return (
    <section className={`py-16 sm:py-20 ${tone === "ice" ? "border-t border-silver bg-ice" : "bg-offwhite"}`}>
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="grid gap-4 border-t border-ink/10 pt-8 sm:grid-cols-2" role="list">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-cobalt" />
              <span className="text-base leading-relaxed text-ink/80">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
