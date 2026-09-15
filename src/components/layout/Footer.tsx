import Link from "next/link";
import { practice } from "@/lib/data/practice";
import { mainNav, legalNav } from "@/lib/nav";
import { services } from "@/lib/data/services";
import { LogoMark } from "@/components/layout/LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-offwhite">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-1">
          <LogoMark className="h-8 w-auto" onDark />
          <p className="mt-4 text-sm text-offwhite/70">{practice.claim}</p>
        </div>

        <nav aria-label="Footer-Navigation Leistungen">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-lime">Leistungen</p>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="text-sm text-offwhite/70 transition-colors hover:text-offwhite"
                >
                  {service.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer-Navigation Praxis">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-lime">Praxis</p>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-offwhite/70 transition-colors hover:text-offwhite">
                  {item.label}
                </Link>
              </li>
            ))}
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-offwhite/70 transition-colors hover:text-offwhite">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-lime">Kontakt</p>
          <ul className="space-y-2 text-sm text-offwhite/70">
            <li>{practice.addressLine}</li>
            <li>
              <a href={`tel:${practice.phone}`} className="transition-colors hover:text-offwhite">
                {practice.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${practice.email}`} className="break-all transition-colors hover:text-offwhite">
                {practice.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-offwhite/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-offwhite/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-semibold text-offwhite/80">Demo-Website – fiktives Zentrum für Ergotherapie</p>
          <p>Alle Namen, Inhalte und Angaben sind frei erfunden.</p>
        </div>
      </div>
    </footer>
  );
}
