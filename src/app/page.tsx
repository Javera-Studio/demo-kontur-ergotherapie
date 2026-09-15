import { Hero } from "@/components/sections/Hero";
import { Finder } from "@/components/sections/Finder";
import { Schwerpunkte } from "@/components/sections/Schwerpunkte";
import { StickyScrollSection } from "@/components/sections/StickyScrollSection";
import { Haltung } from "@/components/sections/Haltung";
import { Praxisraeume } from "@/components/sections/Praxisraeume";
import { Team } from "@/components/sections/Team";
import { Verordnung } from "@/components/sections/Verordnung";
import { Ablauf } from "@/components/sections/Ablauf";
import { Faq } from "@/components/sections/Faq";
import { Kontakt } from "@/components/sections/Kontakt";
import { JsonLd } from "@/components/JsonLd";
import { homeFaq } from "@/lib/data/faq";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Finder />
      <Schwerpunkte />
      <StickyScrollSection
        src="/images/Parallax1.png"
        alt="Ergotherapeutin unterstützt eine ältere Person beim Greifen einer Tasse"
        objectPosition="object-[75%_50%] sm:object-center"
        line1={["Ergotherapie beginnt dort,", "wo Alltag wieder möglich wird."]}
        line2={["Selbstständigkeit zurückgewinnen.", "Sicherheit entwickeln.", "Lebensqualität erhalten."]}
      />
      <Haltung />
      <Praxisraeume />
      <Team />
      <StickyScrollSection
        src="/images/Parallax2.png"
        alt="Kinderhand übt an einem therapeutischen Steckbrett für Feinmotorik"
        objectPosition="object-[60%_60%] sm:object-center"
        line1={["Jeder Fortschritt beginnt", "mit einem persönlichen Ziel."]}
        line2={["Wir begleiten Kinder, Erwachsene und Senioren", "auf ihrem individuellen Weg."]}
        showButton
      />
      <Verordnung />
      <Ablauf />
      <Kontakt />
      <Faq
        items={homeFaq}
        title="Häufige Fragen zu Ergotherapie"
        description="Antworten auf die häufigsten Fragen rund um Verordnung, Ablauf und Kosten."
      />
    </>
  );
}
