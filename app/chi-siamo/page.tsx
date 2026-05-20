import type { Metadata } from "next";
import AboutVision from "@/components/AboutVision";
import ProcessTimeline from "@/components/ProcessTimeline";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "Chi Siamo | Montagna Costruzioni Edili",
  description: "La storia, il metodo e le garanzie di chi costruisce per far durare le cose nel tempo.",
};

export default function ChiSiamoPage() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      
      {/* Header della Pagina */}
      <section className="bg-primary-dark py-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-surface mb-6">
            Oltre il Mattone.
          </h1>
          <p className="text-lg text-surface-muted max-w-2xl mx-auto font-body leading-relaxed">
            La storia, il metodo e le garanzie di chi costruisce per far durare le cose nel tempo.
          </p>
        </div>
      </section>

      {/* Sezione Visione */}
      <AboutVision />

      {/* Sezione Metodo & Certificazioni (Flusso Verticale compatto) */}
      <section className="bg-surface py-12 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-4">
            <h2 className="text-3xl font-display font-bold text-text-main">
              Il Metodo Montagna
            </h2>
          </div>
          
          {/* Layout orizzontale compatto del metodo */}
          <ProcessTimeline />

          {/* Divisore leggero */}
          <div className="border-b border-surface-muted/50 my-10"></div>

          {/* Griglia a 3 colonne compatta delle certificazioni */}
          <Certifications />

        </div>
      </section>
    </main>
  );
}
