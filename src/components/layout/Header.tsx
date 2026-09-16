"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { mainNav } from "@/lib/nav";
import { services } from "@/lib/data/services";
import { LogoMark } from "@/components/layout/LogoMark";

const SCROLL_THRESHOLD = 24;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-offwhite/95 backdrop-blur transition-shadow duration-300 ease-out ${
        scrolled ? "border-silver shadow-[0_1px_10px_-4px_rgba(16,21,34,0.15)]" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:py-7">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Zur Startseite von KONTUR">
          <LogoMark className="h-8 w-auto sm:h-9" />
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {mainNav.map((item) =>
            item.href === "/#leistungen" ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-cobalt"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className="h-3 w-3 text-ink/50 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  >
                    <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="border border-silver bg-offwhite p-2 shadow-[0_16px_32px_-16px_rgba(16,21,34,0.28)]">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        className="flex items-center gap-3 px-3 py-2.5 text-sm text-ink transition-colors hover:bg-ice hover:text-cobalt"
                      >
                        <span className="font-heading text-xs font-semibold text-ink/30">{service.number}</span>
                        {service.navTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink transition-colors hover:text-cobalt"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden shrink-0 lg:flex">
          <Link
            href="/#kontakt"
            className="inline-flex min-h-11 items-center justify-center bg-ink px-5 py-2.5 text-sm font-semibold text-offwhite transition-colors hover:bg-cobalt"
          >
            Termin buchen
          </Link>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink/20 text-ink lg:hidden"
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div id="mobile-nav" hidden={!menuOpen} className="border-t border-silver bg-offwhite lg:hidden">
        <nav aria-label="Mobile Hauptnavigation" className="flex flex-col px-5 py-3">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="min-h-12 border-b border-silver py-3 text-base font-medium text-ink last:border-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-5 pb-5">
          <Link
            href="/#kontakt"
            onClick={() => setMenuOpen(false)}
            className="inline-flex min-h-12 w-full items-center justify-center bg-ink text-sm font-semibold text-offwhite"
          >
            Termin buchen
          </Link>
        </div>
      </div>
    </header>
  );
}
