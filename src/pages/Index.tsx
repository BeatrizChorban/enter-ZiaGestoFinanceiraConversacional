import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import StatsStrip from "@/components/landing/StatsStrip";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Persona from "@/components/landing/Persona";
import Pricing from "@/components/landing/Pricing";
import Waitlist from "@/components/landing/Waitlist";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";

const Index = () => (
  <div className="relative min-h-full bg-background font-sans text-foreground">
    <div className="grain" aria-hidden />
    <Navbar />
    <main>
      <Hero />
      <StatsStrip />
      <Problem />
      <HowItWorks />
      <Features />
      <Persona />
      <Pricing />
      <Waitlist />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Index;
