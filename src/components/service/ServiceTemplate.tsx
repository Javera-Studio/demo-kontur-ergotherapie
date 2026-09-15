import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceListSection } from "@/components/service/ServiceListSection";
import { ServiceAblauf } from "@/components/service/ServiceAblauf";
import { VerwandteLeistungen } from "@/components/service/VerwandteLeistungen";
import { ServiceCta } from "@/components/service/ServiceCta";
import { ServiceJsonLd } from "@/components/service/ServiceJsonLd";
import { Faq } from "@/components/sections/Faq";
import { getRelatedServices, type Service } from "@/lib/data/services";

/**
 * Gemeinsames Seitensystem aller sechs Leistungsseiten: individuelle Texte
 * und Fragen pro Leistung (siehe lib/data/services.ts), aber ein
 * wiederverwendbares Layout statt sechs unterschiedlicher Seitenbaukästen.
 */
export function ServiceTemplate({ service }: { service: Service }) {
  const related = getRelatedServices(service);

  return (
    <>
      <ServiceJsonLd service={service} />
      <ServiceHero service={service} />
      <ServiceListSection eyebrow="Für wen geeignet" title="Für wen diese Behandlung geeignet sein kann." items={service.fuerWen} />
      <ServiceListSection
        eyebrow="Anliegen & Einsatzbereiche"
        title="Typische Anliegen im Praxisalltag."
        items={service.anliegen}
        tone="ice"
      />
      <ServiceListSection eyebrow="Ziele der Ergotherapie" title="Woran wir gemeinsam arbeiten." items={service.ziele} />
      <ServiceAblauf ablauf={service.ablauf} />
      <Faq items={service.faq} eyebrow="FAQ" title={`Häufige Fragen zu ${service.navTitle}`} />
      <VerwandteLeistungen services={related} />
      <ServiceCta service={service} />
    </>
  );
}
