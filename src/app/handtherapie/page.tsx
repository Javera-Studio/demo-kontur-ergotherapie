import type { Metadata } from "next";
import { ServiceTemplate } from "@/components/service/ServiceTemplate";
import { getServiceBySlug } from "@/lib/data/services";

const service = getServiceBySlug("handtherapie")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    locale: "de_DE",
    type: "website",
  },
};

export default function Page() {
  return <ServiceTemplate service={service} />;
}
