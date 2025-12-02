import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import ServicesGrid from "../components/ServicesGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      <Hero />
      <TrustBar />
      <ServicesGrid />
      {/* Other sections will be added here */}
    </main>
  );
}
