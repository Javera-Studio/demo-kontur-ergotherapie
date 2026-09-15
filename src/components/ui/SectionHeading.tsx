export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Für dunkle Sections (bg-ink). */
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p
          className={`mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] ${
            align === "center" ? "justify-center" : ""
          } ${light ? "text-lime" : "text-cobalt"}`}
        >
          <span aria-hidden="true" className={`inline-block h-1.5 w-1.5 ${light ? "bg-lime" : "bg-cobalt"}`} />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-heading text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-offwhite" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-offwhite/75" : "text-ink/70"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
