import Link from "next/link";
import { Container } from "@/components/ui/Container";

const options = [
  { label: "Kind", slug: "ergotherapie-kinder" },
  { label: "Hand", slug: "handtherapie" },
  { label: "Neurologie", slug: "ergotherapie-neurologie" },
  { label: "Alltag", slug: "ergotherapie-psychische-gesundheit" },
] as const;

/**
 * Interaktiver Leistungsfinder: eine gezielte, funktionale Interaktion
 * (kein Dekor) – führt Besucher:innen anhand eines Schlagworts direkt zur
 * passenden Leistungsseite. Als Link statt Button/JS-Navigation umgesetzt,
 * damit die Auswahl auch ohne JavaScript und für Suchmaschinen funktioniert.
 */
export function Finder() {
  return (
    <section aria-labelledby="finder-heading" className="border-b border-silver bg-ice py-12 sm:py-14">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 id="finder-heading" className="font-heading text-xl font-semibold text-ink sm:text-2xl">
            Wobei können wir Sie unterstützen?
          </h2>
          <ul className="flex flex-wrap gap-3" role="list">
            {options.map((option) => (
              <li key={option.slug}>
                <Link
                  href={`/${option.slug}`}
                  className="inline-flex min-h-12 items-center gap-2 border border-ink/15 bg-offwhite px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-cobalt hover:text-cobalt"
                >
                  {option.label}
                  <svg viewBox="0 0 12 12" aria-hidden="true" className="h-3 w-3">
                    <path d="M2 6h8M6 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
