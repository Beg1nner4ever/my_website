export interface Client {
  name: string;
  description: string;
  industry: string;
  logo: string;
}

export const clients: Client[] = [
  {
    name: "BNP Paribas",
    description:
      "Process mining & data quality analysis on a 14.5GB transaction dataset",
    industry: "Banking",
    logo: "/logos/bnp-paribas.svg",
  },
  {
    name: "Edmond de Rothschild",
    description:
      "Competitive intelligence & sales strategy dashboard for asset management",
    industry: "Finance",
    logo: "/logos/edmond-de-rothschild.svg",
  },
  {
    name: "L'Oréal",
    description: "Sustainability & marketing analysis",
    industry: "Retail",
    logo: "/logos/loreal.svg",
  },
  {
    name: "Louis Vuitton",
    description:
      "Data-driven strategy to improve online sales performance",
    industry: "Luxury",
    logo: "/logos/louis-vuitton.svg",
  },
  {
    name: "Carrefour",
    description:
      "Systemic analysis of optimal product distribution across store formats in France",
    industry: "Retail",
    logo: "/logos/carrefour.svg",
  },
  {
    name: "Generali",
    description: "Data analysis & business intelligence",
    industry: "Insurance",
    logo: "/logos/generali.svg",
  },
  {
    name: "MINARM",
    description:
      "Data-driven optimization of recruitment campaigns across France",
    industry: "Defense",
    logo: "/logos/minarm.svg",
  },
  {
    name: "Asmodee",
    description: "Data-driven business analysis",
    industry: "Entertainment",
    logo: "/logos/asmodee.svg",
  },
];
