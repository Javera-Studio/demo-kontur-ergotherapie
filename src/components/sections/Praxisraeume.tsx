import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal";

const raeume = [
  { label: "Empfang und Wartebereich", path: "/images/kontur-empfang.webp" },
  { label: "Therapieraum für Feinmotorik und Handtherapie", path: "/images/kontur-handtherapie-raum.webp" },
  { label: "Bewegungsraum für Kinder", path: "/images/kontur-bewegungsraum.webp" },
];

export function Praxisraeume() {
  return (
    <section id="praxis" aria-labelledby="praxis-heading" className="scroll-mt-20 bg-offwhite py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Moderne Praxisräume"
          title="Räume, die zum Handeln einladen."
          description="Helle, klar strukturierte Räume mit moderner Ausstattung – gestaltet für konzentriertes Arbeiten ebenso wie für spielerisches Training."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {raeume.map((raum, index) => (
            <Reveal key={raum.path} variant="scale-in" delay={index * 110}>
              <ImagePlaceholder aspect="4/5" label={raum.label} futurePath={raum.path} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
