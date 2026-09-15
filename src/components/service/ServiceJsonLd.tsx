import type { Service } from "@/lib/data/services";
import { practice } from "@/lib/data/practice";

const baseUrl = "https://kontur-ergotherapie.example";

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalTherapy",
        name: service.title,
        description: service.metaDescription,
        url: `${baseUrl}/${service.slug}`,
        provider: {
          "@type": "MedicalBusiness",
          name: practice.name,
          url: baseUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faq.map((entry) => ({
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
