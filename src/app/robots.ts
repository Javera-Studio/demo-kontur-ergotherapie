import type { MetadataRoute } from "next";

// Next.js 16 + `output: "export"`: Metadata-Routen müssen explizit als
// statisch markiert werden.
export const dynamic = "force-static";

// Fiktive Demo-Praxis: Indexierung vollständig ausschließen. Sitemap.ts
// bleibt trotzdem vorhanden, um die vorgesehene mehrseitige Architektur
// als Konzeptstudie sichtbar zu machen.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
