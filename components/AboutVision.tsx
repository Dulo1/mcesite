import React from 'react';
import { HardHat } from 'lucide-react';

const AboutVision = () => {
  return (
    <section className="w-full bg-surface py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Colonna 1: Copy */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <span className="text-sm font-bold tracking-[0.2em] text-accent uppercase font-body">
              La Nostra Visione
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-text-main leading-tight">
              Costruiamo con la solidità di ieri, proteggiamo con la tecnologia di domani.
            </h2>
            
            <div className="flex flex-col gap-5 mt-2">
              <p className="text-lg text-text-muted font-body leading-relaxed">
                Siamo partiti dal mattone tradizionale, imparando il valore del sudore e del lavoro fatto a regola d'arte. Conosciamo i cantieri, i materiali e le sfide di ogni progetto edile.
              </p>
              
              <p className="text-lg text-text-main font-medium font-body leading-relaxed">
                Ma non ci siamo fermati. Vedendo troppi tetti rovinati e aziende bloccate da infiltrazioni croniche, abbiamo deciso di evolverci. Abbiamo integrato soluzioni all'avanguardia come l'impermeabilizzazione in Poliurea a spruzzo. Il risultato? Interventi rapidi, senza demolizioni e garantiti nel tempo.
              </p>
            </div>

            {/* Signature per umanizzare il messaggio */}
            <div className="mt-8">
              <span className="font-display text-2xl md:text-3xl italic text-primary-dark/80 dark:text-white/80">
                Montagna Costruzioni Edili
              </span>
            </div>
          </div>

          {/* Colonna 2: Immagine (Placeholder) */}
          <div className="order-1 lg:order-2 w-full aspect-square md:aspect-[4/5] lg:aspect-square xl:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden bg-surface-muted border border-surface-muted/50 shadow-xl flex flex-col items-center justify-center relative">
            
            {/* Effetto luce leggero */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary-dark/5 dark:to-white/5 pointer-events-none"></div>
            
            {/* Contenuto Placeholder */}
            <HardHat className="w-24 h-24 md:w-32 md:h-32 text-text-muted/30 mb-6 relative z-10" strokeWidth={1} />
            <span className="text-text-muted/60 font-medium font-body tracking-wider uppercase text-sm relative z-10">
              Immagine Team / Cantiere
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVision;
