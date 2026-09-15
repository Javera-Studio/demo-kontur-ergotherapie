import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PracticeImage } from "@/components/ui/PracticeImage";
import type { Service } from "@/lib/data/services";

export function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="bg-ink text-offwhite">
      <Container className="pb-14 pt-8 sm:pb-16">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-offwhite/60">
          <Link href="/" className="hover:text-offwhite">
            Startseite
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <Link href="/#leistungen" className="hover:text-offwhite">
            Leistungen
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span className="text-offwhite">{service.navTitle}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p
              className="hero-in mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-lime"
              style={{ animationDelay: "0ms" }}
            >
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 bg-lime" />
              {service.heroKicker}
            </p>
            <h1
              className="hero-in font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "90ms" }}
            >
              {service.title}
            </h1>
            <p
              className="hero-in mt-6 max-w-xl text-base leading-relaxed text-offwhite/75 sm:text-lg"
              style={{ animationDelay: "180ms" }}
            >
              {service.heroText}
            </p>
            <div className="hero-in mt-9 flex flex-wrap gap-4" style={{ animationDelay: "270ms" }}>
              <Button href="/#kontakt" variant="on-dark">
                Termin buchen
              </Button>
            </div>
          </div>

          <PracticeImage
            aspect="4/3"
            dark
            priority
            src={service.heroImage}
            alt={service.imageAlt}
            className="hero-in"
            style={{ animationDelay: "160ms" }}
          />
        </div>
      </Container>
    </section>
  );
}
