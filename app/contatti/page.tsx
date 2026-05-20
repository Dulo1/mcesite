import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Clock, Phone, Mail, MapPin, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti e Sopralluoghi | Montagna Costruzioni Edili",
  description: "Contatta Montagna Costruzioni Edili per sopralluoghi gratuiti, preventivi e interventi in poliurea. Siamo pronti a risolvere il tuo problema.",
};

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-surface text-text-main">
      
      {/* Header di Sezione */}
      <section className="bg-primary-dark py-24 px-4 text-center border-b border-surface-muted/20">
        <div className="max-w-4xl mx-auto mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Mettiti in contatto con i nostri tecnici.
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto leading-relaxed">
            Che si tratti di un'infiltrazione complessa o di un nuovo progetto edile, siamo pronti a fare un sopralluogo gratuito.
          </p>
        </div>
      </section>

      {/* Griglia Principale */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Colonna Recapiti (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            <div className="bg-surface-muted p-8 rounded-2xl border border-surface-muted/50 shadow-sm">
              <div className="flex flex-col gap-8">
                
                {/* Ufficio e Orari */}
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-lg text-text-main font-display">Ufficio e Orari</h3>
                    <p className="text-text-muted mt-1 font-body">Lun - Ven: 08:00 - 18:00</p>
                    <p className="text-text-muted font-body">Sabato: Su appuntamento</p>
                  </div>
                </div>

                {/* Pronto Intervento / Telefono */}
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-lg text-text-main mb-1 font-display">Pronto Intervento</h3>
                    <a href="tel:+390123456789" className="text-2xl font-bold text-accent hover:text-accent-hover transition-colors font-display block">
                      +39 012 345 6789
                    </a>
                    <p className="text-sm text-text-muted mt-2 font-body leading-relaxed">
                      Chiama per urgenze o per fissare direttamente il sopralluogo al telefono.
                    </p>
                  </div>
                </div>

                {/* Email Istituzionale */}
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-lg text-text-main mb-1 font-display">Email</h3>
                    <a href="mailto:info@montagnacostruzioni.it" className="text-text-main font-medium hover:text-accent transition-colors font-body underline underline-offset-4 decoration-surface-muted/50">
                      info@montagnacostruzioni.it
                    </a>
                    <p className="text-sm text-text-muted mt-2 font-body leading-relaxed">
                      Invia qui planimetrie, foto dei danni o richieste di capitolato.
                    </p>
                  </div>
                </div>

                {/* Sede Operativa */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-bold text-lg text-text-main mb-1 font-display">Sede Operativa</h3>
                    <p className="text-text-muted font-body leading-relaxed">
                      Via Roma, 123<br />
                      00100 Roma (RM)
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Mappa Interattiva (Placeholder) */}
            <div className="w-full h-64 bg-surface-muted rounded-2xl border border-surface-muted/50 flex flex-col items-center justify-center text-text-muted group hover:border-accent/30 transition-colors cursor-pointer shadow-sm">
              <Map className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <span className="font-medium font-body tracking-wide">[Mappa Google Maps - Via Roma 123]</span>
              <span className="text-xs mt-2 opacity-70 font-body">Clicca per esplorare la mappa</span>
            </div>

          </div>

          {/* Colonna Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <ContactForm layout="simple" />
          </div>

        </div>
      </section>

    </main>
  );
}
