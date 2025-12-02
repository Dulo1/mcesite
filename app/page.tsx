import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import PolyureaShowcase from "@/components/PolyureaShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ProcessTimeline />
      <PolyureaShowcase />
      {/* Other sections will be added here */}
    </main>
  );
}
