export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Philipp Widenfels",
    url: "https://beg1nner4ever.com",
    jobTitle: "Applied AI & Product Engineer",
    description:
      "Independent product engineer in Paris designing and shipping applied AI systems, internal tools, and customer products.",
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
      "Proof-led portfolio of Philipp Widenfels — Applied AI & Product Engineer.",
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
