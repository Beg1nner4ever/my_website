import { Hero } from "@/components/sections/hero";
import { ClientsStrip } from "@/components/sections/clients-strip";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { BlogPreview } from "@/components/sections/blog-preview";
import { CTASection } from "@/components/sections/cta-section";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <ClientsStrip />
      <ServicesPreview />
      <FeaturedWork />
      <BlogPreview posts={posts} />
      <CTASection />
    </>
  );
}
