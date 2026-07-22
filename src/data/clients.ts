export interface Client {
  name: string;
  description: string;
  industry: string;
  logo: string;
  /** Tailwind height class — compensates for wildly different logo aspect ratios */
  logoClass: string;
}

export const clients: Client[] = [
  {
    name: "Mantu",
    description:
      "AI strategy, implementation, and AI board initiatives across enterprise clients",
    industry: "Consulting",
    logo: "/logos/mantu.svg",
    logoClass: "h-5",
  },
  {
    name: "BNP Paribas",
    description:
      "Process mining & data quality analysis on a 14.5GB transaction dataset",
    industry: "Banking",
    logo: "/logos/bnp-paribas.svg",
    logoClass: "h-6",
  },
  {
    name: "Edmond de Rothschild",
    description:
      "Competitive intelligence & sales strategy dashboard for asset management",
    industry: "Finance",
    logo: "/logos/edmond-de-rothschild.svg",
    logoClass: "h-8",
  },
  {
    name: "L'Oréal",
    description: "Sustainability & marketing analysis",
    industry: "Retail",
    logo: "/logos/loreal.svg",
    logoClass: "h-7",
  },
  {
    name: "Louis Vuitton",
    description:
      "Data-driven strategy to improve online sales performance",
    industry: "Luxury",
    logo: "/logos/louis-vuitton.svg",
    logoClass: "h-4",
  },
  {
    name: "Carrefour",
    description:
      "Systemic analysis of optimal product distribution across store formats in France",
    industry: "Retail",
    logo: "/logos/carrefour.svg",
    logoClass: "h-9",
  },
  {
    name: "Generali",
    description: "Data analysis & business intelligence",
    industry: "Insurance",
    logo: "/logos/generali.svg",
    logoClass: "h-9",
  },
  {
    name: "MINARM",
    description:
      "Data-driven optimization of recruitment campaigns across France",
    industry: "Defense",
    logo: "/logos/minarm.svg",
    logoClass: "h-6",
  },
  {
    name: "Asmodee",
    description: "Data-driven business analysis",
    industry: "Entertainment",
    logo: "/logos/asmodee.svg",
    logoClass: "h-6",
  },
];
