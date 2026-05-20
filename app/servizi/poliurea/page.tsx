import type { Metadata } from "next";
import PolyureaBenefits from "@/components/PolyureaBenefits";
import PolyureaShowcase from "@/components/PolyureaShowcase";
import CaseStudies from "@/components/CaseStudies";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Poliurea a Spruzzo | Impermeabilizzazione Definitiva | Montagna Costruzioni",
  description: "Stop alle infiltrazioni senza demolire nulla. L'impermeabilizzazione definitiva in Poliurea a spruzzo ad alta tecnologia.",
};

export default function PoliureaPage() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      
      {/* Hero Section Dedicata */}
      <section className="bg-primary pt-32 pb-24 px-4 text-center border-b border-surface-muted/20">
        <div className="max-w-5xl mx-auto">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block font-body">
            Poliurea System
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
            Stop alle infiltrazioni. <br className="hidden md:block" />
            <span className="text-accent">Senza demolire nulla.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-body max-w-3xl mx-auto leading-relaxed mt-8">
            L'impermeabilizzazione definitiva in Poliurea a spruzzo ad alta tecnologia. 
            La soluzione più rapida ed efficiente sul mercato.
          </p>
        </div>
      </section>

      {/* Vantaggi Competitivi (Sfondo Scuro) */}
      <PolyureaBenefits />

      {/* Showcase Interattivo Prima/Dopo (Sfondo Chiaro) */}
      <PolyureaShowcase />

      {/* Casi Studio reali (Sfondo Chiaro) */}
      <section className="bg-surface py-24">
        <div className="text-center mb-16 px-4">
          <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-2 block font-body">
            Riprova Sociale
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-main mb-6">
            I Nostri Interventi
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto font-body">
            Scopri come abbiamo risolto problemi critici in ambito industriale, residenziale e commerciale grazie alla Poliurea.
          </p>
        </div>
        <CaseStudies />
      </section>

      {/* Call to Action Finale (Sfondo Accento) */}
      <CallToAction />

    </main>
  );
}
