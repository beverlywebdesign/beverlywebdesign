import { SITE } from "@/lib/site";

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneSchema,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    location: {
      "@type": "Place",
      name: SITE.neighborhood,
      address: {
        "@type": "PostalAddress",
        addressLocality: SITE.city,
        addressRegion: SITE.region,
        addressCountry: SITE.country,
      },
    },
    areaServed: [
      {
        "@type": "Neighborhood",
        name: SITE.neighborhood,
        containedInPlace: {
          "@type": "City",
          name: SITE.city,
        },
      },
      {
        "@type": "City",
        name: SITE.city,
      },
      {
        "@type": "Place",
        name: "Chicagoland",
      },
    ],
  };
}
