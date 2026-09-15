import type { MetadataRoute } from "next";
import { services } from "@/lib/data/services";

// Next.js 16 + `output: "export"`: Metadata-Routen müssen explizit als
// statisch markiert werden.
export const dynamic = "force-static";

const baseUrl = "https://kontur-ergotherapie.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    ...services.map((service) => `/${service.slug}`),
    "/impressum",
    "/datenschutz",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
