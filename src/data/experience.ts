export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    period: "Present",
    role: "AI Engineer & AI Board Associate",
    company: "Mantu",
    description:
      "Leading AI strategy and implementation across enterprise clients in the consulting space. Driving the AI board initiatives and mentoring teams on AI adoption.",
    tags: ["AI Strategy", "MLOps", "Consulting", "Leadership"],
  },
  {
    period: "Previous",
    role: "Data Scientist / AI Engineer",
    company: "Banking & Finance Projects",
    description:
      "Delivered multiple data analysis and AI implementation projects for major financial institutions. Built predictive models, automated reporting, and risk assessment systems.",
    tags: ["Python", "ML Pipelines", "Data Analysis", "Finance"],
  },
  {
    period: "Previous",
    role: "Data & AI Projects",
    company: "Retail Industry",
    description:
      "Implemented AI solutions for retail clients including demand forecasting, customer segmentation, and automated recommendation systems.",
    tags: ["Forecasting", "Segmentation", "Automation", "Retail"],
  },
  {
    period: "Education",
    role: "Bachelor of Science",
    company: "Data Science",
    description:
      "Comprehensive foundation in statistics, machine learning, programming, and data engineering. Built the analytical and technical foundation for applied AI work.",
    tags: ["Statistics", "Machine Learning", "Programming", "Data Engineering"],
  },
];
