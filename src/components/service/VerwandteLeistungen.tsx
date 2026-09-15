import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import type { Service } from "@/lib/data/services";

export function VerwandteLeistungen({ services }: { services: Service[] }) {
  if (services.length === 0) return null;

  return (
    <section className="bg-offwhite py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Verwandte Leistungen" title="Das könnte ebenfalls passen." />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2" role="list">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Reveal delay={index * 100}>
                <Link
                  href={`/${service.slug}`}
                  className="group block border border-ink/10 p-6 transition-colors hover:border-cobalt"
                >
                  <span className="font-heading text-sm font-semibold text-ink/30">{service.number}</span>
                  <h3 className="mt-2 font-heading text-xl font-semibold text-ink group-hover:text-cobalt">
                    {service.navTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{service.teaser}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cobalt">
                    Mehr erfahren
                    <svg viewBox="0 0 12 12" aria-hidden="true" className="h-3 w-3">
                      <path d="M2 6h8M6 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
