import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorksSimulator } from "@/components/HowItWorksSimulator";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { PricingMatrix } from "@/components/PricingMatrix";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-teal-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorksSimulator />
        <ArchitectureSection />
        <PricingMatrix />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
