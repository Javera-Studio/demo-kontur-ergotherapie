import { Hero } from "@/components/sections/Hero";
import { Finder } from "@/components/sections/Finder";
import { Schwerpunkte } from "@/components/sections/Schwerpunkte";
import { Haltung } from "@/components/sections/Haltung";
import { Praxisraeume } from "@/components/sections/Praxisraeume";
import { Team } from "@/components/sections/Team";
import { WegZurTherapie } from "@/components/sections/WegZurTherapie";
import { Kontakt } from "@/components/sections/Kontakt";
import { Faq } from "@/components/sections/Faq";
import { JsonLd } from "@/components/JsonLd";
import { homeFaq } from "@/lib/data/faq";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Finder />
      <Schwerpunkte />
      <Haltung />
      <Praxisraeume />
      <Team />
      <WegZurTherapie />
      <Kontakt />
      <Faq
        items={homeFaq}
        title="Häufige Fragen zu Ergotherapie"
        description="Antworten auf die häufigsten Fragen rund um Verordnung, Ablauf und Kosten."
      />
    </>
  );
}
