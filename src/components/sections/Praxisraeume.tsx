import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Room = {
  number: string;
  label: string;
  alt: string;
  src: string;
  objectPosition: string;
  /** Grid-Spaltenbreite ab lg (12-Spalten-Grid). */
  colSpan: "lg:col-span-7" | "lg:col-span-5";
  /** Mobile Seitenverhältnis + feste Bildhöhe ab lg. */
  sizeClass: string;
  reveal: "up" | "left" | "right";
};

const rooms: Room[] = [
  {
    number: "01",
    label: "Empfang",
    alt: "Eingangsbereich mit Rezeption, Sitzgelegenheiten und KONTUR-Logo an der Wand",
    src: "/images/praxis-eingang.jpg",
    objectPosition: "object-[38%_42%]",
    colSpan: "lg:col-span-7",
    sizeClass: "aspect-[4/3] lg:aspect-auto lg:h-[420px]",
    reveal: "up",
  },
  {
    number: "02",
    label: "Gesprächsraum",
    alt: "Gesprächsraum mit Sitzgruppe, rundem Tisch und Blick nach draußen",
    src: "/images/praxis-empfang.jpg",
    objectPosition: "object-[45%_55%]",
    colSpan: "lg:col-span-5",
    sizeClass: "aspect-[16/9] lg:aspect-auto lg:h-[420px]",
    reveal: "right",
  },
  {
    number: "03",
    label: "Handtherapie & Alltagstraining",
    alt: "Behandlungsraum mit Wandmodulen für Fein- und Handmotorik sowie Behandlungsliege",
    src: "/images/praxis-handtherapie-raum.jpg",
    objectPosition: "object-[62%_50%]",
    colSpan: "lg:col-span-5",
    sizeClass: "aspect-[16/9] lg:aspect-auto lg:h-[440px]",
    reveal: "left",
  },
  {
    number: "04",
    label: "Pädiatrischer Bewegungsraum",
    alt: "Bewegungsraum für Kinder mit Kletterwand, Hängeschaukel und Therapiematerial",
    src: "/images/praxis-bewegungsraum-kinder.jpg",
    objectPosition: "object-[55%_45%]",
    colSpan: "lg:col-span-7",
    sizeClass: "aspect-[4/3] lg:aspect-auto lg:h-[440px]",
    reveal: "up",
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

        <div className="mt-12 flex flex-col gap-4 lg:grid lg:grid-cols-12 lg:gap-6">
          {rooms.map((room, index) => (
            <Reveal
              key={room.src}
              variant={room.reveal === "up" ? "fly-up" : room.reveal === "left" ? "fly-left" : "fly-right"}
              distance={room.reveal === "up" ? 26 : undefined}
              delay={index * 90}
              className={`${room.colSpan} ${
                room.reveal === "left" ? "lg:[--fly-in-x:-26px]" : room.reveal === "right" ? "lg:[--fly-in-x:26px]" : ""
              }`}
            >
              <div className={`group relative overflow-hidden rounded-md ${room.sizeClass}`}>
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className={`object-cover transition-transform duration-[650ms] ease-out group-hover:scale-[1.02] ${room.objectPosition}`}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/70 to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute bottom-4 left-4 flex items-center gap-2 text-sm font-semibold text-offwhite transition-transform duration-500 ease-out group-hover:translate-x-1">
                  <span className="text-lime">{room.number}</span>
                  <span aria-hidden="true">—</span>
                  <span>{room.label}</span>
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
