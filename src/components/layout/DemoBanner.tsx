/**
 * Gut sichtbarer, aber dezent gestalteter Hinweis, dass es sich um eine
 * fiktive Demo-Praxis handelt. Rein statisch, keine Interaktivität nötig.
 */
export function DemoBanner() {
  return (
    <div className="bg-ink px-4 py-2 text-center text-xs font-medium tracking-wide text-offwhite sm:text-sm">
      Demo-Website – fiktives Zentrum für Ergotherapie
    </div>
  );
}
