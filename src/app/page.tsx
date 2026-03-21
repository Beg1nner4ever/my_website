import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { BentoGrid } from "@/components/bento-grid";
import { Services } from "@/components/services";
import { TechMarquee } from "@/components/marquee";
import { Experience } from "@/components/experience";
import { Clients } from "@/components/clients";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <BentoGrid />
        <Services />
        <TechMarquee />
        <Experience />
        <Clients />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
