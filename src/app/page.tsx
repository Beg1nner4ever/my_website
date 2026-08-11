import { Hero } from "@/components/sections/hero";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <FeaturedWork />
      <ServicesPreview />
      <CTASection />
    </>
  );
}
