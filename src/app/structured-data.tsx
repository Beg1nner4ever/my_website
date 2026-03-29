export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Philipp Widenfels",
    url: "https://beg1nner4ever.com",
    jobTitle: "Applied AI Engineer & Data Scientist",
    description:
      "Freelance Applied AI Engineer and Data Scientist based in Europe. Building intelligent systems, ML pipelines, and full-stack applications.",
    sameAs: [
      "https://github.com/Beg1nner4ever",
      "https://www.linkedin.com/in/pwidenfels/",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Full-Stack Development",
      "AI Agents",
      "Python",
      "TypeScript",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Mantu",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Philipp Widenfels",
    url: "https://beg1nner4ever.com",
    description:
      "Portfolio of Philipp Widenfels — Applied AI Engineer & Data Scientist.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
