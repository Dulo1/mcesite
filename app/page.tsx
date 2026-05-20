import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import PartnerLogos from "@/components/PartnerLogos";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <PartnerLogos />
      <ContactForm />
    </main>
  );
}
