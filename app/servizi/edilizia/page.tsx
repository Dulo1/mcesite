import type { Metadata } from "next";
import EdiliziaServices from "@/components/EdiliziaServices";
import ProjectGallery from "@/components/ProjectGallery";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Edilizia e Ristrutturazioni | Montagna Costruzioni",
  description: "Dalle ristrutturazioni civili alle grandi opere industriali. Interventi chiavi in mano con precisione, qualità e sicurezza.",
};

export default function EdiliziaPage() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      
      {/* Hero Section */}
      <section className="bg-primary-dark py-32 px-4 text-center border-b border-surface-muted/20">
        <div className="max-w-5xl mx-auto">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block font-body">
            Divisione Edilizia
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 text-white leading-tight">
            Costruiamo solide certezze.
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-body max-w-3xl mx-auto leading-relaxed">
            Dalle ristrutturazioni civili alle grandi opere industriali: <br className="hidden md:block"/>
            la tua tranquillità, le nostre mani.
          </p>
        </div>
      </section>

      {/* Lista Servizi (Sfondo Chiaro) */}
      <EdiliziaServices />

      {/* Galleria Cantieri (Sfondo Scuro) */}
      <ProjectGallery />

      {/* Call to Action Specifica per l'Edilizia (Sfondo Accento) */}
      <CallToAction 
        title="Pronto a dare vita al tuo progetto?"
        subtitle="Contattaci per una consulenza tecnica gratuita. Svilupperemo un piano d'intervento su misura per le tue esigenze."
        buttonText="Richiedi Preventivo"
      />

    </main>
  );
}
