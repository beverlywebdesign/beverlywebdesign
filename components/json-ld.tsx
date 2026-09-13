import { professionalServiceJsonLd } from "@/lib/schema";

export function JsonLd() {
  const data = professionalServiceJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
