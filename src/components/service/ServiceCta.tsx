import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { Service } from "@/lib/data/services";

export function ServiceCta({ service }: { service: Service }) {
  return (
    <section className="border-t border-offwhite/10 bg-ink py-16 text-offwhite sm:py-20">
      <Container className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-lime">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-lime" />
            Termin & Verordnung
          </p>
          <h2 className="font-heading text-2xl font-semibold sm:text-3xl">
            Bereit für den ersten Schritt: {service.navTitle}?
          </h2>
        </div>
        <Button href="/#kontakt" variant="on-dark">
          Termin buchen
        </Button>
      </Container>
    </section>
  );
}
