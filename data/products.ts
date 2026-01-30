export type Product = {
  slug: string;
  name: string;
  category: "Hydraulic Submersible Dredge Pump" | "Excavator Cutter Head";
  short: string;
  heroImage: string;
  specs: { label: string; value: string }[];
  faq: { q: string; a: string }[];
  pdf: { en: string; fr: string; de: string };
};

export const products: Product[] = [
  {
    slug: "hds-110",
    name: "HDS 110",
    category: "Hydraulic Submersible Dredge Pump",
    short: "Hydraulic submersible dredge pump for excavator/crane mounting—built for abrasive sand, gravel, and slurry.",
    heroImage: "/images/products/hds-110.jpg",
    specs: [
      { label: "Typical flow range", value: "80 – 550 m³/h" },
      { label: "Maximum head", value: "Approx. 40 m" },
      { label: "Discharge", value: "6\" / 8\"" }
    ],
    faq: [
      { q: "What is the flow rate of the HDS 110 dredge pump?", a: "Approximately 80–550 m³/h depending on discharge size, speed and slurry characteristics." }
    ],
    pdf: {
      en: "HDS-110-Hydraulic-Submersible-Dredge-Pump-EN.pdf",
      fr: "HDS-110-Pompe-de-dragage-submersible-hydraulique-FR.pdf",
      de: "HDS-110-Hydraulische-Tauch-Baggerpumpe-DE.pdf"
    }
  },
  {
    slug: "hds-125",
    name: "HDS 125",
    category: "Hydraulic Submersible Dredge Pump",
    short: "Higher-production hydraulic dredge pump for abrasive slurry with controlled head and strong wear performance.",
    heroImage: "/images/products/hds-125.jpg",
    specs: [
      { label: "Typical flow range", value: "120 – 650 m³/h" },
      { label: "Maximum head", value: "Approx. 42 m" },
      { label: "Discharge", value: "6\" / 8\"" }
    ],
    faq: [
      { q: "What is the flow rate of the HDS 125 dredge pump?", a: "Approximately 120–650 m³/h depending on discharge size, head and slurry properties." }
    ],
    pdf: {
      en: "HDS-125-Hydraulic-Submersible-Dredge-Pump-EN.pdf",
      fr: "HDS-125-Pompe-de-dragage-submersible-hydraulique-FR.pdf",
      de: "HDS-125-Hydraulische-Tauch-Baggerpumpe-DE.pdf"
    }
  },
  {
    slug: "hds-125l",
    name: "HDS 125L",
    category: "Hydraulic Submersible Dredge Pump",
    short: "Long configuration variant optimized for deeper dredging and special mounting geometry while maintaining stable intake conditions.",
    heroImage: "/images/products/hds-125l.jpg",
    specs: [
      { label: "Typical flow range", value: "150 – 650 m³/h" },
      { label: "Maximum head", value: "Approx. 48 m" },
      { label: "Discharge", value: "6\" / 8\"" }
    ],
    faq: [
      { q: "What is the difference between HDS 125 and HDS 125L?", a: "HDS 125L is an extended configuration for depth and mounting geometry requirements." }
    ],
    pdf: {
      en: "HDS-125L-Hydraulic-Submersible-Dredge-Pump-EN.pdf",
      fr: "HDS-125L-Pompe-de-dragage-submersible-hydraulique-FR.pdf",
      de: "HDS-125L-Hydraulische-Tauch-Baggerpumpe-DE.pdf"
    }
  },
  {
    slug: "hds-160m",
    name: "HDS 160M",
    category: "Hydraulic Submersible Dredge Pump",
    short: "Mid- to high-production dredge pump for demanding abrasive slurry applications (10\" discharge).",
    heroImage: "/images/products/hds-160m.jpg",
    specs: [
      { label: "Typical flow range", value: "250 – 800 m³/h" },
      { label: "Maximum head", value: "Approx. 40 m" },
      { label: "Discharge", value: "10\"" }
    ],
    faq: [
      { q: "What discharge size does HDS 160M use?", a: "Typically supplied with 10\" discharge." }
    ],
    pdf: {
      en: "HDS-160M-Hydraulic-Submersible-Dredge-Pump-EN.pdf",
      fr: "HDS-160M-Pompe-de-dragage-submersible-hydraulique-FR.pdf",
      de: "HDS-160M-Hydraulische-Tauch-Baggerpumpe-DE.pdf"
    }
  },
  {
    slug: "hds-160",
    name: "HDS 160",
    category: "Hydraulic Submersible Dredge Pump",
    short: "High-capacity dredge pump engineered for large-scale dredging and mining operations requiring high production (10\" discharge).",
    heroImage: "/images/products/hds-160.jpg",
    specs: [
      { label: "Typical flow range", value: "300 – 900 m³/h" },
      { label: "Maximum head", value: "Approx. 42 m" },
      { label: "Discharge", value: "10\"" }
    ],
    faq: [
      { q: "What is the maximum capacity of the HDS 160 dredge pump?", a: "Up to approximately 900 m³/h depending on head and slurry properties." }
    ],
    pdf: {
      en: "HDS-160-Hydraulic-Submersible-Dredge-Pump-EN.pdf",
      fr: "HDS-160-Pompe-de-dragage-submersible-hydraulique-FR.pdf",
      de: "HDS-160-Hydraulische-Tauch-Baggerpumpe-DE.pdf"
    }
  },
  {
    slug: "exhyc-4200-800",
    name: "EXHYC 4200-800",
    category: "Excavator Cutter Head",
    short: "800 mm excavator cutter head designed for compact sand, clay and controlled mixing to stabilize pump feed and increase production.",
    heroImage: "/images/products/exhyc-4200-800.jpg",
    specs: [
      { label: "Diameter", value: "800 mm" },
      { label: "Teeth", value: "9" },
      { label: "Continuous duty", value: "250 bar – 4200 Nm" }
    ],
    faq: [
      { q: "What is the function of an excavator cutter head in dredging?", a: "It loosens soil and stabilizes material feed into the pump to improve production and reduce clogging." }
    ],
    pdf: {
      en: "EXHYC-4200-800-Excavator-Cutterhead-EN.pdf",
      fr: "EXHYC-4200-800-Tête-de-coupe-pour-pelle-FR.pdf",
      de: "EXHYC-4200-800-Schneidkopf-für-Bagger-DE.pdf"
    }
  },
  {
    slug: "exhyc-4500-1000",
    name: "EXHYC 4500-1000",
    category: "Excavator Cutter Head",
    short: "1000 mm cutter head intended for higher cutting forces and stable feed in medium to heavy duty dredging.",
    heroImage: "/images/products/exhyc-4500-1000.jpg",
    specs: [
      { label: "Diameter", value: "1000 mm" },
      { label: "Teeth", value: "18" },
      { label: "Continuous duty", value: "250 bar – 4500 Nm" }
    ],
    faq: [
      { q: "What soils are EXHYC cutter heads suitable for?", a: "Sand, clay and compacted soils depending on model and tooth configuration." }
    ],
    pdf: {
      en: "EXHYC-4500-1000-Excavator-Cutterhead-EN.pdf",
      fr: "EXHYC-4500-1000-Tête-de-coupe-pour-pelle-FR.pdf",
      de: "EXHYC-4500-1000-Schneidkopf-für-Bagger-DE.pdf"
    }
  },
  {
    slug: "exhyc-4500-1200",
    name: "EXHYC 4500-1200",
    category: "Excavator Cutter Head",
    short: "1200 mm heavy-duty cutter head for aggressive cutting and high production feeding in demanding dredging and reclamation projects.",
    heroImage: "/images/products/exhyc-4500-1200.jpg",
    specs: [
      { label: "Diameter", value: "1200 mm" },
      { label: "Teeth", value: "21" },
      { label: "Continuous duty", value: "250 bar – 4500 Nm" }
    ],
    faq: [
      { q: "How do we select between 4500-1000 and 4500-1200?", a: "Selection depends on target production, excavator hydraulics and soil conditions." }
    ],
    pdf: {
      en: "EXHYC-4500-1200-Excavator-Cutterhead-EN.pdf",
      fr: "EXHYC-4500-1200-Tête-de-coupe-pour-pelle-FR.pdf",
      de: "EXHYC-4500-1200-Schneidkopf-für-Bagger-DE.pdf"
    }
  }
];
