import { practice } from "@/lib/data/practice";
import { services } from "@/lib/data/services";
import { homeFaq } from "@/lib/data/faq";

const baseUrl = "https://kontur-ergotherapie.example";

/**
 * Strukturierte Daten für die Startseite: LocalBusiness/MedicalBusiness,
 * Service-Liste und FAQPage. Fiktive Demo-Angaben, analog zur restlichen
 * Seite bewusst von der Indexierung ausgeschlossen (siehe robots.ts).
 */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalBusiness",
        "@id": `${baseUrl}/#business`,
        name: practice.name,
        description: practice.seoLine,
        url: baseUrl,
        telephone: practice.phone,
        email: practice.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: practice.addressLine,
          addressLocality: "Berlin",
          addressCountry: "DE",
        },
        openingHoursSpecification: practice.hours.map((entry) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: entry.label,
          opens: entry.value.split("–")[0]?.trim(),
          closes: entry.value.split("–")[1]?.replace("Uhr", "").trim(),
        })),
        makesOffer: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            url: `${baseUrl}/${service.slug}`,
            description: service.teaser,
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: homeFaq.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: entry.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
