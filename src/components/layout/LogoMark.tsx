/**
 * Rein typografische Wortmarke, solange kein finales Logo vorliegt. Inline
 * als SVG-<text> gerendert, damit die Marke die per next/font geladene
 * Headline-Schrift der Seite nutzt statt auf den SVG-internen
 * Font-Fallback zurückzufallen. Der begleitende Winkel-Strich zitiert das
 * "KONTUR"-Motiv (siehe KonturLine) im Kleinformat.
 *
 * Späteres finales Logo: /images/kontur-logo.svg
 */
export function LogoMark({
  className = "",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const textColor = onDark ? "#FAFBFD" : "var(--color-ink)";
  const accentColor = "var(--color-cobalt)";

  return (
    <svg viewBox="0 0 178 32" role="img" aria-labelledby="logo-title" className={className}>
      <title id="logo-title">KONTUR Zentrum für Ergotherapie</title>
      <path
        d="M2 26 L10 6 L14 26"
        fill="none"
        stroke={accentColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="22"
        y="24"
        fill={textColor}
        style={{ font: "700 22px var(--font-heading), Arial, sans-serif" }}
        letterSpacing="0.5"
      >
        KONTUR
      </text>
    </svg>
  );
}
