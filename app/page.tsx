import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import MobileApps from "@/components/MobileApps";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <MobileApps />
      <TechStack />
      <Contact />
    </main>
  );
}
