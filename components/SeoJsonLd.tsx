import type { Product } from "@/data/products";

type Props =
  | { type: "organization" }
  | { type: "product"; product: Product; locale: "en" | "fr" | "de" }
  | { type: "faq"; faq: { q: string; a: string }[] };

const BASE = "https://www.hdsbelgium.com";

export default function SeoJsonLd(props: Props) {
  let json: any = null;

  if (props.type === "organization") {
    json = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "HDS Belgium",
      url: BASE,
      description: "Manufacturer of dredging pumps, cutter heads and hydraulic dredging systems.",
      address: { "@type": "PostalAddress", addressCountry: "BE" }
    };
  }

  if (props.type === "product") {
    const p = props.product;
    const pdfFile = p.pdf?.[props.locale];
    const pdfUrl = pdfFile ? `${BASE}/pdfs/${pdfFile}` : null;

    json = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.name,
      description: p.short,
      brand: { "@type": "Brand", name: "HDS Belgium" },
      category: p.category,
      image: p.heroImage ? [`${BASE}${p.heroImage}`] : undefined,
      subjectOf: pdfUrl
        ? {
            "@type": "DigitalDocument",
            name: `${p.name} Datasheet`,
            fileFormat: "application/pdf",
            encoding: {
              "@type": "MediaObject",
              contentUrl: pdfUrl,
              encodingFormat: "application/pdf"
            },
            publisher: { "@type": "Organization", name: "HDS Belgium", url: BASE }
          }
        : undefined
    };
  }

  if (props.type === "faq") {
    json = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    };
  }

  if (!json) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
