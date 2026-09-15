import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PracticeImage } from "@/components/ui/PracticeImage";
import { Reveal } from "@/components/ui/Reveal";

const raeume = [
  {
    alt: "Eingangsbereich mit Rezeption, Sitzgelegenheiten und KONTUR-Logo an der Wand",
    src: "/images/praxis-eingang.jpg",
  },
  {
    alt: "Empfang und Wartebereich mit Sitzgruppe, Schreibtisch und KONTUR-Logo an der Wand",
    src: "/images/praxis-empfang.jpg",
  },
  {
    alt: "Therapieraum mit Wandmodulen für Fein- und Handmotorik sowie Behandlungsliege",
    src: "/images/praxis-handtherapie-raum.jpg",
  },
  {
    alt: "Bewegungsraum für Kinder mit Kletterwand, Hängeschaukel und Therapiematerial",
    src: "/images/praxis-bewegungsraum-kinder.jpg",
  },
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {raeume.map((raum, index) => (
            <Reveal key={raum.src} variant="scale-in" delay={index * 110}>
              <PracticeImage aspect="4/5" src={raum.src} alt={raum.alt} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
